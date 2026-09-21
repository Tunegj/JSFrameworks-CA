import { useState, useEffect } from "react";
import type { Product } from "../types/product";
import { fetchProducts } from "../api/products";

export function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    }

    loadProducts();
  }, []);

  return (
    <main>
      <h1>Online Shop</h1>
      <p>{products.length} products loaded</p>
    </main>
  );
}
