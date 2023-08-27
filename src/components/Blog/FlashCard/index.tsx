import { FC } from "react";
import { MoneyCollectOutlined } from "@ant-design/icons";

const FlashCard: FC = () => {
  return (
    <div className="flex">
      <div>
        <div className="w-[40px] h-[40px] rounded-full bg-[#46A358] text-white flex justify-center items-center">
          <MoneyCollectOutlined />
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold text-[25px]">Tips</h3>
        <p className="font-bold text-[#A5A5A5]">
          Recive tips from your fans and easily transfer earnings to your bank
        </p>
      </div>
    </div>
  );
};

export default FlashCard;
