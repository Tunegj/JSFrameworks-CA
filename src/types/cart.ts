import type { Product } from "./product";

interface CartItem {
  product: Product;
  quantity: number;
}

export type { CartItem };
