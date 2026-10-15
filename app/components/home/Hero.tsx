
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#F8F5EF]"
    >
      {/* Full-width hero banner */}
      <div className="relative min-h-[420px] w-full sm:min-h-[560px] lg:min-h-[680px]">
        
<Image
  src="/images/hero-products.png"
  alt="R & N Botanics hair oil, Coffee Velvet Shampoo and Conditioner, and wooden comb"
  fill
  priority
  sizes="100vw"
  className="object-contain object-center sm:object-cover"
/>

        {/* Optional clickable overlay area for the call to action */}
        <div className="absolute inset-0 flex items-end justify-center pb-6 sm:pb-10 lg:pb-12">
          <Link
            href="/shop"
            className="inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-[#2E473B] px-7 py-3 text-xs font-medium uppercase tracking-[0.18em] text-white shadow-lg transition hover:bg-[#23392F] active:scale-95 sm:px-9 sm:py-4 sm:text-sm"
          >
            Shop Collection
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
