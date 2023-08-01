import { FC } from "react";
import { useLoader } from "../../../../../../generic/Loader";
import { useAssets } from "../../../../../../hooks/useAssets";
import { MainCardType } from "../../../../../../@types";
import { useAuthDecider } from "../../../../../../tools/authDecider";
import { useReduxDispatch } from "../../../../../../hooks/useRedux";
import { setAuthModalVisibility } from "../../../../../../redux/modalSlice";

type CardType = {
  value: MainCardType;
  clickNavigator: () => any;
};

const Card: FC<CardType> = ({ value, clickNavigator }) => {
  const dispatch = useReduxDispatch();
  const { auth_decider_func } = useAuthDecider();
  const { search, basket, heart } = useAssets("icons");
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
          <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer">
            <IconAndImageBasedLoader src={basket} alt="basket" type="icon" />
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
            className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer"
          >
            <IconAndImageBasedLoader src={heart} alt="heart" type="icon" />
          </div>
          <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer">
            <IconAndImageBasedLoader
              onClick={clickNavigator}
              src={search}
              alt="search"
              type="icon"
            />
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
