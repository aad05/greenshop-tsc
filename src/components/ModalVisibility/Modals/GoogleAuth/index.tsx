import { FC } from "react";
import { useReduxSelector } from "../../../../hooks/useRedux";
import { Modal, Spin } from "antd";

const GoogleAuthModal: FC = () => {
  const { googleAuthModalVisibility } = useReduxSelector(
    (state) => state.modal,
  );
  return (
    <Modal
      footer={false}
      open={googleAuthModalVisibility}
      title="Google Authentication"
      closable={false}
    >
      <div className="w-full flex flex-col justify-center items-center">
        <Spin size="large" className="mt-[30px]" />
        <h3 className="font-bold mt-[10px]">Authentication in process</h3>
        <p className="mt-[10px] mb-[20px]">
          It might take a few seconds, for collecting your credentials!
        </p>
      </div>
    </Modal>
  );
};

export default GoogleAuthModal;
