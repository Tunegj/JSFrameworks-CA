import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 text-center">
      <p className="font-semibold text-green-700">404</p>
      <h1 className="mt-2 text-3xl font-bold text-gray-900">Page Not Found</h1>

      <p className="mt-4 text-gray-600">
        Sorry, we couldn't find the page you're looking for.
      </p>

      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center rounded-md bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
      >
        Continue Shopping
      </Link>
    </main>
  );
}
