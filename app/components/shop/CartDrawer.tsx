"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
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
    0,
  );

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-[#2E473B]/35 transition-opacity duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* Cart drawer */}
      <aside
        aria-label="Shopping cart"
        aria-hidden={!open}
        className={`fixed right-0 top-0 z-50 flex h-dvh w-full flex-col bg-white shadow-2xl transition-transform duration-300 sm:max-w-[460px] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-[#E8E3DA] bg-white px-5 py-5 sm:px-7">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7C9A7D]">
              Your selection
            </p>

            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#2E473B]">
              Shopping Cart
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close shopping cart"
            className="flex h-11 w-11 items-center justify-center rounded-full text-[#2E473B] transition hover:bg-[#F8F5EF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A25A]"
          >
            <X size={22} strokeWidth={1.8} />
          </button>
        </div>

        {/* Empty cart */}
        {cart.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center bg-white px-8 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F8F5EF] text-[#2E473B]">
              <ShoppingBag size={32} strokeWidth={1.5} />
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-[#2E473B]">
              Your cart is empty
            </h3>

            <p className="mt-3 max-w-xs text-sm leading-6 text-[#747B74]">
              Add your favorite botanical products to begin shopping.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mt-7 rounded-full bg-[#2E473B] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#23392F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A25A] focus-visible:ring-offset-2"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="flex min-h-0 flex-1 flex-col bg-[#FBFAF8]">
            {/* Products */}
            <div className="min-h-0 flex-1 space-y-4 overflow-y-auto px-4 py-5 sm:px-6">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.cap}`}
                  className="rounded-[24px] border border-[#E8E3DA] bg-white p-4 shadow-[0_8px_24px_rgba(46,71,59,0.06)]"
                >
                  <div className="flex gap-4">
                    {/* Product image */}
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-[#F8F5EF] sm:h-28 sm:w-28">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="h-full w-full object-contain p-2"
                      />
                    </div>

                    {/* Product details */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="min-w-0 text-base font-bold leading-5 text-[#2E473B] sm:text-lg">
                          {item.name}
                        </h3>

                        <button
                          type="button"
                          onClick={() =>
                            removeFromCart(item.id, item.cap)
                          }
                          aria-label={`Remove ${item.name}`}
                          className="shrink-0 rounded-full p-1.5 text-[#A6AAA5] transition hover:bg-[#FDECEC] hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                        >
                          <Trash2 size={17} strokeWidth={1.8} />
                        </button>
                      </div>

                      <p className="mt-2 text-xs leading-5 text-[#7A807A]">
                        Bottle Cap
                        <span className="ml-1 font-semibold text-[#2E473B]">
                          {item.cap}
                        </span>
                      </p>

                      <p className="mt-2 text-lg font-bold text-[#2E473B]">
                        Rs. {item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Quantity controls */}
                  <div className="mt-4 flex items-center justify-between border-t border-[#F0ECE5] pt-4">
                    <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#8A9089]">
                      Quantity
                    </span>

                    <div className="flex items-center overflow-hidden rounded-full border border-[#E8E3DA] bg-[#F8F5EF]">
                      <button
                        type="button"
                        onClick={() =>
                          decreaseQuantity(item.id, item.cap)
                        }
                        aria-label={`Decrease quantity of ${item.name}`}
                        className="flex h-9 w-9 items-center justify-center text-[#2E473B] transition hover:bg-[#ECE7DF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A25A]"
                      >
                        <Minus size={15} />
                      </button>

                      <span
                        className="flex h-9 min-w-9 items-center justify-center text-sm font-bold text-[#2E473B]"
                        aria-live="polite"
                      >
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          increaseQuantity(item.id, item.cap)
                        }
                        aria-label={`Increase quantity of ${item.name}`}
                        className="flex h-9 w-9 items-center justify-center text-[#2E473B] transition hover:bg-[#ECE7DF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A25A]"
                      >
                        <Plus size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart summary */}
            <div className="shrink-0 border-t border-[#E8E3DA] bg-white px-5 py-5 sm:px-7 sm:py-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm text-[#7A807A]">Subtotal</p>

                  <p className="mt-1 text-3xl font-bold tracking-tight text-[#2E473B]">
                    Rs. {total.toLocaleString()}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm text-[#7A807A]">Items</p>

                  <p className="mt-1 text-lg font-bold text-[#2E473B]">
                    {totalItems}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs leading-5 text-[#858B84]">
                Shipping charges will be calculated during checkout.
              </p>

              <div className="mt-5 grid gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="min-h-12 w-full rounded-full border-2 border-[#2E473B] px-5 text-sm font-semibold text-[#2E473B] transition hover:bg-[#F8F5EF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A25A] focus-visible:ring-offset-2"
                >
                  Continue Shopping
                </button>

                <Link
                  href="/checkout"
                  onClick={onClose}
                  className="flex min-h-12 w-full items-center justify-center rounded-full bg-[#2E473B] px-5 text-sm font-semibold text-white transition hover:bg-[#23392F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A25A] focus-visible:ring-offset-2"
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