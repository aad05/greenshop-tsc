import { FC } from "react";
import useBreadCrumbAPI from "../../generic/BreadCrumb";
import BillingAddress from "./BillingAddress";
import Order from "./Order";

const ProductCheckout: FC = () => {
  const breadCrumb = useBreadCrumbAPI();

  return (
    <div className="mt-[30px]">
      {breadCrumb("product_checkout")}
      <div className="mt-[30px] flex gap-9 max-md:flex-col">
        <BillingAddress />
        <Order />
      </div>
    </div>
  );
};

export default ProductCheckout;
