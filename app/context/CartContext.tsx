"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type ProductType =
  | "oil"
  | "shampoo"
  | "comb"
  | "bundle";

  
export type CartItem = {
  id: string | number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  type: ProductType;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string | number) => void;
  increaseQuantity: (id: string | number) => void;
  decreaseQuantity: (id: string | number) => void;
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

  // Load cart from localStorage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);

      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);

        // Clean/migrate existing cart data
        const cleanedCart: CartItem[] = parsedCart.map(
          (item: CartItem) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: item.quantity,
            type: item.type || "oil",
          })
        );

        setCart(cleanedCart);
      }
    } catch (error) {
      console.error("Failed to load cart:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save cart to localStorage
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
        (cartItem) => cartItem.id === item.id
      );

      if (existing) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity:
                  cartItem.quantity + item.quantity,
              }
            : cartItem
        );
      }

      return [...prev, item];
    });
  };

  // Remove product
  const removeFromCart = (id: string | number) => {
    setCart((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // Increase quantity
  const increaseQuantity = (id: string | number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id: string | number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Clear cart after successful order
  const clearCart = () => {
    setCart([]);

    try {
      localStorage.removeItem(CART_STORAGE_KEY);
    } catch (error) {
      console.error("Failed to clear cart:", error);
    }
  };

  // Total number of products in cart
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