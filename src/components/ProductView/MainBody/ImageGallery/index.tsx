import { FC } from "react";
import { Product } from "../../../../@types";
import { Image } from "antd";
import { useLoader } from "../../../../generic/Loader";

const ImageGallery: FC<Product> = ({ className }) => {
  const { IconAndImageBasedLoader } = useLoader();
  return (
    <div className={`${className} flex gap-6 max-lg:flex-col`}>
      <div className="flex flex-col justify-between max-lg:order-2 max-lg:flex-row max-lg:gap-3 max-lg:overflow-x-scroll ">
        <div className="w-[100px] h-[100px] bg-[#e5e5e5] cursor-pointer border-2 hover:border-[#46A358] transition-colors">
          <IconAndImageBasedLoader
            type="image"
            src="https://assets.dragonmart.ae//pictures/0543084_jian-ya-artificial-flower-pot-with-pink-roses-multicolour.jpeg"
            alt=""
          />
        </div>
        <div className="w-[100px] h-[100px] bg-[#e5e5e5] cursor-pointer border-2 hover:border-[#46A358] transition-colors">
          <IconAndImageBasedLoader
            type="image"
            src="https://assets.dragonmart.ae//pictures/0543084_jian-ya-artificial-flower-pot-with-pink-roses-multicolour.jpeg"
            alt=""
          />
        </div>
        <div className="w-[100px] h-[100px] bg-[#e5e5e5] cursor-pointer border-2 hover:border-[#46A358] transition-colors">
          <IconAndImageBasedLoader
            type="image"
            src="https://assets.dragonmart.ae//pictures/0543084_jian-ya-artificial-flower-pot-with-pink-roses-multicolour.jpeg"
            alt=""
          />
        </div>
        <div className="w-[100px] h-[100px] bg-[#e5e5e5] cursor-pointer border-2 hover:border-[#46A358] transition-colors">
          <IconAndImageBasedLoader
            type="image"
            src="https://assets.dragonmart.ae//pictures/0543084_jian-ya-artificial-flower-pot-with-pink-roses-multicolour.jpeg"
            alt=""
          />
        </div>
      </div>
      <div className="cursor-pointer">
        <Image src="https://www.bloomingbackyard.com/wp-content/uploads/2021/04/Dahlia-1024x974.jpg.webp" />
      </div>
    </div>
  );
};

export default ImageGallery;
