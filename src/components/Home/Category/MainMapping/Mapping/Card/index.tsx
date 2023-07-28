import { FC } from "react";
import { useLoader } from "../../../../../../generic/Loader";
import { useAssets } from "../../../../../../hooks/useAssets";

const Card: FC = () => {
  const { search, basket, heart } = useAssets("icons");
  const { IconAndImageBasedLoader } = useLoader();

  return (
    <div className="">
      <div className="group h-[300px] bg-[#f5f5f5] flex justify-center items-center relative">
        <div className="bg-[#46A358] text-white absolute top-3 left-0 px-[5px] py-[3px]">
          13% OFF
        </div>
        <IconAndImageBasedLoader
          type="image"
          src={
            "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fmapping_flower.png?alt=media&token=04be6217-3008-4574-b78f-9a01e285438b"
          }
          alt="img"
        />
        <div className="hidden absolute inset-x-auto bottom-2 gap-4 group-hover:flex">
          <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer">
            <IconAndImageBasedLoader src={basket} alt="basket" type="icon" />
          </div>
          <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer">
            <IconAndImageBasedLoader src={heart} alt="heart" type="icon" />
          </div>
          <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer">
            <IconAndImageBasedLoader src={search} alt="search" type="icon" />
          </div>
        </div>
      </div>
      <h3 className="font-normal cursor-pointer mt-[12px]">Barberton Daisy</h3>
      <p className="text-[#46A358] font-bold">
        $119.00
        <span className="font-thin text-[#A5A5A5] ml-[5px] line-through">
          $229.00
        </span>
      </p>
    </div>
  );
};

export default Card;
