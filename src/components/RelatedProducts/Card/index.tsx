import { FC } from "react";
import { useLoader } from "../../../generic/Loader";

const Card: FC = () => {
  const { IconAndImageBasedLoader } = useLoader();
  return (
    <div>
      <div className="bg-[#FBFBFB] h-[255px] flex justify-center items-center">
        <IconAndImageBasedLoader type={"image"} src="" alt="" />
      </div>
      <h3 className="font-medium">Beach Spider Lily</h3>
      <p className="font-bold text-[#46A358]">$129.00</p>
    </div>
  );
};

export default Card;
