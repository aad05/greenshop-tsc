import { FC } from "react";
import {
  HeartFilled,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { MainCardType } from "../../../../../@types";
import { useLoader } from "../../../../../generic/Loader";

const Card: FC<MainCardType> = ({
  category,
  _id,
  main_image,
  price,
  title,
}) => {
  const navigate = useNavigate();
  const { IconAndImageBasedLoader } = useLoader();

  return (
    <div className="">
      <div className="group h-[300px] bg-[#f5f5f5] flex justify-center items-center relative">
        {false && (
          <div className="bg-[#46A358] text-white absolute top-3 left-0 px-[5px] py-[3px]">
            13% OFF
          </div>
        )}
        <IconAndImageBasedLoader
          type="image"
          src={String(main_image)}
          alt="img"
          className="w-4/5"
        />
        <div className="hidden absolute inset-x-auto bottom-2 gap-4 group-hover:flex">
          <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer">
            <ShoppingCartOutlined />
          </div>
          <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer">
            <HeartFilled className="text-[red]" />
          </div>
          <div
            onClick={() => navigate(`/shop/${category}/${_id}`)}
            className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer"
          >
            <SearchOutlined />
          </div>
        </div>
      </div>
      <h3 className="font-normal cursor-pointer mt-[12px]">{title}</h3>
      <p className="text-[#46A358] font-bold">
        ${price}
        {false && (
          <span className="font-thin text-[#A5A5A5] ml-[5px] line-through">
            $229.00
          </span>
        )}
      </p>
    </div>
  );
};

export default Card;
