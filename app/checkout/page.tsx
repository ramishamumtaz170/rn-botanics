import CheckoutForm from "@/app/components/checkout/CheckoutForm";
import OrderSummary from "@/app/components/checkout/OrderSummary";

export default function CheckoutPage() {
  return (
    <main className="bg-[#F8F5EF] min-h-screen py-5">
 <div className="max-w-7xl mx-auto px-7 sm:px-8 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-3">
  <h1 className="text-3xl font-bold text-[#2E473B]">
    Checkout
  </h1>

  <p className="mt-3 text-lg text-gray-600 leading-8">
    You're just one step away from experiencing botanical hair care.
  </p>
</div>
        <div className="grid lg:grid-cols-[1fr_1fr] gap-2">

          <CheckoutForm />

          <OrderSummary />

        </div>

      </div>
    </main>
  );
}