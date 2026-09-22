import type { ProductReview } from "../types/product";

interface ReviewCardProps {
  review: ProductReview;
}

export function ReviewCard({ review }: ReviewCardProps) {
  const initials = review.username
    .split(" ")
    .map((name) => name.charAt(0))
    .join("")
    .toUpperCase();

  return (
    <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 font-semibold text-green-800"
          aria-hidden="true"
        >
          {initials}
        </div>
        <div>
          <h3 className="font-semibold text-lg">{review.username}</h3>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-green-700" aria-hidden="true">
              {"★".repeat(review.rating)}
              <span className="text-gray-300">
                {"★".repeat(5 - review.rating)}
              </span>
            </span>

            <span className="text-sm text-gray-600">{review.rating} /5</span>
          </div>
        </div>
      </div>
      <p className="mt-3 text-gray-700">{review.description}</p>
    </article>
  );
}
