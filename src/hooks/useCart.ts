import { useContext } from "react";
import { CartContext } from "../context/CartContext";

/**
 * Provides access to the cart context.
 * @throws An error if used outside CartProvider.
 */
export function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
