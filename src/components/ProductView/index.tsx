import { FC } from "react";
import useBreadCrumbAPI from "../../generic/BreadCrumb";
import MainBody from "./MainBody";

const ProductView: FC = () => {
  const { ProductViewCrumb } = useBreadCrumbAPI();

  return (
    <div className="mt-3">
      <ProductViewCrumb />
      <MainBody />
    </div>
  );
};

export default ProductView;
