import { FC } from "react";
import { OrderType } from "../../../../@types";
import { setTrackOrder } from "../../../../redux/shoppingSlice";
import { setTrackOrderModalVisibility } from "../../../../redux/modalSlice";
import { useReduxDispatch } from "../../../../hooks/useRedux";
import { Tooltip } from "antd";

const Order: FC<OrderType> = (props) => {
  const dispatch = useReduxDispatch();
  const { _id, created_at, extra_shop_info } = props;

  const total: number = extra_shop_info.total_price ?? 0;
  const hasCoupon: boolean = extra_shop_info.coupon.has_coupon ?? false;
  const discount_for: number = extra_shop_info.coupon.discount_for ?? 0;

  return (
    <div className="bg-[#FBFBFB] h-[70px] w-full flex">
      <div className="w-full grid grid-cols-4 max-sm:grid-cols-2">
        <div className="border-r m-[4px] border-[#46A35833]">
          <h3 className="font-light">Order Number</h3>
          <p className="font-bold">{_id.slice(10)}</p>
        </div>
        <div className="border-r m-[4px] border-[#46A35833]">
          <h3 className="font-light">Date</h3>
          <p className="font-bold">{new Date(created_at).toDateString()}</p>
        </div>
        <div className="border-r m-[4px] border-[#46A35833]">
          <h3 className="font-light">Total</h3>
          {hasCoupon ? (
            <div>
              <p className="font-bold line-through">${total}</p>
              <p className="font-bold">
                $
                {Number(
                  total - Number(total * Number(`0.${discount_for}`)),
                ).toFixed(2) || 0}
              </p>
            </div>
          ) : (
            <p className="font-bold">${total}</p>
          )}
        </div>
        <div className="border-r m-[4px] border-[#46A35833]">
          <h3 className="font-light">More</h3>
          <Tooltip title="Detailed info">
            <h3
              className="text-[#46A358] cursor-pointer"
              onClick={() => {
                dispatch(setTrackOrderModalVisibility());
                dispatch(setTrackOrder(props));
              }}
            >
              Get details
            </h3>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Order;
