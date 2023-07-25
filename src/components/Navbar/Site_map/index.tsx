import type { FC } from "react";
import { Modal } from "antd";
import { useAssets } from "../../../hooks/useAssets";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import {
  setAuthModalVisibility,
  setSiteMapModalVisbility,
} from "../../../redux/modalSlice";
import { useAuthUser } from "react-auth-kit";
import { useAuthDecider } from "../../../tools/authDecider";

const SiteNap: FC = () => {
  const { siteMapModalVisibility } = useReduxSelector((state) => state.modal);
  const { auth_decider_func, auth_decider_html } = useAuthDecider();
  const { logout } = useAssets("icons");
  const authedUser = useAuthUser();
  const dispatch = useReduxDispatch();

  const userData = authedUser();

  return (
    <Modal
      title="Site map"
      footer={false}
      open={siteMapModalVisibility}
      onCancel={() => dispatch(setSiteMapModalVisbility())}
    >
      <div>
        <h3>Home</h3>
        <h3>Shop</h3>
      </div>
      <button
        onClick={() => {
          auth_decider_func({
            withoutAuth: () =>
              dispatch(setAuthModalVisibility({ open: true, loading: false })),
          });
          dispatch(setSiteMapModalVisbility());
        }}
        className="bg-[#46A358] flex rounded-md w-4/5 m-auto items-center justify-center gap-1 h-9 text-base text-white mt-3"
      >
        {auth_decider_html({
          withAuth: <>{userData?.name}</>,
          withoutAuth: (
            <>
              <img src={logout} alt="logout" /> Login
            </>
          ),
        })}
      </button>
    </Modal>
  );
};

export default SiteNap;
