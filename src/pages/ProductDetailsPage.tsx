import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { Product } from "../types/product";
import { fetchProductById } from "../api/products";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { formatPrice } from "../utils/formatPrice";
import { ReviewCard } from "../components/ReviewCard";

export function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const hasDiscount =
    product !== null && product.discountedPrice < product.price;

  useEffect(() => {
    async function loadProduct() {
      if (!productId) {
        setError("Product not found.");
        setIsLoading(false);
        return;
      }

      try {
        const fetchedProduct = await fetchProductById(productId);
        setProduct(fetchedProduct);
      } catch {
        setError("Failed to load product, please try again.");
      } finally {
        setIsLoading(false);
      }
    }
    loadProduct();
  }, [productId]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      {isLoading && <LoadingSpinner />}
      {error && <p>{error}</p>}
      {!isLoading && !error && product && (
        <>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 ">
            <img
              src={product.image.url}
              alt={product.image.alt}
              className="aspect-square w-full object-cover rounded-lg"
            />
            <div className="flex flex-col">
              <h1 className="my-4 text-4xl font-bold">{product.title}</h1>
              {product.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => {
                    return (
                      <span
                        key={tag}
                        className="rounded-full bg-green-200 px-2 py-1 text-sm font-medium text-green-700"
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              )}

              <p className="my-4 text-gray-700 text-xl">
                {product.description}
              </p>

              {hasDiscount ? (
                <div className="my-6 flex items-center gap-3">
                  <p className="text-lg text-gray-500 line-through">
                    {formatPrice(product.price)}
                  </p>
                  <p className="text-2xl font-bold text-green-700">
                    {formatPrice(product.discountedPrice)}
                  </p>
                </div>
              ) : (
                <p className="my-6 text-2xl font-bold">
                  {formatPrice(product.price)}
                </p>
              )}

              <button
                type="button"
                className="mt-2 w-full rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 sm:w-auto"
              >
                Add to Cart
              </button>
            </div>
          </div>

          <section
            className="mt-12 border-t border-gray-200 pt-8"
            aria-labelledby="reviews-heading"
          >
            <h2 id="reviews-heading" className="text-3xl font-bold">
              Reviews for {product.title}
            </h2>

            {product.reviews.length > 0 && (
              <>
                <div className="mt-3 flex items-center gap-3">
                  <span className="text-xl text-green-700" aria-hidden="true">
                    ★
                  </span>

                  <p className="text-lg font-semibold">{product.rating} / 5</p>
                </div>

                <p className="mt-1 text-sm text-gray-600">
                  Based on {product.reviews.length}{" "}
                  {product.reviews.length === 1 ? "review" : "reviews"}
                </p>

                <div className="mt-6 grid gap-4">
                  {product.reviews.map((review) => {
                    return <ReviewCard key={review.id} review={review} />;
                  })}
                </div>
              </>
            )}

            {product.reviews.length === 0 && (
              <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-lg font-semibold">No reviews yet</h3>

                <p className="mt-1 text-gray-600">No reviews yet.</p>
              </div>
            )}
          </section>
        </>
      )}
    </main>
  );
}
