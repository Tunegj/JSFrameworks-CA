import { useState, useEffect, useRef } from "react";
import type { Product } from "../types/product";
import { fetchProducts } from "../api/products";
import { ProductCard } from "../components/ProductCard.tsx";
import { LoadingSpinner } from "../components/LoadingSpinner.tsx";
import { Link } from "react-router-dom";

export function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const normalizedSearchQuery = searchQuery.trim().toLowerCase();

  const matchingProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(normalizedSearchQuery);
  });

  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!(event.target instanceof Node)) {
        return;
      }

      if (!searchRef.current?.contains(event.target)) {
        setIsSearchOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  useEffect(() => {
    async function loadProducts() {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch {
        setError("Failed to load products. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-center">Online Shop</h1>
      <div className="relative mx-auto mb-8 max-w-xl" ref={searchRef}>
        <label htmlFor="product-search" className="sr-only">
          Search Products
        </label>

        <input
          id="product-search"
          type="search"
          value={searchQuery}
          onChange={(event) => {
            setSearchQuery(event.target.value);
            setIsSearchOpen(true);
          }}
          onFocus={() => setIsSearchOpen(true)}
          placeholder="Search products..."
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-700"
        />
        {searchQuery.trim() !== "" && isSearchOpen && (
          <div className="absolute z-20 mt-2 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
            {matchingProducts.length > 0 ? (
              matchingProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  onClick={() => setIsSearchOpen(false)}
                  className="flex items-center gap-3 border-b border-gray-100 p-3 last:border-b-0 hover:bg-gray-100"
                >
                  <img
                    src={product.image.url}
                    alt=""
                    className="h-12 w-12 rounded object-cover"
                  />
                  <div>
                    <p className="font-medium">{product.title}</p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="p-4 text-gray-600">No products found.</p>
            )}
          </div>
        )}
      </div>
      {isLoading && <LoadingSpinner text="Loading products..." />}
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
