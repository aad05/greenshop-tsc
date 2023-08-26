import { Spin, Tabs } from "antd";
import { FC } from "react";
import { ProfleTabType, profile_tab_items } from "../../../utils/root_utils";
import { LoadingType } from "../../../@types";
import { useLoader } from "../../../generic/Loader";

const Body: FC<LoadingType> = ({ isError, isLoading }) => {
  const { tab_loader } = useLoader();
  return (
    <div className="mb-[40px]">
      {isError || isLoading ? (
        tab_loader()
      ) : (
        <Tabs
          size="large"
          defaultActiveKey="1"
          items={profile_tab_items.map(
            ({ Children, key, label }: ProfleTabType) => ({
              key,
              label,
              children: <Children />,
            }),
          )}
        />
      )}
      {(isLoading || isError) && (
        <div className="h-[600px] flex flex-col items-center justify-center gap-4">
          <Spin size="large" />
          <h3>Loading...</h3>
        </div>
      )}
    </div>
  );
};

export default Body;
