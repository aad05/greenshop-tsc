import { FC } from "react";
import { useLoader } from "../../../../../../generic/Loader";
import { MainCardType } from "../../../../../../@types";
import { useAuthDecider } from "../../../../../../tools/authDecider";
import { useReduxDispatch } from "../../../../../../hooks/useRedux";
import { setAuthModalVisibility } from "../../../../../../redux/modalSlice";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { addDataToShopping } from "../../../../../../redux/shoppingSlice";

type CardType = {
  value: MainCardType;
  clickNavigator: () => any;
};

const Card: FC<CardType> = ({ value, clickNavigator }) => {
  const dispatch = useReduxDispatch();
  const { auth_decider_func } = useAuthDecider();
  const { IconAndImageBasedLoader } = useLoader();

  return (
    <div className="">
      <div className="group h-[300px] bg-[#f5f5f5] flex justify-center items-center relative">
        {value?.discount && (
          <div className="bg-[#46A358] text-white absolute top-3 left-0 px-[5px] py-[3px]">
            13% OFF
          </div>
        )}
        <IconAndImageBasedLoader
          type="image"
          src={value.main_image ?? ""}
          alt="img"
          className="w-4/5"
        />
        <div className="hidden absolute inset-x-auto bottom-2 gap-4 group-hover:flex">
          <div
            onClick={() => {
              dispatch(addDataToShopping(value));
            }}
            className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]"
          >
            <ShoppingCartOutlined />
          </div>
          <div
            onClick={() =>
              auth_decider_func({
                withoutAuth: () =>
                  dispatch(
                    setAuthModalVisibility({ open: true, loading: false }),
                  ),
              })
            }
            className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer text-[20px]"
          >
            <HeartOutlined />
          </div>
          <div
            className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]"
            onClick={clickNavigator}
          >
            <SearchOutlined />
          </div>
        </div>
      </div>
      <h3
        className="font-normal cursor-pointer mt-[12px]"
        onClick={clickNavigator}
      >
        {value.title}
      </h3>
      <p className="text-[#46A358] font-bold">
        ${value.price}
        {value?.discount && (
          <span className="font-thin text-[#A5A5A5] ml-[5px] line-through">
            $229.00
          </span>
        )}
      </p>
    </div>
  );
};

export default Card;
