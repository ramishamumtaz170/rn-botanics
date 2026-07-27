"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { PRODUCT } from "@/app/constants/product";


export default function ProductDetail() {
  const router = useRouter();
  const images = PRODUCT.images;



  const [selectedImage, setSelectedImage] = useState(images[0]);
 const [quantity, setQuantity] = useState(1);
const [selectedCap, setSelectedCap] = useState<
  "Nozzle Applicator Cap" | "Flip Top Cap"
>("Nozzle Applicator Cap");
 const { addToCart } = useCart();

  const increase = () => setQuantity((prev) => prev + 1);

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
    <section className="grid lg:grid-cols-2 gap-10 items-start">

      {/* LEFT SIDE */}

      <div className="flex flex-col items-center">

        {/* Main Image */}

        <div className="relative bg-white rounded-[40px] p-10 shadow-xl w-full max-w-[520px] flex justify-center">

         
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

        <h2 className="mt-4 text-3xl font-bold leading-tight text-[#2E473B]">
  {PRODUCT.name}
</h2>

        {/* Rating */}

        <div className="mt-6 flex items-center gap-3">
          <span className="text-[#C7A25A] text-xl">
            ★★★★★
          </span>

          <span className="text-gray-500">
            {PRODUCT.tagline}          </span>
        </div>

        {/* Description */}

        <p className="mt-8 text-lg leading-8 text-gray-600">
  {PRODUCT.description}
</p>

        {/* Price */}

        <div className="mt-10">

          <p className="text-4xl text-gray-400 line-through">
           Rs. {PRODUCT.originalPrice.toLocaleString()}          </p>

          <div className="flex items-center gap-4 mt-3 flex-wrap">

            <h2 className="text-5xl font-bold text-[#2E473B]">
              Rs. {PRODUCT.salePrice.toLocaleString()}
            </h2>

            <span className="bg-[#E8F3EA] text-[#2E473B] px-4 py-2 rounded-full font-semibold">
             Save {PRODUCT.discount}%
            </span>

          </div>

        </div>


{/* Cap Selection */}

<div className="mt-6">

  <p className="font-semibold text-[#2E473B] mb-4">
    Choose Your Bottle Cap
  </p>

  <div className="flex flex-col sm:flex-row gap-4">

    <button
      type="button"
      onClick={() => setSelectedCap("Nozzle Applicator Cap")}
      className={`flex-1 py-2 px-4 rounded-2xl border-2 font-semibold transition ${
        selectedCap === "Nozzle Applicator Cap"
          ? "border-[#2E473B] bg-[#F8F5EF] text-[#2E473B]"
          : "border-[#E8E3DA] text-gray-600"
      }`}
    >
      Nozzle Applicator Cap
    </button>

    <button
      type="button"
      onClick={() => setSelectedCap("Flip Top Cap")}
      className={`flex-1 py-2 px-4 rounded-2xl border-2 font-semibold transition ${
        selectedCap === "Flip Top Cap"
          ? "border-[#2E473B] bg-[#F8F5EF] text-[#2E473B]"
          : "border-[#E8E3DA] text-gray-600"
      }`}
    >
      Flip Top Cap
    </button>

  </div>

  {/* Current Selection */}
  <p className="mt-4 text-sm text-gray-500">
    Selected:{" "}
    <span className="font-semibold text-[#2E473B]">
      {selectedCap}
    </span>
  </p>

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

        <div className="mt-6 flex flex-col sm:flex-row gap-5">

          <button
  onClick={handleAddToCart}
  className="flex-1 border-2 border-[#2E473B]
             text-[#2E473B]
             py-4 px-8
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
             py-4 px-8
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
            <span className="font-semibold text-[#2E473B]">
  {PRODUCT.bottleSize}
</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Formula</span>
            <span className="font-semibold text-[#2E473B]">
              {PRODUCT.formula}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Suitable For</span>
            <span className="font-semibold text-[#2E473B]">
              {PRODUCT.suitableFor}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Availability</span>
            <span className="font-semibold text-green-700">
              {PRODUCT.stock}
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}