import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function OrderSuccessPage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] flex items-center justify-center px-6 py-24">

      <div className="max-w-2xl w-full bg-white rounded-[40px] shadow-sm p-12 text-center">

        {/* Success Icon */}

        <div className="w-24 h-24 mx-auto rounded-full bg-[#EEF6EF] flex items-center justify-center">

          <CheckCircle2
            size={56}
            className="text-[#2E473B]"
          />

        </div>

        {/* Heading */}

        <h1 className="mt-8 text-5xl font-bold text-[#2E473B]">
          Order Confirmed
        </h1>

        <p className="mt-5 text-lg leading-8 text-gray-600">
          Thank you for choosing
          <span className="font-semibold text-[#2E473B]">
            {" "}R & N Botanics
          </span>.
          <br />
          Your order has been placed successfully.
        </p>

        {/* Order Number */}

        <div className="mt-10 bg-[#F8F5EF] rounded-3xl p-6">

          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
            Order Number
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#2E473B]">
            RN-1001
          </h2>

        </div>

        {/* Message */}

        <div className="mt-10 space-y-2">

          <p className="text-[#2E473B] font-semibold">
            What happens next?
          </p>

          <p className="text-gray-600 leading-7">
            Our team will contact you shortly to confirm your order.
            Once confirmed, we'll prepare your botanical products and
            dispatch them to your delivery address.
          </p>

        </div>

        {/* Buttons */}

        <div className="mt-12 flex flex-col sm:flex-row gap-4">

          <Link
            href="/shop"
            className="flex-1 border-2 border-[#2E473B] text-[#2E473B] py-4 rounded-full font-semibold hover:bg-[#F8F5EF] transition"
          >
            Continue Shopping
          </Link>

          <Link
            href="/"
            className="flex-1 bg-[#2E473B] text-white py-4 rounded-full font-semibold hover:bg-[#23392F] transition"
          >
            Back to Home
          </Link>

        </div>

      </div>

    </main>
  );
}