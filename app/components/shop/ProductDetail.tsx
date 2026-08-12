"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { PRODUCT } from "@/app/constants/product";

// Adjust this to match your actual sticky header height
const HEADER_HEIGHT = "64px";

export default function ProductDetail() {
  const router = useRouter();
  const { addToCart } = useCart();

  const images = PRODUCT.images;

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity((previous) => previous + 1);
  };

  const decrease = () => {
    setQuantity((previous) => (previous > 1 ? previous - 1 : 1));
  };

  const addProductToCart = () => {
    addToCart({
      id: PRODUCT.id,
      name: PRODUCT.name,
      price: PRODUCT.salePrice,
      image: PRODUCT.image,
      quantity,
    });
  };

  const handleAddToCart = () => {
    addProductToCart();

    toast.success(`${PRODUCT.name} added to your cart.`, {
      duration: 1200,
    });
  };

  const handleBuyNow = () => {
    addProductToCart();
    router.push("/checkout");
  };

  return (
    <section
      className="grid gap-4 overflow-hidden lg:grid-cols-2 lg:gap-10"
      style={{ height: `calc(100dvh - ${HEADER_HEIGHT})` }}
    >
      {/* ================= LEFT SIDE ================= */}
      <div className="flex min-h-0 flex-col items-center justify-center overflow-hidden">
        
        {/* Product Image */}
        <Image
          src={selectedImage}
          alt={PRODUCT.name}
          width={420}
          height={420}
          className="relative z-10 object-contain drop-shadow-2xl transition duration-500"
        />

        {/* Thumbnail Selector */}
        <div className="mt-2 flex justify-center gap-1.5">
          {images.map((image, index) => {
            const selected = selectedImage === image;

            return (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedImage(image)}
                className={`overflow-hidden rounded-lg border-2 bg-white p-0.5 transition-all duration-300 ${
                  selected
                    ? "border-[#2E473B] scale-105"
                    : "border-[#E8E3DA] hover:border-[#7C9A7D] hover:scale-105"
                }`}
              >
                <Image
                  src={image}
                  alt={`Product ${index + 1}`}
                  width={44}
                  height={44}
                  className="h-9 w-9 rounded-md object-cover sm:h-11 sm:w-11"
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="flex min-h-0 flex-col overflow-hidden">
        <div className="min-h-0">

          {/* Collection */}
          <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#7C9A7D] sm:text-xs">
            Signature Collection
          </p>

          {/* Product Name */}
          <h1 className="mt-0.5 text-lg font-bold leading-tight text-[#2E473B] sm:text-2xl">
            {PRODUCT.name}
          </h1>

          {/* Rating */}
          <div className="mt-1 flex items-center gap-1.5">
            <span
              className="text-xs tracking-wide text-[#C7A25A] sm:text-sm"
              aria-label="5 out of 5 stars"
            >
              ★★★★★
            </span>

            <span className="truncate text-[10px] text-gray-500 sm:text-xs">
              {PRODUCT.tagline}
            </span>
          </div>

          {/* Description */}
          <p className="mt-1.5 line-clamp-2 text-[11px] leading-snug text-gray-600 sm:mt-2 sm:text-sm">
            {PRODUCT.description}
          </p>

          {/* Price */}
          <div className="mt-2 flex flex-wrap items-baseline gap-2">
            <h2 className="text-xl font-bold text-[#2E473B] sm:text-2xl">
              Rs. {PRODUCT.salePrice.toLocaleString()}
            </h2>

            <span className="text-xs text-gray-400 line-through">
              Rs. {PRODUCT.originalPrice.toLocaleString()}
            </span>

            <span className="rounded-full bg-[#E8F3EA] px-2 py-0.5 text-[10px] font-semibold text-[#2E473B]">
              Save {PRODUCT.discount}%
            </span>
          </div>

          {/* Free Delivery Announcement */}
          <div className="mt-3 inline-flex items-center gap-3 rounded-2xl border border-[#C7A25A]/40 bg-[#FFF9EC] px-4 py-3 shadow-sm">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2E473B] text-lg text-white">
              🚚
            </div>

            <div>
              <p className="text-sm font-bold tracking-wide text-[#2E473B] sm:text-base">
                FREE DELIVERY
              </p>

              <p className="text-[10px] text-gray-600 sm:text-xs">
                Across Pakistan • No extra shipping charges
              </p>
            </div>
          </div>
        </div>

        {/* Quantity & Actions */}
        <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-2.5">

          {/* Quantity */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#2E473B]">
              Qty
            </span>

            <div className="flex items-center overflow-hidden rounded-full border border-[#D8D2C7] bg-white">
              <button
                type="button"
                onClick={decrease}
                aria-label="Decrease quantity"
                className="flex h-7 w-7 items-center justify-center text-base text-[#2E473B] hover:bg-[#F8F5EF]"
              >
                −
              </button>

              <span className="flex h-7 min-w-7 items-center justify-center text-xs font-semibold text-[#2E473B]">
                {quantity}
              </span>

              <button
                type="button"
                onClick={increase}
                aria-label="Increase quantity"
                className="flex h-7 w-7 items-center justify-center text-base text-[#2E473B] hover:bg-[#F8F5EF]"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex min-w-[200px] flex-1 items-center gap-2">

            {/* Add to Cart */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 whitespace-nowrap rounded-full border-2 border-[#2E473B] px-3 py-2 text-center text-xs font-semibold text-[#2E473B] transition hover:bg-[#F8F5EF] sm:text-sm"
            >
              Add to Cart
            </button>

            {/* Buy Now */}
            <button
              type="button"
              onClick={handleBuyNow}
              className="flex-1 whitespace-nowrap rounded-full bg-[#2E473B] px-3 py-2 text-center text-xs font-semibold text-white transition hover:bg-[#23392F] sm:text-sm"
            >
              Buy Now
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}