import { FC } from "react";
import useBreadCrumbAPI from "../../generic/BreadCrumb";
import Products from "./Products";
import CardTotal from "./CardTotal";

const ProductCard: FC = () => {
  const { ProductCardCrumb } = useBreadCrumbAPI();
  return (
    <div className="mt-[12px]">
      <ProductCardCrumb />
      <div className="flex justify-between gap-9 max-lg:flex-col mt-[50px]">
        <Products />
        <CardTotal />
      </div>
    </div>
  );
};

export default ProductCard;
