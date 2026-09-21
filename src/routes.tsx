import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:productId" element={<ProductDetailsPage />} />
    </Routes>
  );
}
