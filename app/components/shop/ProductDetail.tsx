
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
    <section className="grid items-start gap-4 lg:grid-cols-2 lg:gap-10">

      {/* LEFT — PRODUCT IMAGES */}

      <div className="flex flex-col items-center">

        {/* Main Image */}

        <div className="relative flex w-full max-w-[480px] justify-center rounded-[24px] bg-white p-2.5 shadow-md sm:rounded-[32px] sm:p-6">

          <Image
            src={selectedImage}
            alt={PRODUCT.name}
            width={400}
            height={400}
            className="h-[180px] w-auto object-contain sm:h-auto"
            priority
          />

        </div>

        {/* Thumbnails */}

        <div className="mt-2 flex flex-wrap justify-center gap-1.5 sm:mt-3 sm:gap-2.5">

          {images.map((image, index) => (

            <button
              key={index}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`rounded-lg border p-0.5 transition-all duration-300 sm:rounded-xl sm:border-2 sm:p-1 ${
                selectedImage === image
                  ? "border-[#2E473B]"
                  : "border-[#E8E3DA] hover:border-[#7C9A7D]"
              }`}
            >

              <Image
                src={image}
                alt={`Product image ${index + 1}`}
                width={65}
                height={48}
                className="h-[38px] w-[50px] object-contain sm:h-[48px] sm:w-[65px]"
              />

            </button>

          ))}

        </div>

      </div>


      {/* RIGHT — PRODUCT INFORMATION */}

      <div className="pt-0">

        {/* Collection */}

        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#7C9A7D] sm:text-xs sm:tracking-[0.25em]">
          Signature Collection
        </p>


        {/* Product Name */}

        <h1 className="mt-0.5 text-2xl font-bold leading-tight text-[#2E473B] sm:mt-1.5 sm:text-4xl">
          {PRODUCT.name}
        </h1>


        {/* Rating */}

        <div className="mt-1 flex items-center gap-1.5 sm:mt-2 sm:gap-2">

          <span className="text-sm tracking-wide text-[#C7A25A] sm:text-lg">
            ★★★★★
          </span>

          <span className="truncate text-[11px] text-gray-500 sm:text-sm">
            {PRODUCT.tagline}
          </span>

        </div>


        {/* Description */}

        <p className="mt-2 line-clamp-2 max-w-2xl text-xs leading-5 text-gray-600 sm:mt-4 sm:line-clamp-none sm:text-base sm:leading-7">
          {PRODUCT.description}
        </p>


        {/* Price */}

        <div className="mt-2 sm:mt-5">

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


        {/* CAP SELECTION */}

        <div className="mt-2 sm:mt-5">

          <p className="mb-1 text-xs font-semibold text-[#2E473B] sm:mb-2.5 sm:text-sm">
            Choose Your Bottle Cap
          </p>

          <div className="grid grid-cols-2 gap-1.5 sm:block sm:space-y-1.5">

            {/* Flip Top Cap */}

            <label
              className={`flex cursor-pointer items-center gap-1.5 rounded-lg border px-2 py-1.5 transition-all duration-300 sm:gap-3 sm:rounded-xl sm:px-4 sm:py-2.5 ${
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
                className="h-3 w-3 accent-[#2E473B]"
              />

              <span className="text-[10px] font-medium text-[#2E473B] sm:text-sm">
                Flip Top Cap
              </span>

            </label>


            {/* Nozzle Applicator Cap */}

            <label
              className={`flex cursor-pointer items-center gap-1.5 rounded-lg border px-2 py-1.5 transition-all duration-300 sm:gap-3 sm:rounded-xl sm:px-4 sm:py-2.5 ${
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
                className="h-3 w-3 accent-[#2E473B]"
              />

              <span className="text-[10px] font-medium text-[#2E473B] sm:text-sm">
                Nozzle Applicator Cap
              </span>

            </label>

          </div>

        </div>


        {/* QUANTITY */}

        <div className="mt-2 flex items-center gap-3 sm:mt-5">

          <p className="text-xs font-semibold text-[#2E473B] sm:text-sm">
            Quantity
          </p>

          <div className="flex w-fit items-center overflow-hidden rounded-full border border-[#D8D2C7] bg-white">

            <button
              type="button"
              onClick={decrease}
              className="px-3 py-1 text-lg text-[#2E473B] transition hover:bg-[#F8F5EF] sm:px-5 sm:py-2 sm:text-xl"
            >
              −
            </button>

            <span className="min-w-[35px] text-center text-sm font-semibold text-[#2E473B] sm:min-w-[50px] sm:text-base">
              {quantity}
            </span>

            <button
              type="button"
              onClick={increase}
              className="px-3 py-1 text-lg text-[#2E473B] transition hover:bg-[#F8F5EF] sm:px-5 sm:py-2 sm:text-xl"
            >
              +
            </button>

          </div>

        </div>


        {/* ACTION BUTTONS */}

        <div className="mt-2.5 flex gap-2 sm:mt-5 sm:flex-row sm:gap-2.5">

          <button
            type="button"
            onClick={handleAddToCart}
            className="flex-1 rounded-full border-2 border-[#2E473B] px-3 py-2 text-xs font-semibold text-[#2E473B] transition-all duration-300 hover:bg-[#F8F5EF] sm:px-6 sm:py-3 sm:text-base"
          >
            Add to Cart
          </button>

          <button
            type="button"
            onClick={handleBuyNow}
            className="flex-1 rounded-full bg-[#2E473B] px-3 py-2 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#23392F] sm:px-6 sm:py-3 sm:text-base"
          >
            Buy Now
          </button>

        </div>


        {/* PRODUCT HIGHLIGHTS */}

        <div className="mt-3 border-t border-[#E5DED2] pt-3 sm:mt-6 sm:pt-5">

          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 sm:block sm:space-y-2.5">

            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] text-gray-500 sm:text-sm">
                Bottle Size
              </span>

              <span className="text-[10px] font-semibold text-[#2E473B] sm:text-sm">
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

    </section>
  );
}

