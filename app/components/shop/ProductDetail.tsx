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

  // Flip Top Cap is selected by default
  const [selectedCap, setSelectedCap] =
    useState<CapOption>("Flip Top Cap");

  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: PRODUCT.id,
      name: PRODUCT.name,
      price: PRODUCT.salePrice,
      image: PRODUCT.image,
      quantity,
      cap: selectedCap,
    });

    toast.success(`${PRODUCT.name} added to your cart.`, {
      duration: 2500,
    });
  };

  const handleBuyNow = () => {
    addToCart({
      id: PRODUCT.id,
      name: PRODUCT.name,
      price: PRODUCT.salePrice,
      image: PRODUCT.image,
      quantity,
      cap: selectedCap,
    });

    router.push("/checkout");
  };

  return (
    <section className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
      {/* LEFT SIDE — PRODUCT IMAGES */}

      <div className="flex flex-col items-center">
        {/* Main Product Image */}

        <div className="relative flex w-full max-w-[520px] justify-center rounded-[36px] bg-white p-6 shadow-lg sm:p-8">
          <Image
            src={selectedImage}
            alt={PRODUCT.name}
            width={430}
            height={430}
            className="object-contain"
            priority
          />
        </div>

        {/* Thumbnails */}

        <div className="mt-3 flex flex-wrap justify-center gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`rounded-xl border-2 p-1.5 transition-all duration-300 ${
                selectedImage === image
                  ? "border-[#2E473B] shadow-sm"
                  : "border-[#E8E3DA] hover:border-[#7C9A7D]"
              }`}
            >
              <Image
                src={image}
                alt={`Product image ${index + 1}`}
                width={70}
                height={50}
                className="object-contain"
              />
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE — PRODUCT INFORMATION */}

      <div className="pt-1">
        {/* Collection */}

        <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#7C9A7D]">
          Signature Collection
        </p>

        {/* Product Name */}

        <h1 className="mt-2 text-3xl font-bold leading-tight text-[#2E473B] sm:text-4xl">
          {PRODUCT.name}
        </h1>

        {/* Rating */}

        <div className="mt-3 flex flex-wrap items-center gap-1">
          <span className="text-lg tracking-wide text-[#C7A25A]">
            ★★★★★
          </span>

          <span className="text-sm text-gray-500">
            {PRODUCT.tagline}
          </span>
        </div>

        {/* Description */}

        <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">
          {PRODUCT.description}
        </p>

        {/* Price */}

        <div className="mt-6">
          <p className="text-lg text-gray-400 line-through">
            Rs. {PRODUCT.originalPrice.toLocaleString()}
          </p>

          <div className="mt-1.5 flex flex-wrap items-center gap-3">
            <h2 className="text-4xl font-bold text-[#2E473B] sm:text-5xl">
              Rs. {PRODUCT.salePrice.toLocaleString()}
            </h2>

            <span className="rounded-full bg-[#E8F3EA] px-3.5 py-1.5 text-sm font-semibold text-[#2E473B]">
              Save {PRODUCT.discount}%
            </span>
          </div>
        </div>

        {/* CAP SELECTION */}

        <div className="mt-5">
          <p className="mb-3 text-sm font-semibold text-[#2E473B]">
            Choose Your Bottle Cap
          </p>

          <div className="space-y-2">
            {/* Flip Top Cap */}

            <label
              className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition-all duration-300 ${
                selectedCap === "Flip Top Cap"
                  ? "border-[#2E473B] bg-[#F8F5EF]"
                  : "border-[#E8E3DA] bg-white hover:border-[#7C9A7D]"
              }`}
            >
              <input
                type="radio"
                name="cap"
                value="Flip Top Cap"
                checked={selectedCap === "Flip Top Cap"}
                onChange={() => setSelectedCap("Flip Top Cap")}
                className="h-2 w-2 accent-[#2E473B]"
              />

              <span
                className={`text-sm font-medium ${
                  selectedCap === "Flip Top Cap"
                    ? "text-[#2E473B]"
                    : "text-gray-600"
                }`}
              >
                Flip Top Cap
              </span>
            </label>

            {/* Nozzle Applicator Cap */}

            <label
              className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition-all duration-300 ${
                selectedCap === "Nozzle Applicator Cap"
                  ? "border-[#2E473B] bg-[#F8F5EF]"
                  : "border-[#E8E3DA] bg-white hover:border-[#7C9A7D]"
              }`}
            >
              <input
                type="radio"
                name="cap"
                value="Nozzle Applicator Cap"
                checked={selectedCap === "Nozzle Applicator Cap"}
                onChange={() =>
                  setSelectedCap("Nozzle Applicator Cap")
                }
                className="h-2 w-2 accent-[#2E473B]"
              />

              <span
                className={`text-sm font-medium ${
                  selectedCap === "Nozzle Applicator Cap"
                    ? "text-[#2E473B]"
                    : "text-gray-600"
                }`}
              >
                Nozzle Applicator Cap
              </span>
            </label>
          </div>
        </div>

        {/* QUANTITY */}

        <div className="mt-6">
          <p className="mb-3 text-sm font-semibold text-[#2E473B]">
            Quantity
          </p>

          <div className="flex w-fit items-center overflow-hidden rounded-full border border-[#D8D2C7] bg-white">
            <button
              type="button"
              onClick={decrease}
              className="px-5 py-2.5 text-xl text-[#2E473B] transition hover:bg-[#F8F5EF]"
            >
              −
            </button>

            <span className="min-w-[55px] text-center text-base font-semibold text-[#2E473B]">
              {quantity}
            </span>

            <button
              type="button"
              onClick={increase}
              className="px-5 py-2.5 text-xl text-[#2E473B] transition hover:bg-[#F8F5EF]"
            >
              +
            </button>
          </div>
        </div>

        {/* ACTION BUTTONS */}

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleAddToCart}
            className="flex-1 rounded-full border-2 border-[#2E473B] px-7 py-3.5 text-base font-semibold text-[#2E473B] transition-all duration-300 hover:bg-[#F8F5EF]"
          >
            Add to Cart
          </button>

          <button
            type="button"
            onClick={handleBuyNow}
            className="flex-1 rounded-full bg-[#2E473B] px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-[#23392F]"
          >
            Buy Now
          </button>
        </div>

        {/* PRODUCT HIGHLIGHTS */}

        <div className="mt-8 border-t border-[#E5DED2] pt-6">
          <div className="space-y-3.5">
            <div className="flex items-center justify-between gap-6">
              <span className="text-sm text-gray-500">
                Bottle Size
              </span>

              <span className="text-sm font-semibold text-[#2E473B]">
                {PRODUCT.bottleSize}
              </span>
            </div>

            <div className="flex items-center justify-between gap-6">
              <span className="text-sm text-gray-500">
                Formula
              </span>

              <span className="text-right text-sm font-semibold text-[#2E473B]">
                {PRODUCT.formula}
              </span>
            </div>

            <div className="flex items-center justify-between gap-6">
              <span className="text-sm text-gray-500">
                Suitable For
              </span>

              <span className="text-right text-sm font-semibold text-[#2E473B]">
                {PRODUCT.suitableFor}
              </span>
            </div>

            <div className="flex items-center justify-between gap-6">
              <span className="text-sm text-gray-500">
                Availability
              </span>

              <span className="text-sm font-semibold text-green-700">
                {PRODUCT.stock}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}