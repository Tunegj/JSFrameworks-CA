import type { Product } from "../types/product";
import type { CartItem } from "../types/cart";
import { useState, useEffect } from "react";
import type { CartProviderProps } from "./CartContext";
import { CartContext } from "./CartContext";

function getInitialCart(): CartItem[] {
  const savedCart = localStorage.getItem("cart");

  if (!savedCart) {
    return [];
  }

  return JSON.parse(savedCart);
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(getInitialCart);

  const cartTotal = cartItems.reduce((total, item) => {
    return total + item.product.discountedPrice * item.quantity;
  }, 0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(product: Product) {
    const existingItem = cartItems.find(
      (item) => item.product.id === product.id,
    );

    if (existingItem) {
      setCartItems(
        cartItems.map((item) => {
          if (item.product.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
      );
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  }

  function removeFromCart(productId: string) {
    setCartItems(cartItems.filter((item) => item.product.id !== productId));
  }

  function increaseQuantity(productId: string) {
    setCartItems(
      cartItems.map((item) => {
        if (item.product.id === productId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      }),
    );
  }

  function decreaseQuantity(productId: string) {
    setCartItems(
      cartItems
        .map((item) => {
          if (item.product.id === productId) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        })
        .filter((item) => item.quantity > 0),
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
