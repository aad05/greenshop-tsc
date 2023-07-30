import { FC } from "react";
import { useLoader } from "../../../../../generic/Loader";

const Discount: FC = () => {
  const { IconAndImageBasedLoader } = useLoader();
  return (
    <div className="mt-[20px] bg-[#d9fae0] w-full h-[300px] flex flex-col items-center">
      <h1 className="mt-[18px] text-[#46A358] text-4xl">Super Sale</h1>
      <p className="mt-[11px] text-base font-bold">UP TO 75% OFF</p>
      <IconAndImageBasedLoader
        type="image"
        alt="discount"
        src={
          "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2FIMPATIENS.png?alt=media&token=0aa1f591-8250-4c8f-8b9b-7f88664d85a4"
        }
        className="mb-[10px]"
      />
    </div>
  );
};

export default Discount;
