import { FC } from "react";
import { useLoader } from "../../../generic/Loader";
import { DeleteOutlined } from "@ant-design/icons";

const Products: FC = () => {
  const { IconAndImageBasedLoader } = useLoader();
  return (
    <div className="w-[65%] max-lg:w-[100%]">
      <div className="pb-[11px] border-b border-[#46A35880] flex max-lg:hidden">
        <h3 className="w-[40%]">Products</h3>
        <h3 className="w-[20%]">Price</h3>
        <h3 className="w-[20%]">Quantity</h3>
        <h3 className="w-[20%]">Total</h3>
      </div>
      <div className="bg-[#FBFBFB] h-[70px] w-full mt-[11px] flex">
        <div className="w-[40%] flex items-center gap-2">
          <IconAndImageBasedLoader
            type={"image"}
            src=""
            alt=""
            className="w-[70px] h-[70px]"
          />
          <div>
            <h3>Barberton Daisy</h3>
            <p className="font-light text-[14px]">SKU: 1995751877966</p>
          </div>
        </div>
        <div className="w-[20%] flex items-center text-[#727272]">$119.00</div>
        <div className="w-[20%] flex items-center">
          <div className="flex gap-3">
            <button className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white">
              -
            </button>
            <h3 className="font-medium text-[18px]">0</h3>
            <button className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white">
              +
            </button>
          </div>
        </div>
        <div className="w-[20%] flex items-center justify-between pr-[10px]">
          <h3>$238.00</h3>
          <DeleteOutlined className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Products;
