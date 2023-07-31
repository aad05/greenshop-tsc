import type { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Navbar from "../components/Navbar";
import ProductView from "../pages/product_view";

const Root: FC = () => {
  return (
    <Routes>
      <Route element={<Navbar />} path="/">
        <Route index element={<Home />} />
        <Route path={"/shop/:category/:product_id"} element={<ProductView />} />
      </Route>
    </Routes>
  );
};

export default Root;
