"use client";

import { useEffect, useState } from "react";

import ProductShowcase from "../components/shop/ProductShowcase";
import Benefits from "../components/shop/Benefits";
import Ingredients from "../components/shop/Ingredients";
import HowToUse from "../components/shop/HowToUse";
import CallToAction from "../components/shop/CallToAction";
import FeedbackSection from "../components/shop/FeedbackSection";
import ReviewPopup from "../components/shop/ReviewPopup";
import CartDrawer from "../components/shop/CartDrawer";

export default function ShopContent() {
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const handleOpenCart = () => {
      setCartOpen(true);
    };

    window.addEventListener("open-cart", handleOpenCart);

    return () => {
      window.removeEventListener("open-cart", handleOpenCart);
    };
  }, []);

  return (
    <>
      <main>

        {/* Product Showcase */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <ProductShowcase />
          </div>
        </section>

        {/* Customer Feedback */}
        <FeedbackSection />

        {/* Other Sections */}
        <Benefits />
        <Ingredients />
        <HowToUse />
        <CallToAction />

        {/* Customer Review Popup */}
        <ReviewPopup />

      </main>

      {/* Cart Drawer */}
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </>
  );
}