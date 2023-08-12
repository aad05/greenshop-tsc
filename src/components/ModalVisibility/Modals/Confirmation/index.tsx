import { Modal } from "antd";
import { FC } from "react";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useRedux";
import { setConfirmationModalVisibility } from "../../../../redux/modalSlice";
import Button from "../../../../generic/Button";
import { useLoader } from "../../../../generic/Loader";

const Confirmation: FC = () => {
  const { IconAndImageBasedLoader } = useLoader();
  const dispatch = useReduxDispatch();
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
          <p className="font-bold">15 Sep, 2021</p>
        </div>
        <div className="border-r m-[4px] border-[#46A35833]">
          <h3 className="font-light">Total</h3>
          <p className="font-bold">2,699.00</p>
        </div>
        <div className="border-r m-[4px] border-[#46A35833]">
          <h3 className="font-light">Payment Method</h3>
          <p className="font-bold">Cash on delivery</p>
        </div>
      </div>
      <h3 className="font-bold mt-[30px] text-xl border-b border-[#46A35880]">
        Order Details
      </h3>
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
      <div className="mt-[20px] flex flex-col gap-3 border-b border-[#46A35880]">
        <div className="flex justify-between">
          <h1>Shipping</h1>
          <h1 className="font-bold text-[#46A358]">$16.00</h1>
        </div>
        <div className="flex justify-between">
          <h1>Total</h1>
          <h1 className="font-bold text-[#46A358]">$2,699.00</h1>
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
