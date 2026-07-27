"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

type CartDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export default function CartDrawer({
  open,
  onClose,
}: CartDrawerProps) {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[430px] bg-[#F8F5EF] shadow-2xl z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E3DA] bg-white">
          <h2 className="text-2xl font-bold text-[#2E473B]">
            Shopping Cart
          </h2>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F8F5EF] transition"
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>

        {/* Empty Cart */}
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[calc(100%-85px)] px-8 text-center bg-white">
            <div className="w-20 h-20 rounded-full bg-[#F8F5EF] flex items-center justify-center">
              <span className="text-3xl">🛍️</span>
            </div>

            <p className="mt-6 text-2xl font-semibold text-[#2E473B]">
              Your cart is empty
            </p>

            <p className="mt-3 max-w-xs text-sm leading-6 text-gray-500">
              Add your favourite botanical products to begin shopping.
            </p>

            <button
              onClick={onClose}
              className="mt-7 rounded-full bg-[#2E473B] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#23392F] transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="flex flex-col h-[calc(100%-85px)]">

            {/* Products */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.cap}`}
                  className="bg-white rounded-[28px] p-5 shadow-sm border border-[#EEE7DD]"
                >
                  <div className="flex gap-5">

                    {/* Product Image */}
                    <div className="w-24 h-24 rounded-2xl bg-[#F8F5EF] flex items-center justify-center shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 flex flex-col justify-between min-w-0">

                      <div>
                        <h3 className="text-lg font-bold text-[#2E473B] leading-6">
                          {item.name}
                        </h3>

                        {/* Selected Cap */}
                        <p className="mt-2 text-sm text-gray-500">
                          Bottle Cap:{" "}
                          <span className="font-semibold text-[#2E473B]">
                            {item.cap}
                          </span>
                        </p>

                        {/* Price */}
                        <p className="mt-2 text-xl font-semibold text-[#2E473B]">
                          Rs. {item.price.toLocaleString()}
                        </p>
                      </div>

                      {/* Quantity + Remove */}
                      <div className="flex items-center justify-between gap-3 mt-5">

                        {/* Quantity */}
                        <div className="flex items-center bg-[#F8F5EF] rounded-full border border-[#E8E3DA] overflow-hidden">

                          <button
                            onClick={() =>
                              decreaseQuantity(item.id, item.cap)
                            }
                            className="w-10 h-10 flex items-center justify-center hover:bg-[#ECE7DF] transition"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={16} />
                          </button>

                          <span className="w-10 text-center font-semibold text-[#2E473B]">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              increaseQuantity(item.id, item.cap)
                            }
                            className="w-10 h-10 flex items-center justify-center hover:bg-[#ECE7DF] transition"
                            aria-label="Increase quantity"
                          >
                            <Plus size={16} />
                          </button>

                        </div>

                        {/* Remove */}
                        <button
                          onClick={() =>
                            removeFromCart(item.id, item.cap)
                          }
                          className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600 transition"
                        >
                          <Trash2 size={16} />
                          Remove
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Footer */}
            <div className="border-t border-[#E8E3DA] bg-white p-6">

              <div className="flex justify-between items-center">

                <div>
                  <p className="text-sm text-gray-500">
                    Subtotal
                  </p>

                  <p className="text-3xl font-bold text-[#2E473B] mt-1">
                    Rs. {total.toLocaleString()}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm text-gray-500">
                    Items
                  </p>

                  <p className="text-lg font-semibold text-[#2E473B]">
                    {totalItems}
                  </p>
                </div>

              </div>

              <p className="mt-5 text-sm leading-6 text-gray-500">
                Shipping charges will be calculated during checkout.
              </p>

              {/* Buttons */}
              <div className="mt-6 space-y-3">

                <button
                  onClick={onClose}
                  className="w-full py-4 rounded-full border-2 border-[#2E473B] text-[#2E473B] font-semibold hover:bg-[#F8F5EF] transition-all duration-300"
                >
                  Continue Shopping
                </button>

                <Link
                  href="/checkout"
                  onClick={onClose}
                  className="w-full flex items-center justify-center py-4 rounded-full bg-[#2E473B] text-white font-semibold hover:bg-[#23392F] transition-all duration-300"
                >
                  Proceed to Checkout
                </Link>

              </div>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}