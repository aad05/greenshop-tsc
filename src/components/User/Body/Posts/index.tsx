import { Empty } from "antd";
import { FC } from "react";
import { HighlightOutlined } from "@ant-design/icons";
import useQueryHandler from "../../../../hooks/useQuery";
import { useLoader } from "../../../../generic/Loader";
import { BlogCardType } from "../../../../@types";
import Blog from "./Card";
import { useParams } from "react-router-dom";

const Posts: FC = () => {
  const { _id } = useParams();
  const useQuery = useQueryHandler();
  const { post_based_loader } = useLoader();

  const { data, isLoading, isError } = useQuery({
    queryURL: `/user/blog/created-by/${_id}`,
    queryKEY: `/user/blog-${_id}`,
    method: "GET",
  });

  return (
    <div>
      <div className="mt-[30px] w-full grid grid-cols-3 gap-4 max-sm:grid-cols-2 ">
        {isLoading || isError
          ? post_based_loader()
          : data.map((v: BlogCardType) => <Blog key={v._id} {...v} />)}
      </div>

      {isLoading ||
        (!data?.length && (
          <div className="h-[400px] flex flex-col items-center justify-center">
            <Empty
              description={
                <div>
                  <h3 className="text-[18px] text-bold">
                    <HighlightOutlined /> Post hasn't been posted yet...
                  </h3>
                </div>
              }
            />
          </div>
        ))}
    </div>
  );
};

export default Posts;
