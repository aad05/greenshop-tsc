import { FC } from "react";
import {
  HeartFilled,
  SearchOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { MainCardType } from "../../../../../@types";
import { useLoader } from "../../../../../generic/Loader";
import { useAuthUser } from "react-auth-kit";
import { useHandler } from "../../../../../generic/Handlers";
import { useAuthDecider } from "../../../../../tools/authDecider";
import { setAuthModalVisibility } from "../../../../../redux/modalSlice";
import { useReduxDispatch } from "../../../../../hooks/useRedux";

const Card: FC<MainCardType> = (props) => {
  const { category, _id, main_image, price, title } = props;
  const auth = useAuthUser()();
  const dispatch = useReduxDispatch();
  const navigate = useNavigate();
  const { likeHandler } = useHandler();
  const { auth_decider_func } = useAuthDecider();
  const { IconAndImageBasedLoader } = useLoader();

  const foundData = auth?.wishlist.find(
    (v: { flower_id: string }) => v?.flower_id === _id,
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
          src={String(main_image)}
          alt="img"
          className="w-4/5"
        />
        <div className="hidden absolute inset-x-auto bottom-2 gap-4 group-hover:flex">
          <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer">
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
                    category: String(category),
                    main_flower_data: props,
                  }),
              })
            }
            className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer"
          >
            {foundData?.flower_id === _id ? (
              <HeartFilled className="text-[red]" />
            ) : (
              <HeartOutlined />
            )}
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
