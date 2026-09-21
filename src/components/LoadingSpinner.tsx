export function LoadingSpinner() {
  return (
    <div
      className="flex min-h-64 flex-col items-center justify-center gap-4"
      role="status"
      aria-live="polite"
    >
      <div className="h-10 w-10 rounded-full border-4 border-gray-200 border-t-gray-700 animate-spin"></div>
      <p>Loading products...</p>
    </div>
  );
}
