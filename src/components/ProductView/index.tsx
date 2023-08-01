import { FC } from "react";
import useBreadCrumbAPI from "../../generic/BreadCrumb";
import MainBody from "./MainBody";

const ProductView: FC = () => {
  const breadCrumb = useBreadCrumbAPI();

  return (
    <div className="mt-3">
      {breadCrumb("product_view")}
      <MainBody />
    </div>
  );
};

export default ProductView;
