import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/app/constants/product";

export default function FeaturedProducts() {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <section className="w-full bg-[#F8F5EF] px-4 py-12 text-center sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        {/* Heading */}
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7C9A7D] sm:text-sm">
          Discover R & N Botanics
        </p>

        <h2 className="mt-3 text-2xl font-bold text-[#2E473B] sm:text-3xl lg:text-4xl">
          Our Botanical Essentials
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
          Thoughtfully crafted essentials inspired by nature,
          bringing everyday luxury to your routine.
        </p>

        {/* Featured Products */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12">
          {featuredProducts.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-3xl border border-[#E5E0D7] bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <Link
                href={`/shop/${product.slug}`}
                className="relative flex aspect-square items-center justify-center overflow-hidden bg-[#F4F1EA] p-8"
              >
                {product.discount > 0 && (
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-[#2E473B] px-3 py-1.5 text-xs font-semibold text-white">
                    {product.discount}% OFF
                  </span>
                )}

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              {/* Details */}
              <div className="p-5 sm:p-6">
                <p className="text-xs uppercase tracking-wider text-[#7C9A7D]">
                  {product.tagline}
                </p>

                <h3 className="mt-2 text-lg font-semibold text-[#2E473B]">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {product.shortDescription}
                </p>

                {product.size && (
                  <p className="mt-3 text-sm text-gray-500">
                    {product.size}
                  </p>
                )}

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="text-xl font-bold text-[#2E473B]">
                    Rs. {product.salePrice.toLocaleString()}
                  </span>

                  {product.discount > 0 && (
                    <span className="text-sm text-gray-400 line-through">
                      Rs. {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                <Link
                  href={`/shop/${product.slug}`}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#2E473B] px-5 py-3 font-semibold text-white transition hover:bg-[#23392F]"
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
          className="mt-8 inline-flex items-center justify-center rounded-full border-2 border-[#2E473B] px-8 py-3.5 font-semibold text-[#2E473B] transition hover:bg-[#2E473B] hover:text-white sm:mt-10"
        >
          Explore All Products
        </Link>
      </div>
    </section>
  );
}