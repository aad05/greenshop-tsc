import { Skeleton } from "antd";
import { FC } from "react";
import Button from "../../../generic/Button";
import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
import { LoadingType, UserType } from "../../../@types";

const Header: FC<LoadingType> = ({ isLoading, isError }) => {
  const { _id } = useParams();
  const queryClient = useQueryClient();

  const data: UserType = queryClient.getQueryData(`/user-${_id}`) ?? {};

  return (
    <div className="h-[570px] relative">
      <img
        className="w-full h-[450px] rounded-b-[12px]"
        src="https://i0.wp.com/linkedinheaders.com/wp-content/uploads/2018/02/mountain-lake-header.jpg?fit=1584%2C396&ssl=1"
        alt="cover"
      />
      <div className="w-full flex items-end justify-between absolute bottom-[20px]">
        <div className="flex items-end">
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
          <div className="flex flex-col ml-[15px]">
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
                `${data?.followers?.length} followers`
              )}
            </p>
          </div>
        </div>
        <div>
          {isLoading || isError ? (
            <Skeleton.Button active={true} />
          ) : (
            <Button className="py-[10px] px-[15px]">Follow</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
