import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/formatPrice";
import { Link } from "react-router-dom";

export function CartPage() {
  const {
    cartItems,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Your Cart</h1>

      {cartItems.length === 0 && (
        <>
          <p className="text-gray-600">Your cart is empty.</p>
          <Link
            to="/"
            className="mt-6 inline-block rounded-md bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
          >
            Go Shopping
          </Link>
        </>
      )}

      {cartItems.length > 0 && (
        <>
          <div className="grid gap-6">
            {cartItems.map((item) => (
              <article
                key={item.product.id}
                className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <img
                  src={item.product.image.url}
                  alt={item.product.image.alt}
                  className="h-28 w-28 shrink-0 rounded-lg object-cover"
                />

                <div className="flex flex-1 flex-col">
                  <h2 className="text-lg font-semibold">
                    <Link
                      to={`/product/${item.product.id}`}
                      className="rounded hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      {item.product.title}
                    </Link>
                  </h2>

                  <p className="mt-1 font-medium">
                    {formatPrice(item.product.discountedPrice)} each
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => decreaseQuantity(item.product.id)}
                      className="rounded border border-gray-300 px-3 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
                      aria-label={`Decrease quantity of ${item.product.title}`}
                    >
                      -
                    </button>
                    <span aria-label="Quantity">{item.quantity}</span>

                    <button
                      type="button"
                      onClick={() => increaseQuantity(item.product.id)}
                      className="rounded border border-gray-300 px-3 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
                      aria-label={`Increase quantity of ${item.product.title}`}
                    >
                      +
                    </button>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.product.id)}
                      className="ml-auto font-medium text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
                    >
                      Remove
                    </button>
                  </div>
                  <p className="font-semibold text-gray-900 mt-4">
                    Subtotal:{" "}
                    {formatPrice(item.product.discountedPrice * item.quantity)}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6">
            <div className="flex items-center justify-between text-xl font-bold">
              <span>Total</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Link
                to="/"
                className="text-center font-medium text-green-700 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:rounded-sm"
              >
                Continue Shopping
              </Link>

              <Link
                to="/checkout"
                className="mt-6 block w-full rounded-lg bg-green-700 px-6 py-3 text-center font-semibold text-white transition hover:bg-green-800 sm:ml-auto sm:w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 "
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
