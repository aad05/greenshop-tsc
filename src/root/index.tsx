import type { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Navbar from "../components/Navbar";
import ProductView from "../pages/product_view";
import ProductCard from "../pages/product_card";
import ProductCheckout from "../pages/product_checkout";
import Profile from "../components/Profile";

const Root: FC = () => {
  return (
    <Routes>
      <Route element={<Navbar />} path="/">
        <Route index element={<Home />} />
        <Route path="/shop/:category/:_id" element={<ProductView />} />
        <Route path="/product-card" element={<ProductCard />} />
        <Route path="/product-checkout" element={<ProductCheckout />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default Root;
