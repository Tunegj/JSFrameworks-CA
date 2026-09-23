import type { Product } from "../types/product";
import type { CartItem } from "../types/cart";
import type { ReactNode } from "react";
import { createContext } from "react";

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  clearCart: () => void;
  cartTotal: number;
  toastMessage: string | null;
  clearToast: () => void;
}

export interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);
