import { Modal, Skeleton } from "antd";
import { FC } from "react";
import Button from "../../../generic/Button";
import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
import { AuthUserType, LoadingType, UserType } from "../../../@types";
import {
  WechatOutlined,
  PlusCircleOutlined,
  MinusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useAuthUser } from "react-auth-kit";
import {
  useFollowUser,
  useUnFollowUser,
} from "../../../hooks/useQuery/useQueryAction";

const Header: FC<LoadingType> = ({ isLoading, isError }) => {
  const { mutate: unFollowMutate } = useUnFollowUser();
  const { mutate: followMutate } = useFollowUser();
  const { _id } = useParams();
  const auth: AuthUserType = useAuthUser()() ?? {};
  const queryClient = useQueryClient();

  const data: UserType = queryClient.getQueryData(`/user-${_id}`) ?? {};

  return (
    <div className="w-full h-[570px] relative max-sm:h-[400px]">
      <img
        className="w-full h-[450px] rounded-b-[12px] max-sm:h-[230px]"
        src="https://i0.wp.com/linkedinheaders.com/wp-content/uploads/2018/02/mountain-lake-header.jpg?fit=1584%2C396&ssl=1"
        alt="cover"
      />
      <div className="w-full flex items-end justify-between absolute bottom-[20px] max-sm:flex-col max-sm:items-center">
        <div className="flex items-end max-sm:flex-col max-sm:items-center">
          <div className="w-[150px] h-[150px] border-[5px] border-[#46A358] rounded-full flex justify-center items-center">
            {isLoading || isError ? (
              <Skeleton.Avatar
                style={{ width: 140, height: 140 }}
                active={true}
              />
            ) : (
              <img
                className="rounded-full"
                src={data.profile_photo}
                alt="asas"
              />
            )}
          </div>
          <div className="flex flex-col ml-[15px] max-sm:items-center">
            <h3 className="text-[28px] font-bold">
              {isLoading || isError ? (
                <Skeleton.Input size="large" active={true} />
              ) : (
                `${String(data?.name)} ${String(data?.surname)}`
              )}
            </h3>
            <p className="font-thin">
              {isLoading || isError ? (
                <Skeleton.Input size="large" active={true} />
              ) : (
                `${data?.followers?.length ?? 0} followers`
              )}
            </p>
          </div>
        </div>
        <div className="max-sm:mt-[10px]">
          {isLoading || isError ? (
            <>
              <Skeleton.Button active={true} />
            </>
          ) : (
            <div className="flex gap-4">
              <Button
                className="py-[10px] px-[15px]"
                onClick={() =>
                  Modal.info({
                    title: "Messaging comming soon...",
                    okButtonProps: {
                      type: "dashed",
                    },
                  })
                }
              >
                <WechatOutlined /> Start chat
              </Button>
              {auth.followers?.includes(String(_id)) ? (
                <Button
                  onClick={() => unFollowMutate({ data })}
                  className="py-[10px] px-[15px]"
                >
                  <MinusOutlined /> Unfollow
                </Button>
              ) : auth._id === String(_id) ? (
                <Button className="py-[10px] px-[15px]">
                  <UserOutlined /> You
                </Button>
              ) : (
                <Button
                  onClick={() => followMutate({ data })}
                  className="py-[10px] px-[15px]"
                >
                  <PlusCircleOutlined /> Follow
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
