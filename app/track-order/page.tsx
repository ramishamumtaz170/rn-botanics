import TrackOrderForm from "@/app/components/track/TrackOrderForm";

export default function TrackOrderPage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] py-24">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-[#2E473B]">
            Track Your Order
          </h1>

          <p className="mt-5 text-lg text-gray-600">
            Enter your Order Number and Phone Number to check your order status.
          </p>
        </div>

        <TrackOrderForm />

      </div>
    </main>
  );
}