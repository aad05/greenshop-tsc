import { FC } from "react";
import { Product } from "../../../../@types";
import { Descriptions, Rate, Skeleton, Tooltip } from "antd";
import Button from "../../../../generic/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthDecider } from "../../../../tools/authDecider";
import { useReduxDispatch } from "../../../../hooks/useRedux";
import { setAuthModalVisibility } from "../../../../redux/modalSlice";
import { addDataToShopping } from "../../../../redux/shoppingSlice";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useNotificationAPI } from "../../../../generic/NotificationAPI";
import useQueryHandler from "../../../../hooks/useQuery";
import { useAuthUser } from "react-auth-kit";
import { useHandler } from "../../../../generic/Handlers";

const ProductInfo: FC<Product> = ({ className, isLoading, isError, data }) => {
  const auth = useAuthUser()();
  const { likeHandler } = useHandler();
  const useQuery = useQueryHandler();
  const notify = useNotificationAPI();
  const navigate = useNavigate();
  const dispatch = useReduxDispatch();
  const { auth_decider_func } = useAuthDecider();
  const { category } = useParams();

  const response = useQuery({
    queryURL: `/user/by_id/${data?.created_by}`,
    queryKEY: `/user-${data?.created_by}`,
    method: "GET",
  });

  const foundData = auth?.wishlist.find(
    (v: { flower_id: string }) => v?.flower_id === data?._id,
  );

  return (
    <div className={`${className}`}>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          {response.isLoading || response.isError ? (
            <Skeleton.Avatar active={true} />
          ) : (
            <Tooltip title={`${response.data?.name} ${response.data?.surname}`}>
              <img
                onClick={() => navigate(`/user/${data?.created_by}`)}
                className="rounded-full w-[50px] h-[50px] cursor-pointer"
                src={String(response.data?.profile_photo)}
                alt={response.data?.name}
              />
            </Tooltip>
          )}
          <div>
            <div>
              <h1 className="font-bold text-[28px]">
                {isLoading ?? isError ? <Skeleton.Input /> : data?.title}
              </h1>
              <h3 className="font-bold text-[#46A358] text-[22px]">
                {isLoading ?? isError ? <Skeleton.Input /> : `$${data?.price}`}
              </h3>
            </div>
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center font-light text-[12px]">
          <Rate defaultValue={data?.rate} />{" "}
          <p>{data?.comments?.length} Customer Review</p>
        </div>
      </div>
      <div className="border border-[#46A35880] mt-[12px]" />
      <div className="mt-[12px]">
        <h3 className="font-medium text-[20px]">Short Description:</h3>
        <p className="font-light mt-[10px]">
          {isLoading ?? isError ? <Skeleton /> : data?.short_description}
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
        <Button
          className="w-[130px] h-[40px]"
          onClick={() =>
            auth_decider_func({
              withoutAuth: () => {
                dispatch(
                  setAuthModalVisibility({ open: true, loading: false }),
                );
              },
              withAuth: () => {
                dispatch(addDataToShopping(data));
                navigate("/product-card");
              },
            })
          }
        >
          BUY NOW
        </Button>
        <Button
          onClick={() => {
            notify("added_to_shopping_cart");
            dispatch(addDataToShopping(data));
          }}
          className="w-[130px] h-[40px] border border-[#46A358] bg-transparent"
        >
          <p className="text-black">ADD TO CARD</p>
        </Button>
        <Button
          onClick={() =>
            auth_decider_func({
              withoutAuth: () =>
                dispatch(
                  setAuthModalVisibility({ open: true, loading: false }),
                ),
              withAuth: () =>
                likeHandler({
                  category: String(category),
                  main_flower_data: data,
                }),
            })
          }
          className="w-[40px] h-[40px] bg-transparent border border-[#46A358] text-[20px] "
        >
          {foundData?.flower_id === data?._id ? (
            <HeartFilled className="text-[red]" />
          ) : (
            <HeartOutlined className="text-[#000]" />
          )}
        </Button>
      </div>
      <Descriptions className="mt-[12px]">
        <Descriptions.Item span={3} label="SKU">
          {isLoading ?? isError ? <Skeleton.Input /> : data?._id}
        </Descriptions.Item>
        <Descriptions.Item span={3} label="Categories">
          {isLoading ?? isError ? <Skeleton.Input /> : category?.toUpperCase()}
        </Descriptions.Item>
        <Descriptions.Item span={3} label="Tags">
          Home, Garden, Plants
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default ProductInfo;
