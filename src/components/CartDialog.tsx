import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/formatPrice";

interface CartDialogProps {
  onClose: () => void;
}

export const CartDialog = forwardRef<HTMLDialogElement, CartDialogProps>(
  function CartDialog({ onClose }, ref) {
    const {
      cartItems,
      cartTotal,
      increaseQuantity,
      decreaseQuantity,
      removeFromCart,
    } = useCart();

    return (
      <dialog
        ref={ref}
        aria-labelledby="cart-dialog-heading"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            onClose();
          }
        }}
        className="m-auto w-full max-w-md rounded-xl p-0 backdrop:bg-black/40"
      >
        <div className="relative p-6">
          <form method="dialog" className="absolute right-4 top-4">
            <button
              type="submit"
              aria-label="Close cart"
              className="rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              X
            </button>
          </form>
          <h2 id="cart-dialog-heading" className="pr-10 text-2xl font-bold">
            Your Cart
          </h2>

          {cartItems.length === 0 ? (
            <p className="mt-6 text-gray-600">Your cart is empty.</p>
          ) : (
            <>
              <div className="mt-6 grid max-h-80 gap-4 overflow-y-auto">
                {cartItems.map((item) => (
                  <article
                    key={item.product.id}
                    className="border-b border-gray-200 pb-4 mt-6"
                  >
                    <div className="flex gap-4">
                      <img
                        src={item.product.image.url}
                        alt={item.product.image.alt}
                        className="h-20 w-20 shrink-0 rounded-lg object-cover"
                      />

                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold">
                          <Link
                            to={`/product/${item.product.id}`}
                            onClick={onClose}
                            className="rounded hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
                          >
                            {item.product.title}
                          </Link>
                        </h3>
                        <p className="mt-1 text-sm font-medium">
                          {formatPrice(item.product.discountedPrice)}
                        </p>

                        <div className="mt-3 flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => decreaseQuantity(item.product.id)}
                            className="rounded border border-gray-300 px-2 py-1 cursor-pointer"
                            aria-label={`Decrease quantity of ${item.product.id}`}
                          >
                            -
                          </button>

                          <span aria-label="Quantity">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => increaseQuantity(item.product.id)}
                            className="rounded border border-gray-300 px-2 py-1 cursor-pointer"
                            aria-label={`Increase quantity of ${item.product.id}`}
                          >
                            +
                          </button>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.product.id)}
                            className="ml-auto text-sm font-medium text-red-700 cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-6 border-t border-gray-200 pt-4">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <Link
                    to="/cart"
                    onClick={onClose}
                    className="rounded-lg border border-green-700 px-4 py-2 text-center font-semibold text-green-700"
                  >
                    View Cart
                  </Link>
                  <Link
                    to="/checkout"
                    onClick={onClose}
                    className="rounded-lg bg-green-700 px-4 py-2 text-center font-semibold text-white"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </dialog>
    );
  },
);
