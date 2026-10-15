import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/app/constants/product";

export default function FeaturedProducts() {
   const featuredProducts = PRODUCTS;
  return (
    <section className="w-full bg-[#F8F5EF] px-3 py-10 text-center sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        {/* Heading */}
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7C9A7D] sm:text-sm sm:tracking-[0.25em]">
          Discover R & N Botanics
        </p>

        <h2 className="mt-2 text-2xl font-bold text-[#2E473B] sm:mt-3 sm:text-3xl lg:text-4xl">
          Our Botanical Essentials
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-gray-600 sm:mt-4 sm:text-base">
          Thoughtfully crafted essentials inspired by nature,
          bringing everyday luxury to your routine.
        </p>

        {/* Featured Products */}
        <div className="mt-7 grid grid-cols-2 gap-3 text-left sm:mt-10 sm:grid-cols-3 sm:gap-5 lg:gap-6">
          {featuredProducts.map((product) => (
            <article
              key={product.id}
              className="group min-w-0 overflow-hidden rounded-xl border border-[#E5E0D7] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-2xl"
            >
              {/* Image */}
              <Link
                href={`/shop/${product.slug}`}
                className="relative block aspect-square overflow-hidden bg-[#F4F1EA]"
              >
                {product.discount > 0 && (
                  <span className="absolute left-2 top-2 z-10 rounded-full bg-[#2E473B] px-2 py-1 text-[9px] font-semibold text-white sm:left-3 sm:top-3 sm:text-[11px]">
                    {product.discount}% OFF
                  </span>
                )}

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-105 sm:p-5"
                />
              </Link>

              {/* Details */}
              <div className="p-3 sm:p-4">
                <p className="line-clamp-1 text-[9px] uppercase tracking-wider text-[#7C9A7D] sm:text-[10px]">
                  {product.tagline}
                </p>

                <h3 className="mt-1.5 line-clamp-2 text-sm font-semibold leading-5 text-[#2E473B] sm:mt-2 sm:text-base">
                  {product.name}
                </h3>

                <p className="mt-1.5 line-clamp-2 text-xs leading-4 text-gray-500 sm:mt-2 sm:text-sm sm:leading-5">
                  {product.shortDescription}
                </p>

                {product.size && (
                  <p className="mt-2 text-[10px] text-gray-500 sm:mt-3 sm:text-xs">
                    {product.size}
                  </p>
                )}

                {/* Price */}
                <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="text-sm font-bold text-[#2E473B] sm:text-base">
                    Rs. {product.salePrice.toLocaleString()}
                  </span>

                  {product.discount > 0 && (
                    <span className="text-[10px] text-gray-400 line-through sm:text-xs">
                      Rs. {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* View Product */}
                <Link
                  href={`/shop/${product.slug}`}
                  className="mt-3 inline-flex min-h-9 w-full items-center justify-center rounded-full bg-[#2E473B] px-2 py-2 text-[10px] font-medium text-white transition hover:bg-[#23392F] sm:mt-4 sm:min-h-10 sm:px-4 sm:text-sm"
                >
                  View Product →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Full Collection */}
        <Link
          href="/shop"
          className="mt-7 inline-flex items-center justify-center rounded-full border border-[#2E473B] px-6 py-3 text-sm font-semibold text-[#2E473B] transition hover:bg-[#2E473B] hover:text-white sm:mt-10 sm:border-2 sm:px-8 sm:py-3.5 sm:text-base"
        >
          Explore All Products
        </Link>
      </div>
    </section>
  );
}