import { FC } from "react";
import { Descriptions } from "antd";
import { useReduxSelector } from "../../../hooks/useRedux";
import Card from "./Card";

const Order: FC = () => {
  const { data, total, coupon } = useReduxSelector((state) => state.shopping);

  return (
    <div className="w-[40%] max-md:w-[100%]">
      <h3 className="font-bold mb-[20px]">Your Order</h3>
      <div className="flex flex-col gap-3">
        {data.map((value) => (
          <Card key={value._id} {...value} />
        ))}
      </div>
      <Descriptions className="mt-[30px]">
        <Descriptions.Item span={3} label="Subtotal">
          ${total || 0}
        </Descriptions.Item>
        <Descriptions.Item span={3} label="Coupon Discount">
          - $(
          {coupon.has_coupon
            ? Number(total * Number(`0.${coupon.discount_for}`)).toFixed(2)
            : "0.00"}
          )
        </Descriptions.Item>
        <Descriptions.Item span={3} label="Shiping">
          $16
        </Descriptions.Item>
      </Descriptions>
      <div className="flex justify-between">
        <h1>Total</h1>
        {coupon.has_coupon ? (
          <div>
            <h1 className="text-[#46A358] line-through">${total || 0}</h1>
            <h1 className="text-[#46A358]">
              $
              {Number(
                total - Number(total * Number(`0.${coupon.discount_for}`)),
              ).toFixed(2) || 0}
            </h1>
          </div>
        ) : (
          <h1 className="text-[#46A358]">${total || 0}</h1>
        )}
      </div>
    </div>
  );
};

export default Order;
