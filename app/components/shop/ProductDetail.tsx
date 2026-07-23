"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


export default function ProductDetail() {
  const router = useRouter();
  const images = [
    "/images/product.png",
    "/images/product.png",
    "/images/product.png",
    "/images/product.png",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const increase = () => setQuantity((prev) => prev + 1);

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

const handleAddToCart = () => {
  console.log("🔥 Add to Cart clicked");

  addToCart({
    id: 1,
    name: "R & N Botanics Signature Hair Oil",
    price: 1400,
    image: "/images/product.png",
    quantity,
  });

  console.log("✅ addToCart finished");

  toast.success(
    "R & N Botanics Signature Hair Oil added to your cart.",
    {
      duration: 2500,
    }
  );
};

const handleBuyNow = () => {
  alert("Inside handleBuyNow");
    console.log("BUY NOW CLICKED");

  const product = {
    id: 1,
    name: "R & N Botanics Signature Hair Oil",
    price: 1400,
    image: "/images/product.png",
    quantity,
  };

  console.log("Adding:", product);

  addToCart(product);

  console.log("Product added.");

  setTimeout(() => {
    router.push("/checkout");
  }, 500);
};
  return (
    <section className="grid lg:grid-cols-2 gap-20 items-start">

      {/* LEFT SIDE */}

      <div className="flex flex-col items-center">

        {/* Main Image */}

        <div className="relative bg-white rounded-[40px] p-10 shadow-xl w-full max-w-[520px] flex justify-center">

          {/* Offer Badge */}

          <div className="absolute top-6 left-6 bg-[#C7A25A] text-[#2E473B] px-5 py-2 rounded-full text-sm font-semibold">
            30% OFF
          </div>

          {/* Bottle Size */}

          <div className="absolute top-6 right-6 bg-[#2E473B] text-white px-5 py-2 rounded-full text-sm font-medium">
            100 ml
          </div>

          <Image
            src={selectedImage}
            alt="R & N Botanics Hair Oil"
            width={430}
            height={430}
            className="object-contain"
            priority
          />

        </div>

        {/* Thumbnails */}

        <div className="flex justify-center gap-4 mt-8 flex-wrap">

          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`rounded-2xl p-2 border-2 transition-all duration-300 ${
                selectedImage === image
                  ? "border-[#2E473B] shadow-md"
                  : "border-[#E8E3DA]"
              }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                width={75}
                height={75}
                className="object-contain"
              />
            </button>
          ))}

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div>

        <p className="uppercase tracking-[0.3em] text-sm text-[#7C9A7D] font-medium">
          Signature Collection
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight text-[#2E473B]">
          R & N Botanics
          <br />
          Signature Hair Oil
        </h1>

        {/* Rating */}

        <div className="mt-6 flex items-center gap-3">
          <span className="text-[#C7A25A] text-xl">
            ★★★★★
          </span>

          <span className="text-gray-500">
            Premium Botanical Formula
          </span>
        </div>

        {/* Description */}

        <p className="mt-8 text-lg leading-8 text-gray-600">
          A luxurious botanical hair oil handcrafted with carefully selected
          herbs and premium oils to nourish the scalp, strengthen roots,
          reduce hair fall and restore naturally healthy, shiny hair.
        </p>

        {/* Price */}

        <div className="mt-10">

          <p className="text-2xl text-gray-400 line-through">
            Rs. 2,000
          </p>

          <div className="flex items-center gap-4 mt-3 flex-wrap">

            <h2 className="text-5xl font-bold text-[#2E473B]">
              Rs. 1,400
            </h2>

            <span className="bg-[#E8F3EA] text-[#2E473B] px-4 py-2 rounded-full font-semibold">
              Save 30%
            </span>

          </div>

        </div>

        {/* Quantity */}

        <div className="mt-12">

          <p className="font-semibold text-[#2E473B] mb-4">
            Quantity
          </p>

          <div className="flex items-center border border-[#D8D2C7] rounded-full overflow-hidden w-fit">

            <button
              onClick={decrease}
              className="px-6 py-4 text-2xl hover:bg-[#F8F5EF] transition"
            >
              −
            </button>

            <span className="px-10 text-lg font-semibold">
              {quantity}
            </span>

            <button
              onClick={increase}
              className="px-6 py-4 text-2xl hover:bg-[#F8F5EF] transition"
            >
              +
            </button>

          </div>

        </div>

        {/* Buttons */}

        <div className="mt-12 flex flex-col sm:flex-row gap-5">

          <button
  onClick={handleAddToCart}
  className="flex-1 border-2 border-[#2E473B]
             text-[#2E473B]
             py-5 px-10
             rounded-full
             text-lg font-semibold
             flex items-center justify-center
             hover:bg-[#F8F5EF]
             transition-all duration-300"
>
  Add to Cart
</button>


      <button
  type="button"
  onClick={handleBuyNow}
  className="flex-1 bg-[#2E473B]
             text-white
             py-5 px-10
             rounded-full
             text-lg font-semibold
             flex items-center justify-center
             hover:bg-[#23392F]
             transition-all duration-300"
>
  Buy Now
</button>
        </div>

        {/* Product Highlights */}

        <div className="mt-12 border-t border-[#E5DED2] pt-8 space-y-5">

          <div className="flex justify-between">
            <span className="text-gray-500">Bottle Size</span>
            <span className="font-semibold text-[#2E473B]">100 ml</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Formula</span>
            <span className="font-semibold text-[#2E473B]">
              100% Botanical
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Suitable For</span>
            <span className="font-semibold text-[#2E473B]">
              All Hair Types
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Availability</span>
            <span className="font-semibold text-green-700">
              In Stock
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}