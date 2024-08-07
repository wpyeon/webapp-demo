import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import MainPage from "./pages/MainPage";

export default function RouteTest() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}
