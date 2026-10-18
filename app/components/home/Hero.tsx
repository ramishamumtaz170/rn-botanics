import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#F8F5EF]"
    >
    <div className="relative h-[500px] w-full sm:h-[620px] lg:h-[700px]">
  <Image
    src="/images/hero-products.png"
    alt="R & N Botanics product collection"
    fill
    priority
    sizes="100vw"
 className="object-cover object-[center_60%] sm:object-[center_58%] lg:object-[center_55%]"
  />

  <div className="absolute inset-0 flex items-end px-5 pb-6 sm:px-8 sm:pb-8 lg:px-12 lg:pb-12">
    <Link
      href="/shop"
      className="inline-flex min-h-9 items-center justify-center gap-2 rounded-full bg-[#2E473B] px-5 py-2 text-[10px] font-medium uppercase tracking-[0.12em] text-white shadow-lg transition hover:bg-[#23392F] active:scale-95 sm:px-6 sm:py-2.5 sm:text-xs"
    >
      Shop Collection <span aria-hidden="true">→</span>
    </Link>
  </div>
</div>
    </section>
  );
}