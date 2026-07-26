"use client";

import Image from "next/image";
import { useState } from "react";
import { Plus, Minus, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

import { useCart } from "@/app/context/CartContext";
import { useCheckout } from "@/app/context/CheckoutContext";

import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

export default function OrderSummary() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const {
    delivery,
    checkoutData,
    resetCheckout,
  } = useCheckout();

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Shipping based on selected delivery method
  const shipping =
    delivery === "standard" ? 250 : 500;

  const total = subtotal + shipping;

  const handlePlaceOrder = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    if (!checkoutData.fullName.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!checkoutData.phone.trim()) {
      alert("Please enter your phone number.");
      return;
    }

    if (!checkoutData.address.trim()) {
      alert("Please enter your address.");
      return;
    }

    if (!checkoutData.city.trim()) {
      alert("Please enter your city.");
      return;
    }

    if (!checkoutData.termsAccepted) {
      alert("Please accept the Terms & Conditions.");
      return;
    }

    setLoading(true);

    const orderNumber =
      "RNB-" + Date.now().toString().slice(-6);

    try {
      await addDoc(collection(db, "orders"), {
        orderNumber,
        customer: checkoutData,
        items: cart,
        subtotal,
        shipping,
        total,
        paymentMethod: "Cash on Delivery",
        delivery,
        orderStatus: "Pending",
        createdAt: serverTimestamp(),
      });

      // Send order email
      await fetch("/api/send-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderNumber,
          customer: checkoutData,
          items: cart,
          subtotal,
          shipping,
          total,
          delivery,
        }),
      });

      clearCart();
      resetCheckout();

      router.push("/order-success");
    } catch (error) {
      console.error(error);
      alert("Failed to place order.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <aside className="bg-white rounded-[40px] p-10 shadow-sm h-fit sticky top-28">

      <h2 className="text-3xl font-bold text-[#2E473B]">
        Order Summary
      </h2>

      <div className="mt-8 space-y-6">

        {cart.length === 0 ? (
          <p className="text-gray-500">
            Your cart is empty.
          </p>
        ) : (
          cart.map((item) => (
            <div
              key={`${item.id}-${item.cap}`}
              className="flex gap-4 pb-6 border-b border-[#E8E3DA]"
            >

              {/* Product Image */}

              <div className="w-20 h-20 rounded-2xl bg-[#F8F5EF] flex items-center justify-center shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>

              {/* Product Details */}

              <div className="flex-1 min-w-0">

                <h3 className="font-semibold text-[#2E473B]">
                  {item.name}
                </h3>

                {/* Selected Cap */}

                <p className="mt-1 text-sm text-gray-500">
                  Cap:{" "}
                  <span className="font-medium text-[#2E473B]">
                    {item.cap}
                  </span>
                </p>

                <p className="mt-2 font-semibold text-[#2E473B]">
                  Rs. {item.price.toLocaleString()}
                </p>

                {/* Quantity Controls */}

                <div className="mt-4 flex items-center justify-between">

                  <div className="flex items-center bg-[#F8F5EF] rounded-full border border-[#E8E3DA] overflow-hidden">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id, item.cap)
                      }
                      className="w-9 h-9 flex items-center justify-center hover:bg-[#ECE7DF] transition"
                    >
                      <Minus size={15} />
                    </button>

                    <span className="w-10 text-center font-semibold text-[#2E473B]">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id, item.cap)
                      }
                      className="w-9 h-9 flex items-center justify-center hover:bg-[#ECE7DF] transition"
                    >
                      <Plus size={15} />
                    </button>

                  </div>

                  <button
                    onClick={() =>
                      removeFromCart(item.id, item.cap)
                    }
                    className="text-red-500 hover:text-red-600 transition"
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              </div>

              {/* Item Total */}

              <div className="font-bold text-[#2E473B] whitespace-nowrap">
                Rs.{" "}
                {(item.price * item.quantity).toLocaleString()}
              </div>

            </div>
          ))
        )}

      </div>

      {/* Pricing */}

      <div className="mt-10 space-y-5">

        <div className="flex justify-between">
          <span className="text-gray-500">
            Subtotal
          </span>

          <span className="font-semibold text-[#2E473B]">
            Rs. {subtotal.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">
            Shipping
          </span>

          <span className="font-semibold text-[#2E473B]">
            Rs. {shipping.toLocaleString()}
          </span>
        </div>

        <hr className="border-[#E8E3DA]" />

        <div className="flex justify-between items-center">

          <span className="text-2xl font-bold text-[#2E473B]">
            Total
          </span>

          <span className="text-3xl font-bold text-[#2E473B]">
            Rs. {total.toLocaleString()}
          </span>

        </div>

      </div>

      {/* Place Order */}

      <button
        onClick={handlePlaceOrder}
        disabled={loading || cart.length === 0}
        className={`mt-10 w-full py-5 rounded-full text-lg font-semibold transition-all duration-300 ${
          loading || cart.length === 0
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-[#2E473B] text-white hover:bg-[#23392F]"
        }`}
      >
        {loading
          ? "Placing Order..."
          : "Place Order"}
      </button>

    </aside>
  );
}