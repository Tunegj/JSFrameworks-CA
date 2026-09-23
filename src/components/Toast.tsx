import { useEffect } from "react";
import { useCart } from "../hooks/useCart";

export function Toast() {
  const { toastMessage, clearToast } = useCart();

  useEffect(() => {
    if (!toastMessage) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      clearToast();
    }, 3000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [toastMessage, clearToast]);

  if (!toastMessage) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed right-4 top-4 z-50 rounded-lg bg-gray-900 px-4 py-3 text-white shadow-lg"
    >
      {toastMessage}
    </div>
  );
}
