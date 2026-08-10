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

  // Default cap
  const [selectedCap, setSelectedCap] = useState<
  "Nozzle Applicator Cap" | "Flip Top Cap"
>("Flip Top Cap");

const images = PRODUCT.images;

const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleBuyNow = () => {
    addToCart({
      id: PRODUCT.id,
      name: PRODUCT.name,
      price: PRODUCT.salePrice,
      image: PRODUCT.image,
      quantity: 1,
      cap: selectedCap,
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
      cap: selectedCap,
    });

    toast.success(`${PRODUCT.name} added to your cart.`);
  };

  return (    <section className="w-full bg-white rounded-[40px] shadow-lg overflow-hidden">

      <div className="grid lg:grid-cols-2 gap-8 items-center p-10 md:p-16">

       {/* LEFT SIDE */}

<div className="flex flex-col items-center">

  <div className="relative">

    
    {/* Product Image */}

   <Image
  src={selectedImage}
  alt={PRODUCT.name}
  width={360}
  height={360}
  className="relative z-10 w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] object-contain drop-shadow-2xl transition duration-500"
/>
<div className="mt-2 flex w-full justify-center gap-3 z-20 relative">  {images.map((image, index) => (
    <button
      key={index}
      onClick={() => setSelectedImage(image)}
      className={`rounded-2xl border-2 p-1 transition ${
        selectedImage === image
          ? "border-[#2E473B]"
          : "border-[#E8E3DA] hover:border-[#7C9A7D]"
      }`}
    >
      <Image
        src={image}
        alt={`Thumbnail ${index + 1}`}
        width={80}
        height={80}
        className="rounded-xl object-cover"
      />
    </button>
  ))}
</div>
  </div>

</div>
        {/* RIGHT SIDE */}

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

<div className="flex items-center gap-2 mt-3 flex-wrap">
  <h3 className="text-3xl font-bold text-[#2E473B]">
    Rs. {PRODUCT.salePrice.toLocaleString()}
  </h3>

  <span className="bg-[#E8F3EA] text-[#2E473B] px-4 py-2 rounded-full text-sm font-semibold">
    Save {PRODUCT.discount}%
  </span>
</div>
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
          {/* Features */}

          <div className="mt-6 space-y-2">

            <div className="flex items-center gap-3">
              <span className="text-[#7C9A7D] text-xl">✓</span>
              <p className="text-gray-700">
  {PRODUCT.formula} Ingredients
</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[#7C9A7D] text-xl">✓</span>
              <p className="text-gray-700">
                No Parabens • No Sulfates
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[#7C9A7D] text-xl">✓</span>
              <p className="text-gray-700">
                Cruelty Free Formula
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[#7C9A7D] text-xl">✓</span>
              <p className="text-gray-700">
                Small Batch Crafted
              </p>
            </div>

          </div>


{/* Cap Selection */}

<div className="mt-2">

  <p className="font-semibold text-[#2E473B] mb-2">
    Choose Your Bottle Cap
  </p>

  <div className="space-y-2">

    {/* Flip Top Cap — Default */}

    <label
      className={`flex items-center gap-4 p-3 rounded-2xl border-2 cursor-pointer transition-all ${
        selectedCap === "Flip Top Cap"
          ? "border-[#2E473B] bg-[#F8F5EF]"
          : "border-[#E8E3DA] bg-white"
      }`}
    >
      <input
  type="radio"
  checked={selectedCap === "Flip Top Cap"}
  onChange={() => setSelectedCap("Flip Top Cap")}
  style={{
    accentColor: "#2E473B",
    width: 22,
    height: 22,
  }}
/>
      <div>
        <p className="font-semibold text-[#2E473B]">
          Flip Top Cap
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Easy and convenient for everyday use
        </p>
      </div>
    </label>

    {/* Nozzle Applicator Cap */}

    <label
      className={`flex items-center gap-4 p-3 rounded-2xl border-2 cursor-pointer transition-all ${
        selectedCap === "Nozzle Applicator Cap"
          ? "border-[#2E473B] bg-[#F8F5EF]"
          : "border-[#E8E3DA] bg-white"
      }`}
    >
<input
  type="radio"
  checked={selectedCap === "Nozzle Applicator Cap"}
  onChange={() => setSelectedCap("Nozzle Applicator Cap")}
  style={{
    accentColor: "#2E473B",
    width: 22,
    height: 22,
  }}
/>

   
  <div>
        <p className="font-semibold text-[#2E473B]">
          Nozzle Applicator Cap
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Precise application directly to the scalp
        </p>
      </div>
    </label>

  </div>

</div>

          {/* Buttons */}

          <div className="mt-8 flex flex-col sm:flex-row gap-5">

            {/* Add to Cart */}

            <button
  onClick={handleAddToCart}
  className="flex-1 border-2 border-[#2E473B]
             text-[#2E473B]
             py-2 px-2
             rounded-full
             text-lg font-semibold
             hover:bg-[#F8F5EF]
             transition-all duration-300"
>
  Add to Cart
</button>
            {/* Buy Now */}
<button
  type="button"
  onClick={handleBuyNow}
  className="flex-1 flex items-center justify-center
             bg-[#2E473B]
             text-white
             py-2 px-2
             rounded-full
             text-lg font-semibold
             hover:bg-[#23392F]
             transition-all duration-300"
>
  Buy Now
</button>
          </div>

         
        </div>

      </div>

    </section>
  );
}