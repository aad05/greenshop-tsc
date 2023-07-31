import { FC } from "react";
import { Product } from "../../../../@types";
import { Descriptions, Rate } from "antd";
import Button from "../../../../generic/Button";
import { useAssets } from "../../../../hooks/useAssets";
import { useLoader } from "../../../../generic/Loader";

const ProductInfo: FC<Product> = ({ className }) => {
  const { IconAndImageBasedLoader } = useLoader();
  const { heart } = useAssets("icons");
  return (
    <div className={`${className}`}>
      <h1 className="font-bold text-[28px]">Barberton Daisy</h1>
      <div className="flex justify-between">
        <h3 className="font-bold text-[#46A358] text-[22px]">$119.00</h3>
        <div className="flex gap-2 justify-center items-center font-light text-[12px]">
          <Rate /> <p>19 Customer Review</p>
        </div>
      </div>
      <div className="border border-[#46A35880] mt-[12px]" />
      <div className="mt-[12px]">
        <h3 className="font-medium text-[20px]">Short Description:</h3>
        <p className="font-light mt-[10px]">
          The ceramic cylinder planters come with a wooden stand to help elevate
          your plants off the ground. The ceramic cylinder planters come with a
          wooden stand to help elevate your plants off the ground.{" "}
        </p>
      </div>
      <div className="mt-[12px]">
        <h3 className="font-medium text-[20px]">Size:</h3>
        <div className="flex flex-col gap-3 mt-[12px]">
          <div className="flex gap-3">
            <button className="w-[28px] h-[28px] border border-[#EAEAEA] rounded-full hover:border-[#46A358] hover:text-[#46A358] transition-colors">
              S
            </button>
            <button className="w-[28px] h-[28px] border border-[#EAEAEA] rounded-full hover:border-[#46A358] hover:text-[#46A358] transition-colors">
              M
            </button>
            <button className="w-[28px] h-[28px] border border-[#EAEAEA] rounded-full hover:border-[#46A358] hover:text-[#46A358] transition-colors">
              L
            </button>
            <button className="w-[28px] h-[28px] border border-[#EAEAEA] rounded-full hover:border-[#46A358] hover:text-[#46A358] transition-colors">
              XL
            </button>
          </div>
          <div className="flex gap-3">
            <button className="w-[35px] h-[35px] bg-[#46A358] rounded-full text-white">
              -
            </button>
            <h3 className="font-medium text-[20px]">0</h3>
            <button className="w-[35px] h-[35px] bg-[#46A358] rounded-full text-white">
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex mt-[10px] gap-3">
        <Button className="w-[130px] h-[40px]">BUY NOW</Button>
        <Button className="w-[130px] h-[40px] bg-transparent border border-[#46A358] text-black">
          ADD TO CARD
        </Button>
        <Button className="w-[40px] h-[40px] bg-transparent border border-[#46A358] text-black">
          <IconAndImageBasedLoader type="icon" src={heart} alt="" />
        </Button>
      </div>
      <Descriptions className="mt-[12px]">
        <Descriptions.Item span={3} label="SKU">
          1231241312873
        </Descriptions.Item>
        <Descriptions.Item span={3} label="Categories">
          Potter Plants
        </Descriptions.Item>
        <Descriptions.Item span={3} label="Tags">
          Home, Garden, Plants
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default ProductInfo;
