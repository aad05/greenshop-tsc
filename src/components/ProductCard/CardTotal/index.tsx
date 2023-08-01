import { FC } from "react";
import Button from "../../../generic/Button";
import { Descriptions } from "antd";

const CardTotal: FC = () => {
  return (
    <div className="w-[30%] max-lg:w-[100%]">
      <h3 className="font-bold pb-[11px] border-b border-[#46A35880]">
        Card Total
      </h3>
      <div className="flex h-[40px] mt-[35px]">
        <input
          placeholder="Enter coupon code here..."
          className="w-4/5 border border-[#46A358] pl-[15px] placeholder:font-light rounded-l-lg"
        />
        <Button className="w-1/5 rounded-l-none">Apply</Button>
      </div>
      <Descriptions className="mt-[30px]">
        <Descriptions.Item span={3} label="Subtotal">
          $2.000.23
        </Descriptions.Item>
        <Descriptions.Item span={3} label="Coupon Discount">
          - (0.00)
        </Descriptions.Item>
        <Descriptions.Item span={3} label="Shiping">
          $16
        </Descriptions.Item>
      </Descriptions>
      <div className="flex justify-between">
        <h1>Total</h1>
        <h1 className="text-[#46A358]">$2,699.00</h1>
      </div>
      <Button className="w-full h-[40px] mt-[30px]">Proceed to Checkout</Button>
      <h3 className="mt-[14px] text-center text-[#46A358]">
        Continue Shopping
      </h3>
    </div>
  );
};

export default CardTotal;
