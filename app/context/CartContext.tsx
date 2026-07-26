"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  cap: "Nozzle Applicator Cap" | "Flip Top Cap";
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number, cap: CartItem["cap"]) => void;
  increaseQuantity: (id: number, cap: CartItem["cap"]) => void;
  decreaseQuantity: (id: number, cap: CartItem["cap"]) => void;
  clearCart: () => void;
  cartCount: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find(
        (i) => i.id === item.id && i.cap === item.cap
      );

      if (existing) {
        return prev.map((i) =>
          i.id === item.id && i.cap === item.cap
            ? {
                ...i,
                quantity: i.quantity + item.quantity,
              }
            : i
        );
      }

      return [...prev, item];
    });
  };

  const removeFromCart = (
    id: number,
    cap: CartItem["cap"]
  ) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.id === id && item.cap === cap)
      )
    );
  };

  const increaseQuantity = (
    id: number,
    cap: CartItem["cap"]
  ) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.cap === cap
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (
    id: number,
    cap: CartItem["cap"]
  ) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id && item.cap === cap
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}