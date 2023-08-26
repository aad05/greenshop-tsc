import { Empty } from "antd";
import { FC } from "react";
import { HighlightOutlined } from "@ant-design/icons";

const Posts: FC = () => {
  return (
    <div className="h-[400px] flex flex-col items-center justify-center">
      <Empty
        description={
          <div>
            <h3 className="text-[18px] text-bold">
              <HighlightOutlined /> Post hasn't been posted yet...
            </h3>
            <p></p>
          </div>
        }
      />
    </div>
  );
};

export default Posts;
