import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/formatPrice";

export function CartPage() {
  const {
    cartItems,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  return (
    <main>
      <h1>CART</h1>
    </main>
  );
}
