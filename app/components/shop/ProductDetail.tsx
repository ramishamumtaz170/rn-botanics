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
    <section className="grid items-center gap-6 pb-24 md:gap-8 lg:grid-cols-2 lg:gap-12 lg:pb-0 lg:min-h-[calc(100vh-100px)]">
      {/* Product Images (Left Column) */}
      <div className="flex flex-col items-center w-full max-w-[480px] mx-auto lg:mx-0">
        <div className="relative flex aspect-square w-full justify-center rounded-[24px] bg-white p-5 border border-[#E8E3DA] items-center transition-shadow duration-300 hover:shadow-sm">
          <Image
            src={selectedImage}
            alt={PRODUCT.name}
            width={360}
            height={360}
            priority
            className="h-auto max-h-[260px] w-auto sm:max-h-[340px] object-contain transition-all duration-300"
          />
        </div>

        {/* Thumbnail Selector */}
        <div className="mt-3.5 flex justify-center gap-2">
          {images.map((image, index) => {
            const selected = selectedImage === image;

            return (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedImage(image)}
                className={`
                  overflow-hidden
                  rounded-xl
                  border-2
                  bg-white
                  p-0.5
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
                  width={60}
                  height={60}
                  className="h-[46px] w-[46px] sm:h-[58px] sm:w-[58px] object-cover rounded-lg"
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Information (Right Column) */}
      <div className="min-w-0 flex flex-col justify-between">
        <div>
          <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#7C9A7D] sm:text-xs">
            Signature Collection
          </p>

          <h1 className="mt-1 text-xl font-bold leading-tight text-[#2E473B] sm:text-3xl">
            {PRODUCT.name}
          </h1>

          {/* Rating and Tagline */}
          <div className="mt-1 flex items-center gap-1.5 sm:mt-1.5">
            <span
              className="text-xs tracking-wide text-[#C7A25A] sm:text-base"
              aria-label="5 out of 5 stars"
            >
              ★★★★★
            </span>
            <span className="truncate text-[10px] text-gray-500 sm:text-xs">
              {PRODUCT.tagline}
            </span>
          </div>

          {/* Description */}
          <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:mt-3 sm:text-sm sm:leading-relaxed line-clamp-3 sm:line-clamp-4">
            {PRODUCT.description}
          </p>

          {/* Combined Price Line */}
          <div className="mt-2.5 sm:mt-3.5 flex items-baseline gap-2.5 flex-wrap">
            <h2 className="text-2xl font-bold text-[#2E473B] sm:text-3xl">
              Rs. {PRODUCT.salePrice.toLocaleString()}
            </h2>
            <span className="text-xs text-gray-400 line-through sm:text-sm">
              Rs. {PRODUCT.originalPrice.toLocaleString()}
            </span>
            <span className="rounded-full bg-[#E8F3EA] px-2.5 py-0.5 text-[10px] font-semibold text-[#2E473B] sm:text-xs">
              Save {PRODUCT.discount}%
            </span>
          </div>

          {/* Cap Selection */}
          <div className="mt-3 sm:mt-4">
            <p className="mb-1 text-xs font-semibold text-[#2E473B] sm:mb-1.5 sm:text-sm">
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
                    className={`flex cursor-pointer items-center gap-1.5 rounded-lg border px-2 py-1.5 transition sm:gap-2.5 sm:rounded-xl sm:px-3.5 sm:py-2 ${
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
                    <span className="text-[10px] font-medium text-[#2E473B] sm:text-xs md:text-sm">
                      {cap}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quantity & Actions Row */}
        <div className="mt-3.5 sm:mt-5 flex flex-wrap items-center gap-3.5">
          {/* Quantity Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#2E473B] sm:text-sm">
              Qty
            </span>
            <div className="flex items-center overflow-hidden rounded-full border border-[#D8D2C7] bg-white">
              <button
                type="button"
                onClick={decrease}
                aria-label="Decrease quantity"
                className="flex h-7 w-7 items-center justify-center text-base text-[#2E473B] hover:bg-[#F8F5EF] sm:h-9 sm:w-9"
              >
                −
              </button>
              <span className="flex h-7 min-w-7 items-center justify-center text-xs font-semibold text-[#2E473B] sm:h-9 sm:min-w-9 sm:text-sm">
                {quantity}
              </span>
              <button
                type="button"
                onClick={increase}
                aria-label="Increase quantity"
                className="flex h-7 w-7 items-center justify-center text-base text-[#2E473B] hover:bg-[#F8F5EF] sm:h-9 sm:w-9"
              >
                +
              </button>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden flex-1 items-center gap-2.5 sm:flex">
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 rounded-full border-2 border-[#2E473B] py-2 px-4 text-sm font-semibold text-[#2E473B] transition hover:bg-[#F8F5EF] text-center whitespace-nowrap"
            >
              Add to Cart
            </button>
            <button
              type="button"
              onClick={handleBuyNow}
              className="flex-1 rounded-full bg-[#2E473B] py-2 px-4 text-sm font-semibold text-white transition hover:bg-[#23392F] text-center whitespace-nowrap"
            >
              Buy Now
            </button>
          </div>
        </div>

        {/* Product Highlights (2x2 Grid) */}
        <div className="mt-4 border-t border-[#E5DED2] pt-3.5 sm:mt-5">
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            <div className="flex items-center justify-between gap-2 border-b border-[#F2EDE4] pb-1">
              <span className="text-[10px] text-gray-500 sm:text-xs">
                Size
              </span>
              <span className="text-right text-[10px] font-semibold text-[#2E473B] sm:text-xs">
                {PRODUCT.bottleSize}
              </span>
            </div>

            <div className="flex items-center justify-between gap-2 border-b border-[#F2EDE4] pb-1">
              <span className="text-[10px] text-gray-500 sm:text-xs">
                Formula
              </span>
              <span className="text-right text-[10px] font-semibold text-[#2E473B] sm:text-xs">
                {PRODUCT.formula}
              </span>
            </div>

            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] text-gray-500 sm:text-xs">
                Suitable For
              </span>
              <span className="text-right text-[10px] font-semibold text-[#2E473B] sm:text-xs truncate max-w-[120px]" title={PRODUCT.suitableFor}>
                {PRODUCT.suitableFor}
              </span>
            </div>

            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] text-gray-500 sm:text-xs">
                Stock
              </span>
              <span className="text-[10px] font-semibold text-green-700 sm:text-xs">
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
          className="flex-1 rounded-full border-2 border-[#2E473B] px-3 py-2.5 text-sm font-semibold text-[#2E473B]"
        >
          Add to Cart
        </button>
        <button
          type="button"
          onClick={handleBuyNow}
          className="flex-1 rounded-full bg-[#2E473B] px-3 py-2.5 text-sm font-semibold text-white"
        >
          Buy Now
        </button>
      </div>
    </section>
  );
}