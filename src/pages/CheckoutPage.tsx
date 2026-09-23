import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/formatPrice";

export function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  function handleCheckout() {
    clearCart();
    navigate("/checkout-success");
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Checkout</h1>

      {cartItems.length === 0 ? (
        <div>
          <p className="text-gray-600">Your cart is empty.</p>
          <Link
            to="/"
            className="mt-4 inline-block font-medium text-green-700 hover:underline"
          >
            Continue shopping
          </Link>
        </div>
      ) : (
        <>
          <h2 className="mb-6 text-2xl font-semibold">Order Summary</h2>
          <div className="grid gap-4">
            {cartItems.map((item) => (
              <article
                key={item.product.id}
                className="flex items-center gap-4 border-b border-gray-200 pb-4"
              >
                <img
                  src={item.product.image.url}
                  alt={item.product.image.alt}
                  className="h-20 w-20 shrink-0 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.product.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                </div>

                <p className="font-medium">
                  {formatPrice(item.product.discountedPrice * item.quantity)}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 flex justify-between border-t border-gray-200 pt-6 text-xl font-bold">
            <span>Total</span>
            <span>{formatPrice(cartTotal)}</span>
          </div>
          <button
            type="button"
            onClick={handleCheckout}
            className="mt-6 w-full rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 sm:ml-auto sm:block sm:w-fit"
          >
            Complete Checkout
          </button>
        </>
      )}
    </main>
  );
}
