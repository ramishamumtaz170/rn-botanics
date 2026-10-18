import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/app/constants/product";
import { PRODUCTS } from "@/app/constants/product";

type RelatedProductsProps = {
  currentProduct: Product;
};

export default function RelatedProducts({
  currentProduct,
}: RelatedProductsProps) {
  const relatedProducts = PRODUCTS.filter(
    (product) => product.id !== currentProduct.id
  ).slice(0, 4);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-[#F8F5EF]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-0">
        <div className="mb-8 text-center sm:mb-10">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#7C9A7D]">
            Discover More
          </p>

          <h2 className="font-serif text-3xl text-[#2E473B] sm:text-4xl">
            You May Also Like
          </h2>

          {/* <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#2E473B]/65 sm:text-base">
            Explore more from R & N Botanics and find
            your everyday hair-care essentials.
          </p> */}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {relatedProducts.map((product) => (
            <article key={product.id} className="group min-w-0">
              <Link
                href={`/shop/${product.slug}`}
                className="block"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-white/60">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 639px) 45vw, (max-width: 1023px) 30vw, 25vw"
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-105 sm:p-5"
                  />

                  {product.discount > 0 && (
                    <span className="absolute left-2 top-2 rounded-full bg-[#2E473B] px-2.5 py-1 text-[10px] font-medium text-white sm:left-3 sm:top-3 sm:text-xs">
                      {product.discount}% OFF
                    </span>
                  )}
                </div>

                <div className="pt-4">
                  <h3 className="text-sm font-medium text-[#2E473B] transition-colors group-hover:text-[#7C9A7D] sm:text-base">
                    {product.name}
                  </h3>

                  {product.size && (
                    <p className="mt-1 text-xs text-[#2E473B]/55">
                      {product.size}
                    </p>
                  )}

                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="text-sm font-semibold text-[#2E473B] sm:text-base">
                      Rs. {product.salePrice.toLocaleString("en-PK")}
                    </span>

                    {product.originalPrice > product.salePrice && (
                      <span className="text-xs text-[#2E473B]/45 line-through">
                        Rs. {product.originalPrice.toLocaleString("en-PK")}
                      </span>
                    )}
                  </div>
                </div>
              </Link>

              <Link
                href={`/shop/${product.slug}`}
                className="mt-4 inline-flex min-h-10 w-full items-center justify-center rounded-full border border-[#2E473B]/20 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.12em] text-[#2E473B] transition hover:bg-[#2E473B] hover:text-white sm:text-xs"
              >
                View Product
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#2E473B] transition hover:text-[#7C9A7D]"
          >
            Explore All Products <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}