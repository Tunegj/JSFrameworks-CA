import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export function Header() {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify between px-4 py-4"
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold text-green-700">
            Logo
          </Link>

          <ul className="flex items-center gap-6">
            <li>
              <Link
                to="/"
                className="font-medium text-gray-700 transition hover:text-green-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="font-medium text-gray-700 transition hover:text-green-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 rounded-lg px-3 py-2 font-medium text-gray-700 transition hover:bg-gray-100"
        >
          Cart
          <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-green-700 px-1.5 text-xs font-semibold text-white">
            {cartCount}
          </span>
        </button>
      </nav>
    </header>
  );
}
