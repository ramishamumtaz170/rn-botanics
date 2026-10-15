"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { PRODUCTS } from "@/app/constants/product";
import CartDrawer from "../components/shop/CartDrawer";

export default function ShopContent() {
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const handleOpenCart = () => setCartOpen(true);

    window.addEventListener("open-cart", handleOpenCart);

    return () => {
      window.removeEventListener("open-cart", handleOpenCart);
    };
  }, []);

  return (
    <>
      <main className="min-h-screen bg-[#F8F5EF]">
        {/* Collection Header */}
        <section className="px-4 pb-6 pt-10 text-center md:pt-8">
          <h1 className="text-2xl font-semibold text-[#2E473B] sm:text-3xl">
            Our Collection
          </h1>
        </section>

        {/* Product Collection */}
        <section className="mx-auto max-w-7xl px-3 pb-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            {PRODUCTS.map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.slug}`}
                className="group min-w-0 overflow-hidden rounded-xl border border-[#E5E0D7] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-2xl"
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-[#F4F1EA]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-105 sm:p-5"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />

                  {/* Discount Badge */}
                  {product.discount > 0 && (
                    <span className="absolute left-2 top-2 rounded-full bg-[#2E473B] px-2 py-1 text-[9px] font-semibold text-white sm:left-3 sm:top-3 sm:px-2.5 sm:text-[11px]">
                      {product.discount}% OFF
                    </span>
                  )}
                </div>

                {/* Product Information */}
                <div className="p-3 sm:p-4">
                  <p className="text-[9px] uppercase tracking-[0.12em] text-[#7C9A7D] sm:text-[10px] sm:tracking-[0.16em]">
                    {product.type === "bundle"
                      ? "Bundle"
                      : product.type === "shampoo"
                        ? "Hair Care"
                        : product.type === "comb"
                          ? "Hair Care Essential"
                          : "Signature Collection"}
                  </p>

                  <h2 className="mt-1.5 line-clamp-2 text-sm font-semibold leading-5 text-[#2E473B] sm:text-base">
                    {product.name}
                  </h2>

                  <p className="mt-1.5 line-clamp-2 text-xs leading-4 text-gray-500 sm:text-sm sm:leading-5">
                    {product.shortDescription}
                  </p>

                  {/* Price */}
                  <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="text-sm font-semibold text-[#2E473B] sm:text-base">
                      Rs. {product.salePrice.toLocaleString()}
                    </span>

                    {product.discount > 0 && (
                      <span className="text-[10px] text-gray-400 line-through sm:text-xs">
                        Rs. {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  {/* View Product */}
                  <div className="mt-3 flex items-center justify-between border-t border-[#EEEAE2] pt-3">
                    <span className="text-xs font-medium text-[#2E473B] sm:text-sm">
                      View Product
                    </span>

                    <span className="text-base text-[#7C9A7D] transition-transform duration-300 group-hover:translate-x-1">
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