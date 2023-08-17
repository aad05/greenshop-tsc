import { Modal } from "antd";
import { FC } from "react";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useRedux";
import { setConfirmationModalVisibility } from "../../../../redux/modalSlice";
import Button from "../../../../generic/Button";
import Card from "./Card";

const Confirmation: FC = () => {
  const dispatch = useReduxDispatch();
  const { data } = useReduxSelector((state) => state.shopping);
  const { confirmationModalVisibility } = useReduxSelector(
    (state) => state.modal,
  );
  return (
    <Modal
      open={confirmationModalVisibility}
      onCancel={() => dispatch(setConfirmationModalVisibility())}
      title="Order Confirmation"
      footer={false}
      width={600}
    >
      <div className="grid grid-cols-4 max-sm:grid-cols-2">
        <div className="border-r m-[4px] border-[#46A35833]">
          <h3 className="font-light">Order Number</h3>
          <p className="font-bold">19586687</p>
        </div>
        <div className="border-r m-[4px] border-[#46A35833]">
          <h3 className="font-light">Date</h3>
          <p className="font-bold">{new Date().toDateString()}</p>
        </div>
        <div className="border-r m-[4px] border-[#46A35833]">
          <h3 className="font-light">Total</h3>
          <p className="font-bold">
            $
            {Number(
              data.reduce(
                (acc, currentValue) =>
                  Number(currentValue?.count) * Number(currentValue?.price) +
                  acc,
                0,
              ),
            ).toFixed(2)}
          </p>
        </div>
        <div className="border-r m-[4px] border-[#46A35833]">
          <h3 className="font-light">Payment Method</h3>
          <p className="font-bold">Cash on delivery</p>
        </div>
      </div>
      <h3 className="font-bold mt-[30px] text-xl border-b border-[#46A35880]">
        Order Details
      </h3>
      <div className="flex flex-col gap-3">
        {data.map((value) => (
          <Card key={value._id} {...value} />
        ))}
      </div>
      <div className="mt-[20px] flex flex-col gap-3 border-b border-[#46A35880]">
        <div className="flex justify-between">
          <h1>Shipping</h1>
          <h1 className="font-bold text-[#46A358]">$16.00</h1>
        </div>
        <div className="flex justify-between">
          <h1>Total</h1>
          <h1 className="font-bold text-[#46A358]">
            $
            {Number(
              data.reduce(
                (acc, currentValue) =>
                  Number(currentValue?.count) * Number(currentValue?.price) +
                  acc,
                0,
              ),
            ).toFixed(2)}
          </h1>
        </div>
      </div>
      <p className="w-4/5 text-center m-auto mt-[16px]">
        Your order is currently being processed. You will receive an order
        confirmation email shortly with the expected delivery date for your
        items.
      </p>
      <Button className="m-auto mt-[50px] w-[145px] h-[45px]">
        Track your order
      </Button>
    </Modal>
  );
};

export default Confirmation;
