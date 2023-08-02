import { FC } from "react";
import useBreadCrumbAPI from "../../generic/BreadCrumb";
import BillingAddress from "./BillingAddress";
import Order from "./Order";
import RelatedProducts from "../RelatedProducts";

const ProductCheckout: FC = () => {
  const breadCrumb = useBreadCrumbAPI();

  return (
    <div className="mt-[30px]">
      {breadCrumb("product_checkout")}
      <div className="mt-[30px] flex gap-9 max-md:flex-col">
        <BillingAddress />
        <Order />
      </div>
      <RelatedProducts />
    </div>
  );
};

export default ProductCheckout;
