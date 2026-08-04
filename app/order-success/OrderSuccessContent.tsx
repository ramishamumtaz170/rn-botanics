"use client";

import { CheckCircle2 } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function OrderSuccessContent() {
  const searchParams = useSearchParams();

  const orderNumber = searchParams.get("order") || "N/A";

  return (
    <main className="min-h-screen bg-[#F8F5EF] flex items-center justify-center px-4 py-20">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md text-center">

        <CheckCircle2 
          size={70} 
          className="mx-auto text-green-600" 
        />

        <h1 className="text-3xl font-semibold mt-6">
          Order Confirmed!
        </h1>

        <p className="mt-4 text-gray-600">
          Thank you for shopping with R & N Botanics.
        </p>

        <p className="mt-5 text-sm text-gray-500">
          Order Number:
        </p>

        <p className="font-bold text-[#8B4513]">
          {orderNumber}
        </p>

      </div>
    </main>
  );
}