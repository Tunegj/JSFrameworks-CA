import type { Product } from "../types/product";
import { formatPrice } from "../utils/formatPrice";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.discountedPrice < product.price;
  const discountPercentage = Math.round(
    ((product.price - product.discountedPrice) / product.price) * 100,
  );

  return (
    <article className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2">
      <Link
        to={`/product/${product.id}`}
        className="block focus-visible:outline-none"
      >
        <img
          src={product.image.url}
          alt={product.image.alt}
          className="aspect-square w-full object-cover"
        />
        {hasDiscount && (
          <span className="absolute top-3 right-3 rounded-full bg-red-100 px-2 py-1 text-sm font-medium text-red-700">
            {discountPercentage}% off
          </span>
        )}

        <div className="p-4">
          <h2 className="text-lg font-semibold">{product.title}</h2>

          <div className="mt-3 flex items-center gap-2">
            {hasDiscount ? (
              <>
                <p className="text-sm text-gray-500 line-through">
                  {formatPrice(product.price)}
                </p>
                <p className="font-semibold">
                  {formatPrice(product.discountedPrice)}
                </p>
              </>
            ) : (
              <p className="font-semibold">{formatPrice(product.price)}</p>
            )}
          </div>

          {product.reviews.length > 0 && (
            <p className="mt-2 text-sm text-gray-600">★ {product.rating} / 5</p>
          )}
        </div>
      </Link>
    </article>
  );
}
