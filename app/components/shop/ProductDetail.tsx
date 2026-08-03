"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { PRODUCT } from "@/app/constants/product";

type CapOption = "Nozzle Applicator Cap" | "Flip Top Cap";

export default function ProductDetail() {
  const router = useRouter();
  const { addToCart } = useCart();

  const images = PRODUCT.images;



  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedCap, setSelectedCap] =
    useState<CapOption>("Flip Top Cap");

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
      cap: selectedCap,
    });
  };

  const handleAddToCart = () => {
    addProductToCart();

    toast.success(`${PRODUCT.name} added to your cart.`, {
      duration: 2500,
    });
  };

  const handleBuyNow = () => {
    addProductToCart();
    router.push("/checkout");
  };

  return (
    <section className="grid items-start gap-4 pb-24 lg:grid-cols-2 lg:gap-10 lg:pb-0">
      {/* Product Images */}
      <div className="flex flex-col items-center">
       <div className="relative flex w-full max-w-[560px] justify-center rounded-[32px] bg-white p-8 border border-[#E8E3DA]">
  <Image
    src={selectedImage}
    alt={PRODUCT.name}
    width={480}
    height={480}
    priority
    className="object-contain transition-all duration-300"
  />
</div>
        <div className="mt-5 flex justify-center gap-3">
  {images.map((image, index) => {
    const selected = selectedImage === image;


    return (
      <button
        key={index}
        type="button"
        onClick={() => setSelectedImage(image)}
        className={`
          overflow-hidden
          rounded-2xl
          border-2
          bg-white
          p-1
          transition-all
          duration-300
          ${
            selected
              ? "border-[#2E473B] scale-105"
              : "border-[#E8E3DA] hover:border-[#7C9A7D] hover:scale-105"
          }
        `}
      >
        <Image
          src={image}
          alt={`Product ${index + 1}`}
          width={70}
height={70}
className="h-[65px] w-[65px] sm:h-[82px] sm:w-[82px] object-cover rounded-xl"
        />
      </button>
    );
  })}
</div>
      </div>

      {/* Product Information */}
      <div className="min-w-0">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#7C9A7D] sm:text-xs">
          Signature Collection
        </p>

        <h1 className="mt-1 text-2xl font-bold leading-tight text-[#2E473B] sm:text-4xl">
          {PRODUCT.name}
        </h1>

        <div className="mt-1 flex items-center gap-1.5 sm:mt-2">
          <span
            className="text-sm tracking-wide text-[#C7A25A] sm:text-lg"
            aria-label="5 out of 5 stars"
          >
            ★★★★★
          </span>

          <span className="truncate text-[11px] text-gray-500 sm:text-sm">
            {PRODUCT.tagline}
          </span>
        </div>

        <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-600 sm:mt-4 sm:line-clamp-none sm:text-base sm:leading-7">
          {PRODUCT.description}
        </p>

        {/* Price */}
        <div className="mt-2 sm:mt-3">
          <p className="text-xs text-gray-400 line-through sm:text-lg">
            Rs. {PRODUCT.originalPrice.toLocaleString()}
          </p>

          <div className="mt-0.5 flex items-center gap-2 sm:mt-1 sm:gap-3">
            <h2 className="text-2xl font-bold text-[#2E473B] sm:text-5xl">
              Rs. {PRODUCT.salePrice.toLocaleString()}
            </h2>

            <span className="rounded-full bg-[#E8F3EA] px-2 py-1 text-[10px] font-semibold text-[#2E473B] sm:px-3 sm:py-1.5 sm:text-sm">
              Save {PRODUCT.discount}%
            </span>
          </div>
        </div>

        {/* Cap Selection */}
        <div className="mt-2 sm:mt-5">
          <p className="mb-1 text-xs font-semibold text-[#2E473B] sm:mb-2.5 sm:text-sm">
            Choose Your Bottle Cap
          </p>

          <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
            {(
              ["Flip Top Cap", "Nozzle Applicator Cap"] as CapOption[]
            ).map((cap) => {
              const isSelected = selectedCap === cap;

              return (
                <label
                  key={cap}
                  className={`flex cursor-pointer items-center gap-1.5 rounded-lg border px-2 py-1.5 transition sm:gap-3 sm:rounded-xl sm:px-4 sm:py-2.5 ${
                    isSelected
                      ? "border-[#2E473B] bg-[#F8F5EF]"
                      : "border-[#E8E3DA] bg-white hover:border-[#7C9A7D]"
                  }`}
                >
                  <input
                    type="radio"
                    name="cap"
                    value={cap}
                    checked={isSelected}
                    onChange={() => setSelectedCap(cap)}
                    className="h-3 w-3 accent-[#2E473B]"
                  />

                  <span className="text-[10px] font-medium text-[#2E473B] sm:text-sm">
                    {cap}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Quantity */}
        <div className="mt-2 flex items-center gap-3 sm:mt-5">
          <p className="text-xs font-semibold text-[#2E473B] sm:text-sm">
            Quantity
          </p>

          <div className="flex items-center overflow-hidden rounded-full border border-[#D8D2C7] bg-white">
            <button
              type="button"
              onClick={decrease}
              aria-label="Decrease quantity"
              className="flex h-8 w-8 items-center justify-center text-lg text-[#2E473B] hover:bg-[#F8F5EF] sm:h-10 sm:w-10"
            >
              −
            </button>

            <span className="flex h-8 min-w-8 items-center justify-center text-sm font-semibold text-[#2E473B] sm:h-10 sm:min-w-10">
              {quantity}
            </span>

            <button
              type="button"
              onClick={increase}
              aria-label="Increase quantity"
              className="flex h-8 w-8 items-center justify-center text-lg text-[#2E473B] hover:bg-[#F8F5EF] sm:h-10 sm:w-10"
            >
              +
            </button>
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="mt-3 hidden gap-2.5 sm:flex sm:mt-5">
          <button
            type="button"
            onClick={handleAddToCart}
            className="flex-1 rounded-full border-2 border-[#2E473B] px-6 py-3 text-base font-semibold text-[#2E473B] transition hover:bg-[#F8F5EF]"
          >
            Add to Cart
          </button>

          <button
            type="button"
            onClick={handleBuyNow}
            className="flex-1 rounded-full bg-[#2E473B] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#23392F]"
          >
            Buy Now
          </button>
        </div>

        {/* Product Highlights */}
        <div className="mt-3 border-t border-[#E5DED2] pt-3 sm:mt-6 sm:pt-5">
          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 sm:block sm:space-y-2.5">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] text-gray-500 sm:text-sm">
                Bottle Size
              </span>
              <span className="text-right text-[10px] font-semibold text-[#2E473B] sm:text-sm">
                {PRODUCT.bottleSize}
              </span>
            </div>

            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] text-gray-500 sm:text-sm">
                Formula
              </span>
              <span className="text-right text-[10px] font-semibold text-[#2E473B] sm:text-sm">
                {PRODUCT.formula}
              </span>
            </div>

            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] text-gray-500 sm:text-sm">
                Suitable For
              </span>
              <span className="text-right text-[10px] font-semibold text-[#2E473B] sm:text-sm">
                {PRODUCT.suitableFor}
              </span>
            </div>

            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] text-gray-500 sm:text-sm">
                Availability
              </span>
              <span className="text-[10px] font-semibold text-green-700 sm:text-sm">
                {PRODUCT.stock}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Actions */}
      <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-[#E8E3DA] bg-white/95 p-3 shadow-[0_-8px_24px_rgba(46,71,59,0.12)] backdrop-blur sm:hidden">
        <button
          type="button"
          onClick={handleAddToCart}
          className="flex-1 rounded-full border-2 border-[#2E473B] px-3 py-3 text-sm font-semibold text-[#2E473B]"
        >
          Add to Cart
        </button>

        <button
          type="button"
          onClick={handleBuyNow}
          className="flex-1 rounded-full bg-[#2E473B] px-3 py-3 text-sm font-semibold text-white"
        >
          Buy Now
        </button>
      </div>
    </section>
  );
}