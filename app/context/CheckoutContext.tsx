"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type DeliveryMethod = "standard" | "express";

type CheckoutData = {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  notes: string;
  };

type CheckoutContextType = {
  delivery: DeliveryMethod;
  setDelivery: (value: DeliveryMethod) => void;

  checkoutData: CheckoutData;
  setCheckoutData: React.Dispatch<
    React.SetStateAction<CheckoutData>
  >;

  // NEW
  resetCheckout: () => void;
};

const CheckoutContext = createContext<
  CheckoutContextType | undefined
>(undefined);

export function CheckoutProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [delivery, setDelivery] =
    useState<DeliveryMethod>("standard");

  const [checkoutData, setCheckoutData] =
    useState<CheckoutData>({
      fullName: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      province: "Punjab",
      postalCode: "",
      notes: "",
     
    });

  // NEW FUNCTION
  const resetCheckout = () => {
    setCheckoutData({
      fullName: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      province: "Punjab",
      postalCode: "",
      notes: "",
      
    });

    setDelivery("standard");
  };

  return (
    <CheckoutContext.Provider
      value={{
        delivery,
        setDelivery,
        checkoutData,
        setCheckoutData,
        resetCheckout, // NEW
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);

  if (!context) {
    throw new Error(
      "useCheckout must be used inside CheckoutProvider"
    );
  }

  return context;
}