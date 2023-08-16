import type { FC } from "react";
import { Modal } from "antd";
import { useAssets } from "../../../../hooks/useAssets";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useRedux";
import {
  setAuthModalVisibility,
  setSiteMapModalVisbility,
} from "../../../../redux/modalSlice";
import { useAuthUser } from "react-auth-kit";
import { useAuthDecider } from "../../../../tools/authDecider";
import { useLoader } from "../../../../generic/Loader";
import { dashboard_mock } from "../../../../utils/root_utils";
import { useLocation, useNavigate } from "react-router-dom";

const SiteNap: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { IconAndImageBasedLoader } = useLoader();
  const { siteMapModalVisibility } = useReduxSelector((state) => state.modal);
  const { auth_decider_func, auth_decider_html } = useAuthDecider();
  const { logout } = useAssets("icons");
  const authedUser = useAuthUser();
  const dispatch = useReduxDispatch();

  const userData = authedUser();

  const active_style =
    "border-l-[5px] border-[#46A358] text-[#46A358] text-bold bg-white";

  return (
    <Modal
      title="Site map"
      footer={false}
      open={siteMapModalVisibility}
      onCancel={() => dispatch(setSiteMapModalVisbility())}
    >
      <div>
        <div
          onClick={() => {
            navigate("/");
            dispatch(setSiteMapModalVisbility());
          }}
          className={`transition flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] hover:bg-white hover:border-l-[5px] hover:border-[#46A358] hover:text-[#46A358] hover:text-bold ${
            `${pathname}` === "/" && active_style
          }`}
        >
          <h3 className="font-normal text-base">Home</h3>
        </div>
        <div className="transition flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] hover:bg-white hover:border-l-[5px] hover:border-[#46A358] hover:text-[#46A358] hover:text-bold">
          <h3 className="font-normal text-base">Shop</h3>
        </div>
        <div className="mt-[15px]">
          <h3 className="text-[#46A358] font-bold text-xl">Profile</h3>
          <div className="flex flex-col gap-3 border-b border-[#46A35880] pb-[35px]">
            {dashboard_mock.map(({ Icon, title, path }) => (
              <div
                onClick={() => {
                  navigate(`/profile/${path}`);
                  dispatch(setSiteMapModalVisbility());
                }}
                className={`transition flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] hover:bg-white hover:border-l-[5px] hover:border-[#46A358] hover:text-[#46A358] hover:text-bold ${
                  `${pathname.slice(9)}` === `${path}` &&
                  pathname.includes("/profile") &&
                  active_style
                }`}
              >
                <Icon />
                <h3 className="font-normal text-base">{title}</h3>
              </div>
            ))}
          </div>
        </div>
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
              <IconAndImageBasedLoader type="icon" src={logout} alt="logout" />{" "}
              Login
            </>
          ),
        })}
      </button>
    </Modal>
  );
};

export default SiteNap;
