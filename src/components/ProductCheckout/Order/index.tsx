import { FC } from "react";
import { useLoader } from "../../../generic/Loader";
import { Checkbox, Descriptions } from "antd";
import Button from "../../../generic/Button";

const Order: FC = () => {
  const { IconAndImageBasedLoader } = useLoader();
  return (
    <div className="w-[40%] max-md:w-[100%]">
      <h3 className="font-bold mb-[20px]">Your Order</h3>
      <div className="bg-[#FBFBFB] h-[70px] w-full mt-[11px] flex">
        <div className="w-[40%] flex items-center gap-2">
          <IconAndImageBasedLoader
            type={"image"}
            src=""
            alt=""
            className="w-[70px] h-[70px]"
          />
          <div>
            <h3>Barberton Daisy</h3>
            <p className="font-light text-[14px]">SKU: 1995751877966</p>
          </div>
        </div>
        <div className="w-[30%] flex items-center text-[#727272] justify-center">
          (x 2)
        </div>
        <div className="w-[30%] flex items-center justify-between pr-[10px]">
          <h3>$238.00</h3>
        </div>
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
      <div className="mt-[47px] flex flex-col gap-4">
        <h3 className="font-bold mb-[20px]">Payment Method</h3>
        <Checkbox className="border border-[#46A358] w-full h-[40px] flex items-center pl-[10px] rounded-lg">
          Hey
        </Checkbox>
        <Checkbox
          name="payment_method"
          className="border border-[#46A358] w-full h-[40px] flex items-center pl-[10px] rounded-lg"
        >
          Dorect bank transfer
        </Checkbox>
        <Checkbox
          name="payment_method"
          className="border border-[#46A358] w-full h-[40px] flex items-center pl-[10px] rounded-lg"
        >
          Cash on delivery
        </Checkbox>
      </div>
      <Button className="mt-[40px] w-full h-[40px]">Place Order</Button>
    </div>
  );
};

export default Order;
