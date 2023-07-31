import { FC } from "react";
import ProductInfo from "./ProductInfo";
import ImageGallery from "./ImageGallery";
import ProductDescription from "./ProductDescription";

const MainBody: FC = () => {
  return (
    <div className="mt-[43px]">
      <div className="flex w-full gap-12 max-lg:flex-col">
        <ImageGallery className="flex-1" />
        <ProductInfo className="flex-1" />
      </div>
      <ProductDescription />
    </div>
  );
};

export default MainBody;
