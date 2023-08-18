import { FC, useRef, useState } from "react";
import Button from "../../../generic/Button";
import { Descriptions } from "antd";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined, CheckOutlined } from "@ant-design/icons";
import { useNotificationAPI } from "../../../generic/NotificationAPI";
import { useAxios } from "../../../hooks/useAxios";
import { CouponData } from "../../../@types";
import { setCoupon } from "../../../redux/shoppingSlice";

const CardTotal: FC = () => {
  const dispatch = useReduxDispatch();
  const axios = useAxios();
  const notify = useNotificationAPI();
  const coupon_ref = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { coupon, total } = useReduxSelector((state) => state.shopping);

  const handleCouponDiscount: any = async () => {
    if (!coupon_ref?.current?.value) return notify("missing_value");
    setLoading(true);
    try {
      const { data }: { data: CouponData } = await axios({
        url: "/features/coupon",
        params: {
          coupon_code: String(coupon_ref?.current?.value),
        },
      });
      dispatch(setCoupon(data.data));
    } catch (error) {
      notify("coupon_notfound");
    }
    setLoading(false);
  };

  return (
    <div className="w-[30%] max-lg:w-[100%]">
      <h3 className="font-bold pb-[11px] border-b border-[#46A35880]">
        Card Total
      </h3>
      <div className="flex h-[40px] mt-[35px]">
        <input
          disabled={coupon.has_coupon || loading}
          defaultValue={coupon.code}
          ref={coupon_ref}
          placeholder="Enter coupon code here..."
          className="w-4/5 border border-[#46A358] pl-[15px] placeholder:font-light rounded-l-lg"
          onKeyDown={(e) =>
            (e.key === "Enter" || e.keyCode === 13 || e.type === "click") &&
            handleCouponDiscount()
          }
        />
        <Button
          disabled={coupon.has_coupon || loading}
          onClick={() => handleCouponDiscount()}
          className="w-1/5 rounded-l-none"
        >
          {loading ? (
            <LoadingOutlined />
          ) : coupon.has_coupon ? (
            <CheckOutlined />
          ) : (
            "Apply"
          )}
        </Button>
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
