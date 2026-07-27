import ProductShowcase from "../components/shop/ProductShowcase";
import Benefits from "../components/shop/Benefits";
import Ingredients from "../components/shop/Ingredients";
import HowToUse from "../components/shop/HowToUse";
import CallToAction from "../components/shop/CallToAction";
import { PRODUCT } from "@/app/constants/product";


export default function Shop() {
  return (
    <main className="min-h-screen bg-[#F8F5EF]">

     
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