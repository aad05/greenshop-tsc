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
  HeartFilled,
} from "@ant-design/icons";
import { addDataToShopping } from "../../../../../../redux/shoppingSlice";
import { useNotificationAPI } from "../../../../../../generic/NotificationAPI";
import { useAuthUser } from "react-auth-kit";
import { useHandler } from "../../../../../../generic/Handlers";
import { useAppSearchParams } from "../../../../../../hooks/useSearchParams";

type CardType = {
  value: MainCardType;
  clickNavigator: () => any;
};

const Card: FC<CardType> = ({ value, clickNavigator }) => {
  const { getParams } = useAppSearchParams();
  const { likeHandler } = useHandler();
  const auth = useAuthUser();
  const notify = useNotificationAPI();
  const dispatch = useReduxDispatch();
  const { auth_decider_func } = useAuthDecider();
  const { IconAndImageBasedLoader } = useLoader();

  const foundData = auth()?.wishlist.find(
    (v: { flower_id: string }) => v?.flower_id === value._id,
  );

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
              notify("added_to_shopping_cart");
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
                withAuth: () =>
                  likeHandler({
                    category: getParams("category"),
                    main_flower_data: value,
                  }),
              })
            }
            className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer text-[20px]"
          >
            {foundData?.flower_id === value._id ? (
              <HeartFilled className="text-[red]" />
            ) : (
              <HeartOutlined />
            )}
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
        ${value?.discount ? value.discount_price : value.price}
        {value?.discount && (
          <span className="font-thin text-[#A5A5A5] ml-[5px] line-through">
            ${value.price}
          </span>
        )}
      </p>
    </div>
  );
};

export default Card;
