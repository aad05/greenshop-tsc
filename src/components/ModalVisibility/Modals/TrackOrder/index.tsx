import { Modal } from "antd";
import { FC } from "react";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useRedux";
import { setTrackOrderModalVisibility } from "../../../../redux/modalSlice";
import Card from "./Card";

const TrackOrder: FC = () => {
  const dispatch = useReduxDispatch();
  const { track_order } = useReduxSelector((state) => state.shopping);
  const { trackOrderModalVisibility } = useReduxSelector(
    (state) => state.modal,
  );

  const total: number = track_order?.extra_shop_info.total_price ?? 0;
  const hasCoupon: boolean =
    track_order?.extra_shop_info.coupon.has_coupon ?? false;
  const discount_for: number =
    track_order?.extra_shop_info.coupon.discount_for ?? 0;
  const payment_method = track_order?.billing_address?.payment_method
    .replaceAll("-", " ")
    .toUpperCase();

  return (
    <Modal
      open={trackOrderModalVisibility}
      onCancel={() => {
        dispatch(setTrackOrderModalVisibility());
      }}
      title="Detailed Order"
      footer={false}
      width={600}
    >
      <div className="grid grid-cols-4 max-sm:grid-cols-2">
        <div className="border-r m-[4px] border-[#46A35833]">
          <h3 className="font-light">Order Number</h3>
          <p className="font-bold">{track_order?._id.slice(10)}</p>
        </div>
        <div className="border-r m-[4px] border-[#46A35833]">
          <h3 className="font-light">Date</h3>
          <p className="font-bold">{new Date().toDateString()}</p>
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
          <h3 className="font-light">Payment Method</h3>
          <p className="font-bold">{payment_method}</p>
        </div>
      </div>
      <h3 className="font-bold mt-[30px] text-xl border-b border-[#46A35880]">
        Order Details
      </h3>
      <div className="flex flex-col gap-3">
        {track_order?.shop_list.map((value) => (
          <Card key={value._id} {...value} />
        ))}
      </div>
      <div className="mt-[20px] flex flex-col gap-3">
        <div className="flex justify-between">
          <h1>Shipping</h1>
          <h1 className="font-bold text-[#46A358]">$16.00</h1>
        </div>
        <div className="flex justify-between">
          <h1>Total</h1>
          <h1 className="font-bold text-[#46A358]">
            {hasCoupon ? (
              <div>
                <h1 className="text-[#46A358] line-through">${total || 0}</h1>
                <h1 className="text-[#46A358]">
                  $
                  {Number(
                    total - Number(total * Number(`0.${discount_for}`)),
                  ).toFixed(2) || 0}
                </h1>
              </div>
            ) : (
              <h1 className="text-[#46A358]">${total || 0}</h1>
            )}
          </h1>
        </div>
      </div>
    </Modal>
  );
};

export default TrackOrder;
