import ProductShowcase from "../components/shop/ProductShowcase";
import Benefits from "../components/shop/Benefits";
import Ingredients from "../components/shop/Ingredients";
import HowToUse from "../components/shop/HowToUse";
import CallToAction from "../components/shop/CallToAction";
import { PRODUCT } from "@/app/constants/product";


export default function Shop() {
  return (
    <main className="min-h-screen bg-[#F8F5EF]">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-40 pb-24">

        <div className="text-center">

          <p className="uppercase tracking-[0.35em] text-[#7C9A7D] text-sm font-medium">
            Shop
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight text-[#2E473B]">
            Our Botanical Collection
          </h1>

        <div className="flex justify-center">
 <p className="mt-8 max-w-2xl text-center text-lg text-gray-600 leading-8">
  {PRODUCT.description}
</p>

</div>
        </div>

      </section>

      {/* Product Showcase */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <ProductShowcase />

<Benefits />
<Ingredients />
<HowToUse />
<CallToAction />
        </div>
      </section>

    </main>
  );
}