"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

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

const CART_STORAGE_KEY = "rn-botanics-cart";

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage when the app starts
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);

      if (savedCart) {
        const parsedCart: CartItem[] = JSON.parse(savedCart);
        setCart(parsedCart);
      }
    } catch (error) {
      console.error("Failed to load cart:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save cart whenever it changes
  useEffect(() => {
    if (!isLoaded) return;

    try {
      localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(cart)
      );
    } catch (error) {
      console.error("Failed to save cart:", error);
    }
  }, [cart, isLoaded]);

  // Add product to cart
  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find(
        (i) =>
          i.id === item.id &&
          i.cap === item.cap
      );

      if (existing) {
        return prev.map((i) =>
          i.id === item.id &&
          i.cap === item.cap
            ? {
                ...i,
                quantity:
                  i.quantity + item.quantity,
              }
            : i
        );
      }

      return [...prev, item];
    });
  };

  // Remove product
  const removeFromCart = (
    id: number,
    cap: CartItem["cap"]
  ) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(
            item.id === id &&
            item.cap === cap
          )
      )
    );
  };

  // Increase quantity
  const increaseQuantity = (
    id: number,
    cap: CartItem["cap"]
  ) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id &&
        item.cap === cap
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (
    id: number,
    cap: CartItem["cap"]
  ) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id &&
          item.cap === cap
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        )
    );
  };

  // Clear cart after successful order
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem(CART_STORAGE_KEY);
  };

  const cartCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
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