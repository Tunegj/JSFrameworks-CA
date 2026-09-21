import { useParams } from "react-router-dom";

export function ProductDetailsPage() {
  const { productId } = useParams();
  return (
    <>
      <h1>Product Page</h1>
      <div>Product: {productId}</div>
    </>
  );
}
