"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { PRODUCT } from "@/app/constants/product";

export default function ProductShowcase() {
  const router = useRouter();
  const { addToCart } = useCart();

  const images = PRODUCT.images;

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleBuyNow = () => {
    addToCart({
      id: PRODUCT.id,
      name: PRODUCT.name,
      price: PRODUCT.salePrice,
      image: PRODUCT.image,
      quantity: 1,
    });

    router.push("/checkout");
  };

  const handleAddToCart = () => {
    addToCart({
      id: PRODUCT.id,
      name: PRODUCT.name,
      price: PRODUCT.salePrice,
      image: PRODUCT.image,
      quantity: 1,
    });
   toast.success(`${PRODUCT.name} added to your cart.`, {
    duration: 1200,
  });
};
  return (
    <section>
      <div className="grid lg:grid-cols-2 gap-4 items-center p-6 md:p-6">

        {/* LEFT SIDE - Product Image */}

        <div className="flex flex-col items-center">

          <div className="flex justify-center items-center">
            <Image
              src={selectedImage}
              alt={PRODUCT.name}
              width={320}
              height={320}
              className="object-contain drop-shadow-2xl transition duration-500"
            />
          </div>

          {/* Image Thumbnails */}

          <div className="mt-4 flex justify-center gap-2">
            {images.map((image, index) => {
              const selected = selectedImage === image;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={`overflow-hidden rounded-lg border-2 p-0.5 transition-all duration-300 ${
                    selected
                      ? "border-[#2E473B] scale-105"
                      : "border-[#E8E3DA] hover:border-[#7C9A7D]"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${PRODUCT.name} ${index + 1}`}
                    width={45}
                    height={45}
                    className="h-10 w-10 object-cover rounded-md"
                  />
                </button>
              );
            })}
          </div>

        </div>

        {/* RIGHT SIDE - Product Information */}

        <div>

          {/* Collection */}

          <p className="uppercase tracking-[0.3em] text-sm text-[#7C9A7D] font-medium">
            Signature Collection
          </p>

          {/* Title */}

          <h2 className="mt-2 text-2xl font-bold leading-tight text-[#2E473B]">
            {PRODUCT.name}
          </h2>

          {/* Description */}

          <p className="mt-2 text-lg leading-6 text-gray-600">
            {PRODUCT.description}
          </p>

          {/* Rating */}

          <div className="mt-4 flex items-center gap-3">
            <span className="text-[#C7A25A] text-xl">
              ★★★★★
            </span>

            <span className="text-gray-500">
              {PRODUCT.tagline}
            </span>
          </div>

          {/* Price */}

          <div className="mt-4">

            <p className="text-xl text-gray-400 line-through">
              Rs. {PRODUCT.originalPrice.toLocaleString()}
            </p>

            <p className="text-3xl font-bold text-[#2E473B]">
              Rs. {PRODUCT.salePrice.toLocaleString()}
            </p>

          </div>

         {/* Free Delivery Announcement */}
<div className="mt-4 inline-flex items-center gap-3 rounded-2xl border border-[#C7A25A]/40 bg-[#FFF9EC] px-4 py-3 shadow-sm">
  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2E473B] text-white text-lg">
    🚚
  </div>

  <div>
    <p className="text-sm sm:text-base font-bold tracking-wide text-[#2E473B]">
      FREE DELIVERY
    </p>

    <p className="text-[10px] sm:text-xs text-gray-600">
      Across Pakistan • No extra shipping charges
    </p>
  </div>
</div>

          {/* Buttons */}

          <div className="mt-4 flex flex-col sm:flex-row gap-5">

            {/* Add to Cart */}

            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 border-2 border-[#2E473B] text-[#2E473B] py-2 px-2 rounded-full text-lg font-semibold hover:bg-[#F8F5EF] transition-all duration-300"
            >
              Add to Cart
            </button>

            {/* Buy Now */}

            <button
              type="button"
              onClick={handleBuyNow}
              className="flex-1 flex items-center justify-center bg-[#2E473B] text-white py-2 px-2 rounded-full text-lg font-semibold hover:bg-[#23392F] transition-all duration-300"
            >
              Buy Now
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}