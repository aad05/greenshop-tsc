import { Avatar, Card, Modal, Skeleton } from "antd";
import {
  WechatOutlined,
  // PlusOutlined,
  LinkOutlined,
  // MinusOutlined,
  // UserOutlined,
} from "@ant-design/icons";
import useQueryHandler from "../../../../../hooks/useQuery";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthDecider } from "../../../../../tools/authDecider";
import { useReduxDispatch } from "../../../../../hooks/useRedux";
import { setAuthModalVisibility } from "../../../../../redux/modalSlice";
// import { useAuthUser } from "react-auth-kit";
// import { AuthUserType } from "../../../../../@types";
// import { followers_dashboard } from "../../../../../utils";

const { Meta } = Card;

const Follower: FC<{ _id: string }> = ({ _id }) => {
  // const auth: AuthUserType = useAuthUser()() ?? {};
  const dispatch = useReduxDispatch();
  const { auth_decider_func } = useAuthDecider();
  const navigate = useNavigate();
  const useQuery = useQueryHandler();

  const { data, isError, isLoading } = useQuery({
    queryURL: `/user/by_id/${_id}`,
    queryKEY: `/user-${_id}`,
    method: "GET",
  });

  const isLoaded = isLoading || isError;

  return (
    <div>
      <Card
        style={{
          width: 300,
        }}
        actions={[
          <div
            key="1"
            onClick={() => {
              !isLoaded &&
                auth_decider_func({
                  withAuth: () => {
                    Modal.info({
                      title: "Messaging comming soon...",
                      okButtonProps: {
                        type: "dashed",
                      },
                    });
                  },
                  withoutAuth: () => {
                    dispatch(
                      setAuthModalVisibility({ open: true, loading: false }),
                    );
                  },
                });
            }}
          >
            {isLoaded ? (
              <Skeleton.Avatar />
            ) : (
              <>
                <WechatOutlined /> Chat
              </>
            )}
          </div>,
          // <div
          //   key="2"
          //   onClick={() => {
          //     if (auth._id === _id) return navigate("/profile");

          //     !isLoaded &&
          //       auth_decider_func({
          //         withAuth: () => {},
          //         withoutAuth: () => {
          //           dispatch(
          //             setAuthModalVisibility({ open: true, loading: false }),
          //           );
          //         },
          //       });
          //   }}
          // >
          //   {isLoaded ? (
          //     <Skeleton.Avatar />
          //   ) : (
          //     <div>
          //       {auth?.followers?.includes(_id) ? (
          //         <>
          //           <MinusOutlined /> Unfollow
          //         </>
          //       ) : auth._id === _id ? (
          //         <>
          //           <UserOutlined /> You
          //         </>
          //       ) : (
          //         <>
          //           <PlusOutlined /> Follow
          //         </>
          //       )}
          //     </div>
          //   )}
          // </div>,
          <div
            key="3"
            onClick={() => {
              !isLoaded && navigate(`/user/${data?._id}`);
            }}
          >
            {isLoaded ? (
              <Skeleton.Avatar />
            ) : (
              <>
                <LinkOutlined /> Observe
              </>
            )}
          </div>,
        ]}
      >
        <Meta
          avatar={<Avatar src={data?.profile_photo} />}
          title={
            <div>
              {isLoaded ? <Skeleton.Input /> : `${data?.name} ${data?.surname}`}
            </div>
          }
          // description={
          //   <div className="flex gap-3">
          //     {followers_dashboard.map(({ tooltip_title, Icon, key }) => (
          //       <Tooltip title={tooltip_title} key={key}>
          //         <p>
          //           <Icon />: 0
          //         </p>
          //       </Tooltip>
          //     ))}
          //   </div>
          // }
        />
      </Card>
    </div>
  );
};

export default Follower;
