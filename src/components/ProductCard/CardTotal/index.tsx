import { FC } from "react";
import Button from "../../../generic/Button";
import { Descriptions } from "antd";
import { useReduxSelector } from "../../../hooks/useRedux";
import { useNavigate } from "react-router-dom";

const CardTotal: FC = () => {
  const navigate = useNavigate();
  const { data } = useReduxSelector((state) => state.shopping);
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
          $
          {Number(
            data.reduce(
              (acc, currentValue) =>
                Number(currentValue?.count) * Number(currentValue?.price) + acc,
              0,
            ),
          ).toFixed(2)}
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
        <h1 className="text-[#46A358]">
          $
          {Number(
            data.reduce(
              (acc, currentValue) =>
                Number(currentValue?.count) * Number(currentValue?.price) + acc,
              0,
            ),
          ).toFixed(2)}
        </h1>
      </div>
      <Button
        onClick={() => navigate("/product-checkout")}
        className="w-full h-[40px] mt-[30px]"
      >
        Proceed to Checkout
      </Button>
      <h3
        className="mt-[14px] text-center text-[#46A358] cursor-pointer"
        onClick={() => navigate("/")}
      >
        Continue Shopping
      </h3>
    </div>
  );
};

export default CardTotal;
