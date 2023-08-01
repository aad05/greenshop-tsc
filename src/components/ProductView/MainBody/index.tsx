import { FC } from "react";
import ProductInfo from "./ProductInfo";
import ImageGallery from "./ImageGallery";
import ProductDescription from "./ProductDescription";
import { useParams } from "react-router-dom";
import useQueryHandler from "../../../hooks/useQuery";

const MainBody: FC = () => {
  const useQuery = useQueryHandler();
  const { category, _id } = useParams();

  const { data, isLoading, isError } = useQuery({
    method: "GET",
    queryURL: `/flower/category/${category}/${_id}`,
    queryKEY: `/flower/category/${category}/${_id}`,
  });

  return (
    <div className="mt-[43px]">
      <div className="flex w-full gap-12 max-lg:flex-col">
        <ImageGallery
          isLoading={isLoading}
          isError={isError}
          data={data}
          className="flex-1"
        />
        <ProductInfo
          isLoading={isLoading}
          isError={isError}
          data={data}
          className="flex-1"
        />
      </div>
      <ProductDescription isLoading={isLoading} isError={isError} data={data} />
    </div>
  );
};

export default MainBody;
