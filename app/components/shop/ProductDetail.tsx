"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { PRODUCT } from "@/app/constants/product";

type CapOption = "Nozzle Applicator Cap" | "Flip Top Cap";

// Adjust this to match your actual sticky header height
const HEADER_HEIGHT = "64px";

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
    toast.success(`${PRODUCT.name} added to your cart.`, { duration: 2500 });
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
      {/* Product Images (Left Column) */}
      <div className="flex min-h-0 flex-col items-center justify-center w-full max-w-[420px] mx-auto lg:mx-0">
        <div className="relative flex w-full justify-center rounded-[20px] bg-white p-3 border border-[#E8E3DA] items-center max-h-[26vh] sm:max-h-[38vh] lg:max-h-[50vh] aspect-square">
          <Image
            src={selectedImage}
            alt={PRODUCT.name}
            width={320}
            height={320}
            priority
            className="h-full w-full object-contain"
          />
        </div>

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
                  className="h-9 w-9 sm:h-11 sm:w-11 object-cover rounded-md"
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Information (Right Column) */}
      <div className="flex min-h-0 flex-col overflow-hidden">
        <div className="min-h-0">
          <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#7C9A7D] sm:text-xs">
            Signature Collection
          </p>

          <h1 className="mt-0.5 text-lg font-bold leading-tight text-[#2E473B] sm:text-2xl">
            {PRODUCT.name}
          </h1>

          <div className="mt-1 flex items-center gap-1.5">
            <span className="text-xs tracking-wide text-[#C7A25A] sm:text-sm" aria-label="5 out of 5 stars">
              ★★★★★
            </span>
            <span className="truncate text-[10px] text-gray-500 sm:text-xs">
              {PRODUCT.tagline}
            </span>
          </div>

          <p className="mt-1.5 text-[11px] leading-snug text-gray-600 sm:mt-2 sm:text-sm line-clamp-2">
            {PRODUCT.description}
          </p>

          <div className="mt-2 flex items-baseline gap-2 flex-wrap">
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
<div className="mt-2 rounded-lg border border-[#D8E8D9] bg-[#EEF6EF] px-3 py-1.5 sm:mt-3 sm:px-4 sm:py-2">
  <div className="flex items-center gap-2">
    <span className="text-sm sm:text-base">🚚</span>

    <div className="flex items-center gap-1.5 flex-wrap">
      <span className="text-[11px] font-bold text-[#2E473B] sm:text-sm">
        FREE DELIVERY
      </span>

      <span className="text-[10px] text-gray-600 sm:text-xs">
        All Over Pakistan
      </span>
    </div>
  </div>
</div>
    {/* Product Highlights */}
          <div className="mt-2.5 grid grid-cols-2 gap-x-4 gap-y-1 border-t border-[#E5DED2] pt-2 sm:mt-3">
            <div className="flex items-center justify-between gap-2 border-b border-[#F2EDE4] pb-0.5">
              <span className="text-[10px] text-gray-500">Size</span>
              <span className="text-[10px] font-semibold text-[#2E473B]">{PRODUCT.bottleSize}</span>
            </div>
            <div className="flex items-center justify-between gap-2 border-b border-[#F2EDE4] pb-0.5">
              <span className="text-[10px] text-gray-500">Formula</span>
              <span className="text-[10px] font-semibold text-[#2E473B]">{PRODUCT.formula}</span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] text-gray-500">Suitable For</span>
              <span className="text-[10px] font-semibold text-[#2E473B] truncate max-w-[110px]" title={PRODUCT.suitableFor}>
                {PRODUCT.suitableFor}
              </span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] text-gray-500">Stock</span>
              <span className="text-[10px] font-semibold text-green-700">{PRODUCT.stock}</span>
            </div>
          </div>
        </div>

        {/* Quantity & Actions - pinned to bottom of this column, always in view */}
        <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-2.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#2E473B]">Qty</span>
            <div className="flex items-center overflow-hidden rounded-full border border-[#D8D2C7] bg-white">
              <button type="button" onClick={decrease} aria-label="Decrease quantity" className="flex h-7 w-7 items-center justify-center text-base text-[#2E473B] hover:bg-[#F8F5EF]">
                −
              </button>
              <span className="flex h-7 min-w-7 items-center justify-center text-xs font-semibold text-[#2E473B]">
                {quantity}
              </span>
              <button type="button" onClick={increase} aria-label="Increase quantity" className="flex h-7 w-7 items-center justify-center text-base text-[#2E473B] hover:bg-[#F8F5EF]">
                +
              </button>
            </div>
          </div>

          <div className="flex flex-1 items-center gap-2 min-w-[200px]">
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 rounded-full border-2 border-[#2E473B] py-2 px-3 text-xs sm:text-sm font-semibold text-[#2E473B] transition hover:bg-[#F8F5EF] text-center whitespace-nowrap"
            >
              Add to Cart
            </button>
            <button
              type="button"
              onClick={handleBuyNow}
              className="flex-1 rounded-full bg-[#2E473B] py-2 px-3 text-xs sm:text-sm font-semibold text-white transition hover:bg-[#23392F] text-center whitespace-nowrap"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}