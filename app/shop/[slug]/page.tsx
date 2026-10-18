import Link from "next/link";
import { notFound } from "next/navigation";
import RelatedProducts from "@/app/components/shop/RelatedProducts";

import { PRODUCTS } from "@/app/constants/product";
import ProductDetail from "@/app/components/shop/ProductDetail";
import ProductInfoTabs from "@/app/components/shop/ProductInfoTabs";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = PRODUCTS.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F8F5EF] pb-24">
      {/* Back to Collection */}
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <Link
          href="/shop"
          className="text-sm font-medium text-[#7C9A7D] transition hover:text-[#2E473B]"
        >
          ← Back to Collection
        </Link>
      </div>

      {/* Product Details */}
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <ProductDetail product={product} />
      </div>

      {/* Product Information */}
      <div className="mx-auto max-w-7xl px-6">
        <ProductInfoTabs product={product} />
      </div>

       <RelatedProducts currentProduct={product} />
    </main>
    
    
  );
}