import { FC } from "react";
import { useAssets } from "../../../../hooks/useAssets";
import Button from "../../../../generic/Button";
import { useLoader } from "../../../../generic/Loader";

type CardProps = {
  subtitle?: string;
  title?: string;
  description?: string;
  buttonText?: string;
};

const Card: FC<CardProps> = ({
  subtitle = "WELCOME TO GREENSHOP",
  title = "LET'S MAKE A BETTER",
  buttonText = "SHOP NOW",
}) => {
  const { IconAndImageBasedLoader } = useLoader();
  const { flower_1, flower_2 } = useAssets("images");

  return (
    <div className="h-[450px] bg-[#f5f5f5] mt-3 flex max-2xl:h-[400px] max-md:h-[300px]">
      <div className="flex-[2] pl-10">
        <h3 className="font-medium text-base mt-[68px] max-lg:text-sm max-md:text-xs max-md:mt-[15px]">
          {subtitle}
        </h3>
        <h1 className="font-black text-[#3D3D3D] text-8xl max-2xl:text-6xl max-lg:text-5xl max-md:text-2xl ">
          {title} <span className="text-[#46A358]">PLANET</span>
        </h1>
        <p className="text-sm font-normal text-[#727272] w-3/5 max-lg:text-xs mt-[10px] ">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>
        <Button className="mt-[40px] w-[140px] h-9 max-md:mt-[10px]">
          {buttonText}
        </Button>
      </div>
      <div className="flex-[1] relative flex justify-center items-center max-md:hidden">
        <IconAndImageBasedLoader type="image" src={flower_1} alt="flower_1" />
        <IconAndImageBasedLoader
          type="image"
          src={flower_2}
          alt="flower_2"
          className="absolute bottom-0 left-0"
        />
      </div>
    </div>
  );
};

export default Card;
