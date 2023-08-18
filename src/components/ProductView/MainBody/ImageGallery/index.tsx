import { FC, useState } from "react";
import { Product } from "../../../../@types";
import { Image } from "antd";
import { useLoader } from "../../../../generic/Loader";

const ImageGallery: FC<Product> = ({ className, isLoading, isError, data }) => {
  const [activeImage, setActiveImage] = useState<{
    isSelected: boolean;
    src: string;
  }>({
    isSelected: false,
    src: "",
  });
  const { IconAndImageBasedLoader } = useLoader();

  return (
    <div className={`${className} flex gap-6 max-lg:flex-col`}>
      <div className="flex flex-col justify-between max-lg:order-2 max-lg:flex-row max-lg:gap-3 max-lg:overflow-x-scroll ">
        {isLoading ?? isError
          ? Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="w-[100px] h-[100px] bg-[#e5e5e5] cursor-pointer border-2 hover:border-[#46A358] transition-colors"
              >
                <IconAndImageBasedLoader
                  className="w-full h-full"
                  type="image"
                  src={""}
                  alt=""
                />
              </div>
            ))
          : data?.detailed_images.map((src, _idx) => (
              <div
                key={_idx}
                className="w-[100px] h-[100px] bg-[#e5e5e5] cursor-pointer border-2 hover:border-[#46A358] transition-colors"
                onClick={() => setActiveImage({ isSelected: true, src })}
              >
                <IconAndImageBasedLoader
                  className="w-full h-full"
                  type="image"
                  src={src}
                  alt=""
                />
              </div>
            ))}
      </div>
      <div className="cursor-pointer flex justify-center items-center w-full">
        {isLoading ?? isError ? (
          <IconAndImageBasedLoader type={"image"} src="" alt="" />
        ) : (
          <Image
            loading={"lazy"}
            src={activeImage.isSelected ? activeImage.src : data?.main_image}
            className="w-full h-full"
          />
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
