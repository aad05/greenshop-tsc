import { FC, useState } from "react";
import Description from "./Description";
import { Product } from "../../../../@types";
import Reviews from "./Reviews";

const ProductDescription: FC<Product> = (props) => {
  const [active, setActive] = useState<"description" | "reviews">(
    "description",
  );
  return (
    <div className="mt-[92px]">
      <div className="flex gap-5 border-b border-[#46A358] pb-[5px]">
        <h3
          className={`cursor-pointer hover:text-[#46A358] ${
            active === "description" && "text-[#46A358]"
          }`}
          onClick={() => setActive("description")}
        >
          Product Description
        </h3>
        <h3
          className={`cursor-pointer hover:text-[#46A358] ${
            active === "reviews" && "text-[#46A358]"
          }`}
          onClick={() => setActive("reviews")}
        >
          Reviews ({props.data?.comments?.length ?? "0"})
        </h3>
      </div>
      {active === "description" ? <Description {...props} /> : <Reviews />}
    </div>
  );
};

export default ProductDescription;
