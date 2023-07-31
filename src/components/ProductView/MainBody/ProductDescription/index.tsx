import { FC } from "react";
import Description from "./Description";

const ProductDescription: FC = () => {
  return (
    <div className="mt-[92px]">
      <div className="flex gap-5 border-b border-[#46A358] pb-[5px]">
        <h3 className="cursor-pointer hover:text-[#46A358]">
          Product Description
        </h3>
        <h3 className="cursor-pointer hover:text-[#46A358]">Reviews (19)</h3>
      </div>
      <Description />
    </div>
  );
};

export default ProductDescription;
