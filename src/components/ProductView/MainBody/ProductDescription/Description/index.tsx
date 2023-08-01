import { FC } from "react";
import { Product } from "../../../../../@types";
import { Skeleton } from "antd";

const Description: FC<Product> = ({ isLoading, isError, data }) => {
  return (
    <div className="font-light text-[15px] leading-8 mb-[30px]">
      {isLoading ?? isError ? (
        <Skeleton />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: String(data?.description) }} />
      )}
    </div>
  );
};

export default Description;
