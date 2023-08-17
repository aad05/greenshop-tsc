import { FC } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { useLoader } from "../../../../generic/Loader";
import { MainCardType } from "../../../../@types";
import { useReduxDispatch } from "../../../../hooks/useRedux";
import {
  decreaseCountFromShopping,
  increaseCountFromShopping,
} from "../../../../redux/shoppingSlice";

const Card: FC<MainCardType> = ({ title, _id, price, count, main_image }) => {
  const dispatch = useReduxDispatch();
  const { IconAndImageBasedLoader } = useLoader();
  return (
    <div className="bg-[#FBFBFB] h-[70px] w-full flex">
      <div className="w-[40%] flex items-center gap-2">
        <IconAndImageBasedLoader
          type={"image"}
          src={String(main_image)}
          alt={String(title)}
          className="w-[70px] h-[70px]"
        />
        <div>
          <h3>{title}</h3>
          <p className="font-light text-[14px]">SKU: {_id}</p>
        </div>
      </div>
      <div className="w-[20%] flex items-center text-[#727272]">${price}</div>
      <div className="w-[20%] flex items-center">
        <div className="flex gap-3">
          <button
            onClick={() => dispatch(decreaseCountFromShopping({ _id }))}
            className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white"
          >
            -
          </button>
          <h3 className="font-medium text-[18px]">{count}</h3>
          <button
            onClick={() => dispatch(increaseCountFromShopping({ _id }))}
            className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white"
          >
            +
          </button>
        </div>
      </div>
      <div className="w-[20%] flex items-center justify-between pr-[10px]">
        <h3>${Number(Number(price) * Number(count)).toFixed(2)}</h3>
        <DeleteOutlined className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Card;
