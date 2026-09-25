import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useRef } from "react";
import { CartDialog } from "./CartDialog";
import { Toast } from "./Toast";

export function Header() {
  const { cartItems } = useCart();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  function closeCart() {
    dialogRef.current?.close();
  }

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4"
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-sm focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:outline-none"
            aria-label="Nook home"
          >
            <span
              aria-hidden="true"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-700 text-lg font-bold text-white"
            >
              N
            </span>

            <span className="text-2xl font-bold tracking-tight text-gray-900">
              Nook<span className="text-green-700">.</span>
            </span>
          </Link>

          <ul className="flex items-center gap-6">
            <li>
              <Link
                to="/"
                className="rounded-sm font-medium text-gray-700 transition hover:text-green-700 focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="rounded-sm font-medium text-gray-700 transition hover:text-green-700 focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <button
          type="button"
          onClick={() => dialogRef.current?.showModal()}
          aria-label={`Open cart, ${cartCount} ${cartCount === 1 ? "item" : "items"}`}
          className="flex items-center gap-2 rounded-lg px-3 py-2 font-medium text-gray-700 transition hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          Cart
          <span
            aria-hidden="true"
            className="flex h-6 min-w-6 items-center justify-center rounded-full bg-green-700 px-1.5 text-xs font-semibold text-white"
          >
            {cartCount}
          </span>
        </button>
      </nav>

      <CartDialog ref={dialogRef} onClose={closeCart} />
      <Toast />
    </header>
  );
}
