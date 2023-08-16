import { FC } from "react";
import Product from "./Product";

const MyProducts: FC = () => {
  return (
    <div className="w-full">
      <div className="pb-[11px] border-b border-[#46A35880] flex max-lg:hidden">
        <h3 className="w-[40%]">Products</h3>
        <h3 className="w-[20%]">Price</h3>
        <h3 className="w-[20%]">Quantity</h3>
        <h3 className="w-[20%]">Total</h3>
      </div>
      <div className="flex flex-col gap-3">
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default MyProducts;
