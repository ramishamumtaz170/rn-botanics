import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
  verification: {
    google: "iXS-m4ujuixXrq6hN3qPHoS_gdLEDfwOkkOPjahWEsQ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${poppins.variable} min-h-screen`}
      >


<Script
  id="meta-pixel"
  strategy="afterInteractive"
>
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');

    fbq('init', '1001477336265767');
    fbq('track', 'PageView');
  `}
</Script>


        <CartProvider>
          <CheckoutProvider>
            <Navbar />

            <main className="pt-20 min-h-screen">
              {children}
            </main>

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