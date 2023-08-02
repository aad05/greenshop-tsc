import { FC } from "react";
import useBreadCrumbAPI from "../../generic/BreadCrumb";
import Products from "./Products";
import CardTotal from "./CardTotal";
import RelatedProducts from "../RelatedProducts";

const ProductCard: FC = () => {
  const breadCrumb = useBreadCrumbAPI();
  return (
    <div className="mt-[12px]">
      {breadCrumb("product_card")}
      <div className="flex justify-between gap-9 max-lg:flex-col mt-[50px]">
        <Products />
        <CardTotal />
      </div>
      <RelatedProducts />
    </div>
  );
};

export default ProductCard;
