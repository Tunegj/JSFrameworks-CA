interface LoadingSpinnerProps {
  text: string;
}

export function LoadingSpinner({ text }: LoadingSpinnerProps) {
  return (
    <div
      className="flex min-h-64 flex-col items-center justify-center gap-4"
      role="status"
      aria-live="polite"
    >
      <div
        aria-hidden="true"
        className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-gray-700"
      ></div>
      <p>{text}</p>
    </div>
  );
}
