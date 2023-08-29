import { Empty, Spin } from "antd";
import { FC } from "react";
import useQueryHandler from "../../../hooks/useQuery";
import { notification_stack_type } from "../../../@types";
import { UserOutlined, SendOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Notification: FC = () => {
  const navigate = useNavigate();
  const useQuery = useQueryHandler();

  const { data, isLoading, isError } = useQuery({
    queryURL: "/user/notification",
    queryKEY: "notification",
    method: "GET",
  });
  const isLoaded = isLoading || isError;

  return (
    <div>
      {isLoaded ? (
        <div className="flex justify-center items-center">
          <Spin size="large" />
          <p>Loading...</p>
        </div>
      ) : !data?.notification_stack.length ? (
        <Empty description="No notifications" />
      ) : (
        <div>
          {data?.notification_stack.map(
            (v: notification_stack_type, i: number) => (
              <div
                className="flex items-center gap-2 border-b border-b-[#e5e5e5] mt-[5px] pb-[5px] mx-[10px]"
                key={i}
              >
                <div className="flex justify-center items-center w-[35px] h-[30px] rounded-full bg-[#45A358] text-white">
                  {v.type === "follow_stack" ? (
                    <UserOutlined />
                  ) : (
                    <SendOutlined />
                  )}
                </div>
                <div className="w-full">
                  <h3 className="text-bold">{v.message}</h3>
                  <div className="w-full flex justify-between gap-4">
                    <p
                      onClick={() => navigate(`/user/${v.user_id}`)}
                      className="text-[12px] cursor-pointer text-[#45A358]"
                    >
                      Go to profile
                    </p>
                    <p className="text-[12px] cursor-pointer">
                      {new Date(v.time_stamp).toLocaleDateString("en-us", {
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      )}
    </div>
  );
};

export default Notification;
