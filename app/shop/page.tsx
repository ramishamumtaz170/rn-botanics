import ProductShowcase from "../components/shop/ProductShowcase";
import Benefits from "../components/shop/Benefits";
import Ingredients from "../components/shop/Ingredients";
import HowToUse from "../components/shop/HowToUse";
import CallToAction from "../components/shop/CallToAction";
import FeedbackSection from "../components/shop/FeedbackSection";

export default function Shop() {
  return (
    <main className="bg-[#F8F5EF]">

      {/* Product Showcase */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <ProductShowcase />
        </div>
      </section>

      {/* Customer Feedback */}
      <FeedbackSection />

      {/* Other Sections */}
      <Benefits />
      <Ingredients />
      <HowToUse />
      <CallToAction />

    </main>
  );
}