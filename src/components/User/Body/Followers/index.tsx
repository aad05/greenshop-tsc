import { FC } from "react";
import { useQueryClient } from "react-query";
import { UserSwitchOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { UserType } from "../../../../@types";
import Follower from "./Follower";
import { Empty } from "antd";

const Followers: FC = () => {
  const { _id } = useParams();
  const queryClient = useQueryClient();

  const data: UserType = queryClient.getQueryData(`/user-${_id}`) ?? {};

  return (
    <div>
      {data?.followers?.length ? (
        <div className="mt-[30px] w-full grid grid-cols-4 gap-8 max-lg:grid-cols-3 max-sm:grid-cols-2">
          {data.followers.map((_id: string) => (
            <Follower key={_id} _id={_id} />
          ))}
        </div>
      ) : (
        <div className="h-[400px] flex flex-col items-center justify-center">
          <Empty
            description={
              <div>
                <h3 className="text-[18px] text-bold">
                  <UserSwitchOutlined /> No followers yet...
                </h3>
                <p></p>
              </div>
            }
          />
        </div>
      )}
    </div>
  );
};

export default Followers;
