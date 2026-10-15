"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { PRODUCTS } from "@/app/constants/product";
import CartDrawer from "../components/shop/CartDrawer";

export default function ShopContent() {
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const handleOpenCart = () => {
      setCartOpen(true);
    };

    window.addEventListener("open-cart", handleOpenCart);

    return () => {
      window.removeEventListener("open-cart", handleOpenCart);
    };
  }, []);

  return (
    <>
      <main className="min-h-screen bg-[#F8F5EF]">

        {/* Collection Header */}
        <section className="px-4 pb-4 pt-12 text-center md:pt-4">
          {/* <p className="text-sm uppercase tracking-[0.3em] text-[#7C9A7D]">
            R & N Botanics
          </p> */}

          <h3 className="mt-3 text-2xl font-semibold text-[#2E473B] md:text-3xl">
            Our Collection
          </h3>

         {/* <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-600 md:text-base">
  Discover thoughtfully crafted botanical essentials, inspired by
  nature and created to bring a little everyday luxury to your routine.
</p> */}

        </section>

        {/* Product Collection */}
        <section className="mx-auto max-w-4xl px-4 pb-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.slug}`}
                className="group overflow-hidden rounded-2xl border border-[#E5E0D7] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-[#F4F1EA]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Discount Badge */}
                  {product.discount > 0 && (
                    <span className="absolute left-4 top-4 rounded-full bg-[#2E473B] px-3 py-1.5 text-xs font-semibold text-white">
                      {product.discount}% OFF
                    </span>
                  )}
                </div>

                {/* Product Information */}
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#7C9A7D]">
                    {product.type === "bundle"
                      ? "Bundle"
                      : product.type === "shampoo"
                      ? "Hair Care"
                      : product.type === "comb"
                      ? "Hair Care Essential"
                      : "Signature Collection"}
                  </p>

                  <h2 className="mt-2 text-lg font-semibold leading-6 text-[#2E473B]">
                    {product.name}
                  </h2>

                  <p className="mt-2 text-sm leading-5 text-gray-500">
                    {product.shortDescription}
                  </p>

                  {/* Price */}
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-lg font-semibold text-[#2E473B]">
                      Rs. {product.salePrice.toLocaleString()}
                    </span>

                    {product.discount > 0 && (
                      <span className="text-sm text-gray-400 line-through">
                        Rs. {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  {/* View Product */}
                  <div className="mt-5 flex items-center justify-between border-t border-[#EEEAE2] pt-4">
                    <span className="text-sm font-medium text-[#2E473B]">
                      View Product
                    </span>

                    <span className="text-lg text-[#7C9A7D] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Cart Drawer */}
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </>
  );
}