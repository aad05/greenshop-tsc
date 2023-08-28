import { FC, useEffect } from "react";
import useQueryHandler from "../../../hooks/useQuery";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Modal, Result, Skeleton, Tooltip } from "antd";
import Meta from "antd/es/card/Meta";
import GenericButton from "../../../generic/Button";
import { useAuthUser } from "react-auth-kit";
import { AuthUserType } from "../../../@types";
import {
  useBlogView,
  useDeleteBlog,
  useFollowUser,
  useUnFollowUser,
} from "../../../hooks/useQuery/useQueryAction";
import {
  EyeOutlined,
  CommentOutlined,
  HeartOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { useAuthDecider } from "../../../tools/authDecider";
import { useReduxDispatch } from "../../../hooks/useRedux";
import { setAuthModalVisibility } from "../../../redux/modalSlice";

const Rendering: FC = () => {
  const dispatch = useReduxDispatch();
  const { auth_decider_func } = useAuthDecider();
  const { mutateAsync: deleteMutate } = useDeleteBlog();
  const { mutate: viewMutate } = useBlogView();
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

  useEffect(() => {
    viewMutate({ _id: String(_id) });
  }, []);

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
      ) : !data ? (
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
                <GenericButton
                  className="px-[20px] py-[8px]"
                  onClick={() => unFollowMutate({ data: userData })}
                >
                  Unfollow
                </GenericButton>
              ) : auth._id === String(created_by) ? (
                <GenericButton className="px-[20px] py-[8px]">
                  You
                </GenericButton>
              ) : (
                <GenericButton
                  className="px-[20px] py-[8px]"
                  onClick={() => {
                    auth_decider_func({
                      withAuth: () => followMutate({ data: userData }),
                      withoutAuth: () =>
                        dispatch(
                          setAuthModalVisibility({
                            open: true,
                            loading: false,
                          }),
                        ),
                    });
                  }}
                >
                  Follow
                </GenericButton>
              )}
            </div>
          </div>
          <Result
            status="403"
            title="Post has been deleted!"
            subTitle="Sorry, post has been deleted by author."
            extra={
              <div className="flex justify-center">
                <GenericButton
                  className="px-[15px] py-[10px]"
                  onClick={() => navigate("/blog")}
                >
                  Back Blog
                </GenericButton>
              </div>
            }
          />
        </div>
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
                <GenericButton
                  className="px-[20px] py-[8px]"
                  onClick={() => unFollowMutate({ data: userData })}
                >
                  Unfollow
                </GenericButton>
              ) : auth._id === String(created_by) ? (
                <GenericButton className="px-[20px] py-[8px]">
                  You
                </GenericButton>
              ) : (
                <GenericButton
                  className="px-[20px] py-[8px]"
                  onClick={() => {
                    auth_decider_func({
                      withAuth: () => followMutate({ data: userData }),
                      withoutAuth: () =>
                        dispatch(
                          setAuthModalVisibility({
                            open: true,
                            loading: false,
                          }),
                        ),
                    });
                  }}
                >
                  Follow
                </GenericButton>
              )}
            </div>
          </div>

          <h1 className="font-bold text-[30px]">{data?.title}</h1>
          <div
            className="mt-[50px]"
            dangerouslySetInnerHTML={{ __html: data?.content }}
          />
          <div className="flex items-center justify-between mt-[30px] ">
            <div className="flex gap-4">
              <Tooltip title="Views">
                <p className="cursor-pointer">
                  <EyeOutlined /> {data?.views ?? 0}
                </p>
              </Tooltip>
              <Tooltip title="Comments">
                <p className="cursor-pointer">
                  <CommentOutlined /> {0}
                </p>
              </Tooltip>
              <Tooltip title="Likees">
                <p className="cursor-pointer">
                  <HeartOutlined /> {data?.reaction_length ?? 0}
                </p>
              </Tooltip>
              <Tooltip title="Share">
                <p className="cursor-pointer">
                  <ShareAltOutlined /> {data?.reaction_length ?? 0}
                </p>
              </Tooltip>
            </div>
            {auth._id === String(created_by) && (
              <Button
                danger
                onClick={() => {
                  Modal.confirm({
                    title: "Do you want to delete?",
                    content:
                      "Please, make sure. It can not be undone, after deleting.",
                    okButtonProps: { danger: true },
                    okText: "I'm sure",
                    onOk: async () => {
                      await deleteMutate(String(_id));
                      navigate("/blog");
                    },
                  });
                }}
              >
                Delete
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Rendering;
