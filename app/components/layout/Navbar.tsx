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
   <header className="sticky top-0 w-full bg-[#F8F5EF]/90 backdrop-blur-md border-b border-[#E8E3DA] z-50">
       <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}

        <Link
          href="/"
          className="text-3xl font-bold text-[#2E473B]"
        >
          R & N Botanics
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden md:flex items-center gap-8">

          <Link
            href="/"
            className="text-[#2E473B] hover:text-[#7C9A7D] transition"
          >
            Home
          </Link>

          <Link
            href="/shop"
            className="text-[#2E473B] hover:text-[#7C9A7D] transition"
          >
            Shop
          </Link>

<Link
  href="/faq"
  className="text-[#2E473B] hover:text-[#7C9A7D] transition"
>
  FAQ
</Link>


          <Link
            href="/#ingredients"
            className="text-[#2E473B] hover:text-[#7C9A7D] transition"
          >
            About
          </Link>

        <a
  href="https://wa.me/923094289165"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#2E473B] hover:text-[#7C9A7D] transition"
>
  Contact
</a>
        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-5">

          {/* Cart */}

         <button
  onClick={() => setCartOpen(true)}
  className="relative flex items-center justify-center w-11 h-11 rounded-full border border-[#E8E3DA] hover:bg-white transition"
>

  <ShoppingBag
    size={22}
    className="text-[#2E473B]"
  />

  {cartCount > 0 && (
    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#2E473B] text-white text-xs font-semibold flex items-center justify-center">
      {cartCount}
    </span>
  )}
</button>
          
          <button
            className="md:hidden text-[#2E473B]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="absolute top-full left-0 w-full md:hidden bg-[#F8F5EF] border-t border-[#E8E3DA] px-6 py-6 shadow-lg">
          <nav className="flex flex-col gap-5">

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-[#2E473B]"
            >
              Home
            </Link>

            <Link
              href="/shop"
              onClick={() => setOpen(false)}
              className="text-[#2E473B]"
            >
              Shop
            </Link>

       <Link
  href="/#ingredients"
  onClick={() => {
    setTimeout(() => setOpen(false), 100);
  }}
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

<CartDrawer
  open={cartOpen}
  onClose={() => setCartOpen(false)}
/>

    </header>
  );
}