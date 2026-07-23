import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "./components/layout/Navbar";
import { CartProvider } from "@/app/context/CartContext";
import { CheckoutProvider } from "@/app/context/CheckoutContext";
import { Toaster } from "react-hot-toast";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "R & N Botanics",
  description: "Everyday Botanical Luxury",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${poppins.variable}`}>
        <CartProvider>
          <CheckoutProvider>
            <Navbar />

            {children}

            <Toaster
              position="top-right"
              gutter={12}
              toastOptions={{
                duration: 2500,
                style: {
                  background: "#FFFFFF",
                  color: "#2E473B",
                  border: "1px solid #E8E3DA",
                  borderRadius: "20px",
                  padding: "16px 20px",
                  fontWeight: "500",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                  fontSize: "15px",
                },
                success: {
                  iconTheme: {
                    primary: "#2E473B",
                    secondary: "#F8F5EF",
                  },
                },
              }}
            />
          </CheckoutProvider>
        </CartProvider>
      </body>
    </html>
  );
}