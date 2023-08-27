import { FC } from "react";
import useQueryHandler from "../../../hooks/useQuery";
import { useNavigate, useParams } from "react-router-dom";
import { Skeleton, Tooltip } from "antd";
import Meta from "antd/es/card/Meta";
import Button from "../../../generic/Button";
import { useAuthUser } from "react-auth-kit";
import { AuthUserType } from "../../../@types";
import {
  useFollowUser,
  useUnFollowUser,
} from "../../../hooks/useQuery/useQueryAction";

const Rendering: FC = () => {
  const { mutate: unFollowMutate } = useUnFollowUser();
  const { mutate: followMutate } = useFollowUser();
  const auth: AuthUserType = useAuthUser()() ?? {};
  const navigate = useNavigate();
  const { created_by, _id } = useParams();
  const useQuery = useQueryHandler();

  const { isError, isLoading, data } = useQuery({
    queryURL: `/user/blog/${_id}`,
    queryKEY: `/blog-${_id}`,
    method: "GET",
  });
  const {
    isLoading: isUserLoading,
    isError: isUserError,
    data: userData,
  } = useQuery({
    queryURL: `/user/by_id/${created_by}`,
    queryKEY: `/user-${created_by}`,
    method: "GET",
  });
  const isBlogLoaded = isError || isLoading;
  const isuserLoaded = isUserError || isUserLoading;

  return (
    <div className="w-[60%] m-auto max-lg:w-[100%] py-[50px]">
      {isBlogLoaded || isuserLoaded ? (
        <>
          <div className="mt-[30px]">
            <Meta
              avatar={<Skeleton.Avatar active={true} />}
              title={<Skeleton.Input active={true} />}
              className="mb-[30px]"
            />
            <Skeleton paragraph={{ rows: 30 }} active={true} />
          </div>
        </>
      ) : (
        <div>
          <div className="flex justify-between mb-[20px]">
            <div className="flex gap-4">
              <Tooltip title={`${userData.name} ${userData.surname}`}>
                <img
                  onClick={() => navigate(`/user/${userData._id}`)}
                  className="w-[50px] h-[50px] rounded-full cursor-pointer"
                  src={String(userData.profile_photo)}
                  alt="user"
                />
              </Tooltip>
              <div className="flex flex-col ">
                <h3 className="font-bold text-[18px]">{`${userData.name} ${userData.surname}`}</h3>
                <p className="font-thin text-[12px]">
                  Followers: {userData?.followers.length}
                </p>
              </div>
            </div>
            <div>
              {auth.followers?.includes(String(created_by)) ? (
                <Button
                  className="px-[20px] py-[8px]"
                  onClick={() => unFollowMutate({ data: userData })}
                >
                  Unfollow
                </Button>
              ) : auth._id === String(created_by) ? (
                <Button className="px-[20px] py-[8px]">You</Button>
              ) : (
                <Button
                  className="px-[20px] py-[8px]"
                  onClick={() => followMutate({ data: userData })}
                >
                  Follow
                </Button>
              )}
            </div>
          </div>

          <h1 className="font-bold text-[30px]">{data?.title}</h1>
          <div
            className="mt-[50px]"
            dangerouslySetInnerHTML={{ __html: data?.content }}
          />
        </div>
      )}
    </div>
  );
};

export default Rendering;
