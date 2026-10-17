"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/app/context/CartContext";
import CartDrawer from "@/app/components/shop/CartDrawer";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const { cartCount } = useCart();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#F8F5EF]/90 backdrop-blur-md">

        {/* Free Shipping Announcement Bar */}
        <div className="w-full bg-[#2E473B] px-3 py-2 text-center text-[10px] font-medium uppercase tracking-[0.15em] text-white sm:py-2.5 sm:text-xs sm:tracking-[0.2em]">
          Free Shipping Nationwide
        </div>

        {/* Main Navigation */}
        <div className="border-b border-[#E8E3DA]">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6">

            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold text-[#2E473B] sm:text-3xl"
            >
              R & N Botanics
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 md:flex">
              <Link href="/" className="text-[#2E473B] transition hover:text-[#7C9A7D]">
                Home
              </Link>

              <Link href="/shop" className="text-[#2E473B] transition hover:text-[#7C9A7D]">
                Shop
              </Link>

              <Link href="/faq" className="text-[#2E473B] transition hover:text-[#7C9A7D]">
                FAQ
              </Link>

              <Link href="/#ingredients" className="text-[#2E473B] transition hover:text-[#7C9A7D]">
                About
              </Link>

              <a
                href="https://wa.me/923094289165"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2E473B] transition hover:text-[#7C9A7D]"
              >
                Contact
              </a>
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-4 sm:gap-5">

              {/* Cart */}
              <button
                onClick={() => setCartOpen(true)}
                aria-label="Open shopping cart"
                className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E3DA] transition hover:bg-white sm:h-11 sm:w-11"
              >
                <ShoppingBag size={22} className="text-[#2E473B]" />

                {cartCount > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#2E473B] text-xs font-semibold text-white">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                className="text-[#2E473B] md:hidden"
                onClick={() => setOpen(!open)}
                aria-label="Toggle Menu"
                aria-expanded={open}
              >
                {open ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute left-0 top-full w-full border-t border-[#E8E3DA] bg-[#F8F5EF] px-6 py-6 shadow-lg md:hidden">
            <nav className="flex flex-col gap-5">
              <Link href="/" onClick={() => setOpen(false)} className="text-[#2E473B]">
                Home
              </Link>

              <Link href="/shop" onClick={() => setOpen(false)} className="text-[#2E473B]">
                Shop
              </Link>

              <Link href="/faq" onClick={() => setOpen(false)} className="text-[#2E473B]">
                FAQ
              </Link>

              <Link
                href="/#ingredients"
                onClick={() => setOpen(false)}
                className="text-[#2E473B]"
              >
                About
              </Link>

              <a
                href="https://wa.me/923094289165"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="text-[#2E473B]"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Keeps page content below the fixed announcement bar and navbar */}
      <div aria-hidden="true" className="h-[10px] sm:h-[0px]" />

      {/* Cart Drawer */}
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </>
  );
}