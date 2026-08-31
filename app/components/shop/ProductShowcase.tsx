"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";
import { PRODUCT } from "@/app/constants/product";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export default function ProductShowcase() {
  const router = useRouter();
  const { addToCart } = useCart();

  const images = PRODUCT.images;

  const [selectedImage, setSelectedImage] = useState(images[0]);

  // 1 = Single Bottle
  // 2 = Duo Bundle
  const [selectedBundle, setSelectedBundle] = useState<1 | 2>(1);

  // --------------------------------
  // PRICING
  // --------------------------------

  const singlePrice = PRODUCT.salePrice;

  // Duo Bundle = Rs. 2,800
  const duoPrice = 2800;

  // Duo Bundle saves Rs. 400
  const duoBundleDiscount = 400;

  const selectedPrice =
    selectedBundle === 2
      ? duoPrice
      : singlePrice;

  // Duo Bundle is ONE cart item containing 2 bottles.
  const selectedQuantity = 1;

  // IMPORTANT:
  // CartContext expects id to be a NUMBER.
  // Use a separate numeric ID for the Duo Bundle.
  const selectedCartId =
    selectedBundle === 2
      ? PRODUCT.id + 1000
      : PRODUCT.id;

  const selectedProductName =
    selectedBundle === 2
      ? `${PRODUCT.name} - Duo Bundle (2 Bottles)`
      : PRODUCT.name;

  // --------------------------------
  // META PIXEL - VIEW CONTENT
  // --------------------------------

  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "ViewContent", {
        content_ids: [PRODUCT.id],
        content_name: PRODUCT.name,
        content_type: "product",
        value: PRODUCT.salePrice,
        currency: "PKR",
      });
    }
  }, []);

  // --------------------------------
  // BUY NOW
  // --------------------------------

  const handleBuyNow = () => {
    addToCart({
      id: selectedCartId,
      name: selectedProductName,
      price: selectedPrice,
      image: PRODUCT.image,
      quantity: selectedQuantity,
    });

    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "AddToCart", {
        content_ids: [selectedCartId],
        content_name: selectedProductName,
        content_type: "product",
        value: selectedPrice,
        currency: "PKR",
      });
    }

    router.push("/checkout");
  };

  // --------------------------------
  // ADD TO CART
  // --------------------------------

  const handleAddToCart = () => {
    addToCart({
      id: selectedCartId,
      name: selectedProductName,
      price: selectedPrice,
      image: PRODUCT.image,
      quantity: selectedQuantity,
    });

    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "AddToCart", {
        content_ids: [selectedCartId],
        content_name: selectedProductName,
        content_type: "product",
        value: selectedPrice,
        currency: "PKR",
      });
    }

    // Open CartDrawer
    window.dispatchEvent(new Event("open-cart"));
  };

  return (
    <section>
      <div className="grid lg:grid-cols-2 gap-4 items-center p-6 md:p-6">

        {/* =========================================
            LEFT SIDE - PRODUCT IMAGE
        ========================================= */}

        <div className="flex flex-col items-center">

          <div className="flex justify-center items-center">
            <Image
              src={selectedImage}
              alt={PRODUCT.name}
              width={280}
              height={280}
              className="object-contain drop-shadow-2xl transition duration-500"
            />
          </div>

          {/* IMAGE THUMBNAILS */}

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

        {/* =========================================
            RIGHT SIDE - PRODUCT INFORMATION
        ========================================= */}

        <div>

          {/* COLLECTION */}

          {/* <p className="uppercase tracking-[0.3em] text-sm text-[#7C9A7D] font-medium">
            Signature Collection
          </p> */}

          {/* TITLE */}

          <h2 className="mt-0 text-2xl font-bold leading-tight text-[#2E473B]">
            {PRODUCT.name}
          </h2>

          {/* DESCRIPTION */}

         <div className="mt-2 space-y-1">
  <p className="flex items-center gap-2 text-base sm:text-lg font-medium text-gray-700">
    🌿 <span>Helps reduce hair fall</span>
  </p>

  <p className="flex items-center gap-2 text-base sm:text-lg font-medium text-gray-700">
    🤍 <span>Promotes healthier-looking hair</span>
  </p>

  <p className="flex items-center gap-2 text-base sm:text-lg font-medium text-gray-700">
    ✨ <span>Leaves hair soft & shiny just after 1st wash</span>
  </p>
</div>
          {/* RATING */}

          <div className="mt-2 flex items-center gap-3">
            <span className="text-[#C7A25A] text-xl">
              ★★★★★
            </span>

            <span className="text-gray-500">
  Loved by 100+ Customers
</span>
          </div>

          {/* =========================================
              BUNDLE OPTIONS
          ========================================= */}

          <div className="mt-2">

            <p className="text-sm font-semibold text-[#2E473B] mb-2">
              Choose your bundle:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

              {/* =====================================
                  1 BOTTLE
              ===================================== */}

              <button
                type="button"
                onClick={() => setSelectedBundle(1)}
                className={`relative rounded-2xl border-2 p-4 text-left transition-all duration-300 ${
                  selectedBundle === 1
                    ? "border-[#2E473B] bg-[#F8F5EF]"
                    : "border-[#E8E3DA] hover:border-[#7C9A7D]"
                }`}
              >

                {selectedBundle === 1 && (
                  <span className="absolute top-2 right-3 text-[#2E473B]">
                    ✓
                  </span>
                )}

                <p className="font-semibold text-[#2E473B]">
                  1 Bottle
                </p>

                <div className="mt-1 flex flex-wrap items-center gap-2">

                  <span className="text-sm text-gray-400 line-through">
                    Rs. {PRODUCT.originalPrice.toLocaleString()}
                  </span>

                  <span className="text-xl font-bold text-[#2E473B]">
                    Rs. {singlePrice.toLocaleString()}
                  </span>

                </div>

                <span className="mt-1 inline-block text-xs font-bold text-[#7C9A7D]">
                  {PRODUCT.discount}% OFF
                </span>

              </button>

              {/* =====================================
                  2 BOTTLES - DUO
              ===================================== */}

              <button
                type="button"
                onClick={() => setSelectedBundle(2)}
                className={`relative rounded-2xl border-2 p-4 text-left transition-all duration-300 ${
                  selectedBundle === 2
                    ? "border-[#2E473B] bg-[#F8F5EF]"
                    : "border-[#E8E3DA] hover:border-[#7C9A7D]"
                }`}
              >

                {/* BEST VALUE */}

                <span className="absolute -top-3 left-4 rounded-full bg-[#C7A25A] px-3 py-1 text-xs font-bold text-white">
                  BEST VALUE
                </span>

                {selectedBundle === 2 && (
                  <span className="absolute top-2 right-3 text-[#2E473B]">
                    ✓
                  </span>
                )}

                <p className="font-semibold text-[#2E473B]">
                  2 Bottles
                </p>

                <div className="mt-1 flex flex-wrap items-center gap-2">

                  <span className="text-sm text-gray-400 line-through">
                    Rs. 3,200
                  </span>

                  <span className="text-xl font-bold text-[#2E473B]">
                    Rs. {duoPrice.toLocaleString()}
                  </span>

                </div>

                <span className="mt-1 inline-block text-xs font-bold text-[#7C9A7D]">
                  Save Rs. {duoBundleDiscount.toLocaleString()}
                </span>

              </button>

            </div>
          </div>

          {/* =========================================
              SELECTED PRICE
          ========================================= */}

          {/* <div className="mt-5">

            <p className="text-3xl font-bold text-[#2E473B]">
              Rs. {selectedPrice.toLocaleString()}
            </p>

            {selectedBundle === 1 && (
              <p className="mt-1 text-sm text-[#7C9A7D] font-medium">
                100 ml • {PRODUCT.discount}% OFF
              </p>
            )}

            {selectedBundle === 2 && (
              <p className="mt-1 text-sm text-[#7C9A7D] font-medium">
                2 × 100 ml bottles • Save Rs.{" "}
                {duoBundleDiscount.toLocaleString()}
              </p>
            )}

          </div> */}

          {/* =========================================
              FREE DELIVERY
          ========================================= */}

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

          {/* =========================================
              BUTTONS
          ========================================= */}

          <div className="mt-4 flex flex-col sm:flex-row gap-5">

            {/* ADD TO CART */}

            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 border-2 border-[#2E473B] text-[#2E473B] py-2 px-2 rounded-full text-lg font-semibold hover:bg-[#F8F5EF] transition-all duration-300"
            >
              Add to Cart
            </button>

            {/* BUY NOW */}

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