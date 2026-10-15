"use client";

import Image from "next/image";
import { Plus, Minus, Trash2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { useCart } from "@/app/context/CartContext";
import { useCheckout } from "@/app/context/CheckoutContext";

import { db } from "@/lib/firebase";
import {
  doc,
  setDoc,
  runTransaction,
  serverTimestamp,
} from "firebase/firestore";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export default function OrderSummary() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const {
    checkoutData,
    resetCheckout,
  } = useCheckout();

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // =========================================
  // CALCULATE TOTALS
  // =========================================

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = 0;
  const total = subtotal + shipping;

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // =========================================
  // PRODUCT TYPE LABEL
  // =========================================

  const getProductTypeLabel = (type: string) => {
    switch (type) {
      case "oil":
        return "Hair Oil";

      case "shampoo":
        return "Shampoo";

      case "comb":
        return "Wooden Comb";

      case "bundle":
        return "Bundle";

      default:
        return "Hair Care";
    }
  };

  // =========================================
  // GENERATE UNIQUE ORDER NUMBER
  // =========================================

  const generateOrderNumber = async () => {
    const counterRef = doc(db, "counters", "orders");

    return await runTransaction(db, async (transaction) => {
      const counterDoc = await transaction.get(counterRef);

      if (!counterDoc.exists()) {
        throw new Error("Counter document not found.");
      }

      const current =
        counterDoc.data().lastOrderNumber || 0;

      const next = current + 1;

      transaction.update(counterRef, {
        lastOrderNumber: next,
      });

      return `RNB-${String(next).padStart(4, "0")}`;
    });
  };

  // =========================================
  // PLACE ORDER
  // =========================================

  const handlePlaceOrder = async () => {
    if (loading) return;

    // Validation
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

    setLoading(true);

    try {
      // =========================================
      // 1. GENERATE ORDER NUMBER
      // =========================================

      const orderNumber =
        await generateOrderNumber();

      // =========================================
      // 2. SAVE ORDER TO FIREBASE
      // =========================================

      await setDoc(
        doc(db, "orders", orderNumber),
        {
          orderNumber,
          customer: checkoutData,
          items: cart,
          subtotal,
          shipping,
          total,
          paymentMethod: "Cash on Delivery",
          orderStatus: "Pending",
          paymentStatus: "Unpaid",
          trackingNumber: "",
          notes: "",
          createdAt: serverTimestamp(),
        }
      );

      // =========================================
      // 3. META PURCHASE EVENT
      // =========================================

      if (
        typeof window !== "undefined" &&
        window.fbq
      ) {
        window.fbq("track", "Purchase", {
          content_ids: cart.map(
            (item) => item.id
          ),
          content_type: "product",
          value: total,
          currency: "PKR",
          num_items: totalItems,
        });
      }

      // =========================================
      // 4. SEND ORDER EMAIL
      // =========================================

      fetch("/api/send-order", {
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
        }),
      }).catch((error) => {
        console.error(
          "Order email failed:",
          error
        );
      });

      // =========================================
      // 5. CLEAR CART
      // =========================================

      clearCart();
      resetCheckout();

      // =========================================
      // 6. GO TO SUCCESS PAGE
      // =========================================

      router.push(
        `/order-success?order=${orderNumber}`
      );
    } catch (error) {
      console.error(
        "Failed to place order:",
        error
      );

      alert(
        "Failed to place order. Please try again."
      );

      setLoading(false);
    }
  };

  return (
    <aside>
      {/* Heading */}
      <h2 className="text-3xl font-bold text-[#2E473B]">
        Order Summary
      </h2>

      {/* Products */}
      <div className="mt-8 space-y-6">
        {cart.length === 0 ? (
          <p className="text-gray-500">
            Your cart is empty.
          </p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 border-b border-[#E8E3DA] pb-6"
            >
              {/* Product Image */}
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#F8F5EF]">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>

              {/* Product Details */}
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#7C9A7D]">
                  {getProductTypeLabel(item.type)}
                </p>

                <h3 className="mt-1 font-semibold text-[#2E473B]">
                  {item.name}
                </h3>

                <p className="mt-2 font-semibold text-[#2E473B]">
                  Rs. {item.price.toLocaleString()}
                </p>

                {/* Quantity Controls */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center overflow-hidden rounded-full border border-[#E8E3DA] bg-[#F8F5EF]">
                    <button
                      type="button"
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                      aria-label={`Decrease quantity of ${item.name}`}
                      className="flex h-9 w-9 items-center justify-center transition hover:bg-[#ECE7DF]"
                    >
                      <Minus size={15} />
                    </button>

                    <span className="w-10 text-center font-semibold text-[#2E473B]">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                      aria-label={`Increase quantity of ${item.name}`}
                      className="flex h-9 w-9 items-center justify-center transition hover:bg-[#ECE7DF]"
                    >
                      <Plus size={15} />
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    type="button"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                    aria-label={`Remove ${item.name}`}
                    className="text-red-500 transition hover:text-red-600"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              {/* Item Total */}
              <div className="whitespace-nowrap font-bold text-[#2E473B]">
                Rs.{" "}
                {(
                  item.price * item.quantity
                ).toLocaleString()}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pricing */}
      <div className="mt-10 space-y-5">
        {/* Subtotal */}
        <div className="flex justify-between">
          <span className="text-gray-500">
            Subtotal
          </span>

          <span className="font-semibold text-[#2E473B]">
            Rs. {subtotal.toLocaleString()}
          </span>
        </div>

        {/* Shipping */}
        <div className="flex justify-between">
          <span className="text-gray-500">
            Shipping
          </span>

          <span className="font-semibold text-[#2E473B]">
            FREE
          </span>
        </div>

        <hr className="border-[#E8E3DA]" />

        {/* Total */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-[#2E473B]">
            Total
          </span>

          <span className="text-3xl font-bold text-[#2E473B]">
            Rs. {total.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Free Delivery Message */}
      <div className="mt-6 rounded-2xl bg-[#F8F5EF] p-4 text-center">
        <p className="font-bold text-[#2E473B]">
          🌿 FREE DELIVERY
        </p>

        <p className="mt-1 text-sm text-gray-500">
          Delivery available all over Pakistan
        </p>
      </div>

      {/* Place Order */}
      <button
        type="button"
        onClick={handlePlaceOrder}
        disabled={
          loading || cart.length === 0
        }
        className={`mt-6 w-full rounded-full py-5 text-lg font-semibold transition-all duration-300 ${
          loading || cart.length === 0
            ? "cursor-not-allowed bg-gray-400 text-white"
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