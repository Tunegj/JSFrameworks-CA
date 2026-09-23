import { Link } from "react-router-dom";

export function CheckoutSuccessPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 text-center">
      <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <div
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700"
          aria-hidden="true"
        >
          ✓
        </div>
        <h1 className="mt-6 text-3xl font-bold">Order successful!</h1>

        <p className="mt-4 text-gray-600">
          Thank you for your order. Your checkout has been completed
          successfully.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
        >
          Continue Shopping
        </Link>
      </div>
    </main>
  );
}
