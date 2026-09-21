interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: ProductImage;
  rating: number;
  tags: string[];
  reviews: ProductReview[];
}

interface ProductImage {
  url: string;
  alt: string;
}

interface ProductReview {
  id: string;
  username: string;
  rating: number;
  description: string;
}

interface Meta {
  isFirstPage: boolean;
  isLastPage: boolean;
  currentPage: number;
  previousPage: number | null;
  nextPage: number | null;
  pageCount: number;
  totalCount: number;
}

interface ProductsResponse {
  data: Product[];
  meta: Meta;
}

interface ProductByIdResponse {
  data: Product;
}

export type { Product, ProductsResponse, ProductByIdResponse };
