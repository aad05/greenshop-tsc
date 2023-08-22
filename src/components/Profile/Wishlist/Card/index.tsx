import { FC } from "react";
import { useLoader } from "../../../../generic/Loader";
import {
  HeartFilled,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { MainCardType } from "../../../../@types";
import { useAuthUser } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { useReduxDispatch } from "../../../../hooks/useRedux";
import { useNotificationAPI } from "../../../../generic/NotificationAPI";
import { addDataToShopping } from "../../../../redux/shoppingSlice";
import { useDeleteWishlistDataFromCache } from "../../../../hooks/useQuery/useQueryAction";

const Card: FC<MainCardType> = (props) => {
  const deleteWishlistData = useDeleteWishlistDataFromCache();
  const notify = useNotificationAPI();
  const dispatch = useReduxDispatch();
  const auth = useAuthUser();
  const navigate = useNavigate();
  const { IconAndImageBasedLoader } = useLoader();

  const foundWishData = auth()?.wishlist.find(
    (value: { flower_id: string }) => value.flower_id === props._id,
  );

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
          src={String(props.main_image)}
          alt="img"
          className="w-4/5"
        />
        <div className="hidden absolute inset-x-auto bottom-2 gap-4 group-hover:flex">
          <div
            onClick={() => {
              notify("added_to_shopping_cart");
              dispatch(addDataToShopping(props));
            }}
            className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer"
          >
            <ShoppingCartOutlined />
          </div>
          <div
            onClick={() => deleteWishlistData(props)}
            className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer"
          >
            <HeartFilled className="text-[red]" />
          </div>
          <div
            onClick={() =>
              navigate(
                `/shop/${foundWishData?.route_path}/${foundWishData?.flower_id}`,
              )
            }
            className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer"
          >
            <SearchOutlined />
          </div>
        </div>
      </div>
      <h3 className="font-normal cursor-pointer mt-[12px]">Barberton Daisy</h3>
      <p className="text-[#46A358] font-bold">
        ${props.price}
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
