import { FC } from "react";
import Card from "./Card";

const RelatedProducts: FC = () => {
  return (
    <div className="my-[120px]">
      <h3 className="font-bold text-[#46A358] border-b border-[#46A35880] pb-[5px]">
        Related Products
      </h3>
      <div className="mt-[30px] grid grid-cols-5 gap-4 max-xl:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default RelatedProducts;
