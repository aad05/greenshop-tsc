import { Modal } from "antd";
import type { FC } from "react";
import { useAssets } from "../../../hooks/useAssets";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import { setSiteMapModalVisbility } from "../../../redux/modalSlice";

const SiteNap: FC = () => {
  const { siteMapModalVisibility } = useReduxSelector((state) => state.modal);
  const dipatch = useReduxDispatch();
  const { logout } = useAssets("icons");
  return (
    <Modal
      title="Site map"
      footer={false}
      open={siteMapModalVisibility}
      onCancel={() => dipatch(setSiteMapModalVisbility())}
    >
      <div>
        <h3>Home</h3>
        <h3>Shop</h3>
      </div>
      <button className="bg-[#46A358] flex rounded-md w-4/5 m-auto items-center justify-center gap-1 h-9 text-base text-white mt-3">
        <img src={logout} alt="logout" /> Logout
      </button>
    </Modal>
  );
};

export default SiteNap;
