import { useState, useEffect } from "react";
import type { Product } from "../types/product";
import { fetchProducts } from "../api/products";
import { ProductCard } from "../components/ProductCard.tsx";
import { LoadingSpinner } from "../components/LoadingSpinner.tsx";

export function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch {
        setError("Failed to load products. Please try again");
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-center">Online Shop</h1>
      {isLoading && <LoadingSpinner />}
      {error && <p>{error}</p>}
      {products.length === 0 && !isLoading && !error && (
        <p>No products available</p>
      )}
      {!isLoading && !error && products.length !== 0 && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      )}
    </main>
  );
}
