import ProductDetail from "../../components/shop/ProductDetail";
import ProductInfoTabs from "../../components/shop/ProductInfoTabs";

export default function HairOilPage() {
  return (
    <main className="bg-[#F8F5EF] pb-24">
        <div className="max-w-7xl mx-auto px-6">
        <ProductDetail />
        <ProductInfoTabs />
      </div>
    </main>
  );
}