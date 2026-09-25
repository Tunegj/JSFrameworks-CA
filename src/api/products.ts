import type {
  ProductsResponse,
  Product,
  ProductByIdResponse,
} from "../types/product";

const API_URL = "https://v2.api.noroff.dev/online-shop";

/**
 * Fetches all products from the online shop API.
 * @returns a promise that resolves to an array of products.
 * @throws An error if the request is unsuccessful.
 */
export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const result: ProductsResponse = await response.json();
  return result.data;
}

/**
 * Fetches a single product by its ID
 * @param id - The ID of the product to fetch
 * @returns A promise that resolves to the requested product.
 * @throws An error if the request is unsuccessful
 */
export async function fetchProductById(id: string): Promise<Product> {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  const result: ProductByIdResponse = await response.json();
  return result.data;
}
