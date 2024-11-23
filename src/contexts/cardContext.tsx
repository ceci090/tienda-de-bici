
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Definir el tipo de producto
interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

// Definir el tipo del contexto, agregar, eliminar, etc
interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const productIndex = prev.findIndex((item) => item.id === product.id);
      if (productIndex >= 0) {
        const updatedCart = [...prev];
        updatedCart[productIndex].quantity += product.quantity;
        return updatedCart;
      } else {
        return [...prev, product];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCart((prev) => {
      const updatedCart = [...prev];
      const productIndex = updatedCart.findIndex((item) => item.id === productId);
      if (productIndex >= 0) {
        updatedCart[productIndex].quantity = quantity;
      }
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
