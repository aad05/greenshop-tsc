import { FC } from "react";
import { useAssets } from "../../hooks/useAssets";
import SiteMap from "./Site_map";
import { useReduxDispatch } from "../../hooks/useRedux";
import {
  setAuthModalVisibility,
  setSiteMapModalVisbility,
} from "../../redux/modalSlice";
import { useAuthUser } from "react-auth-kit";
import { useAuthDecider } from "../../tools/authDecider";
import { useLoader } from "../../generic/Loader";
import { Badge } from "antd";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const Navbar: FC = () => {
  const { IconAndImageBasedLoader } = useLoader();
  const authedUser = useAuthUser();
  const dispatch = useReduxDispatch();
  const { auth_decider_func, auth_decider_html } = useAuthDecider();
  const { logo, logout, basket, search, hamburger_menu } = useAssets("icons");

  const userData = authedUser();

  return (
    <div className="w-4/5 m-auto max-sm:w-full">
      <div className="p-8 flex align-center border-b border-[#46A358]">
        <SiteMap />
        <div className="flex-1">
          <img src={logo} alt="logo" className="cursor-pointer" />
        </div>
        <div className="flex-1 flex justify-center gap-8 max-sm:hidden">
          <h3 className="cursor-pointer">Home</h3>
          <h3 className="cursor-pointer">Shop</h3>
        </div>
        <div className="flex-1 justify-end flex gap-8 max-sm:hidden">
          <IconAndImageBasedLoader
            type="icon"
            alt="search"
            className="cursor-pointer"
            src={search}
          />
          <Badge count={5} className="mt-[5px]">
            <IconAndImageBasedLoader
              type="icon"
              src={basket}
              alt="basket"
              className="cursor-pointer"
            />
          </Badge>
          <button
            onClick={() =>
              auth_decider_func({
                withoutAuth: () =>
                  dispatch(
                    setAuthModalVisibility({ open: true, loading: false }),
                  ),
              })
            }
            className="bg-[#46A358] flex rounded-md w-24 items-center justify-center gap-1 h-9 text-base text-white cursor-pointer"
          >
            {auth_decider_html({
              withAuth: <>{userData?.name}</>,
              withoutAuth: (
                <>
                  <IconAndImageBasedLoader
                    type="icon"
                    className="w-5 h-5"
                    src={logout}
                    alt="logout-icon"
                  />{" "}
                  Login
                </>
              ),
            })}
          </button>
        </div>
        <div className="hidden flex-1 justify-end gap-8 max-sm:flex">
          <IconAndImageBasedLoader
            type="icon"
            className="cursor-pointer w-5 h-5"
            src={search}
            alt="search"
          />
          <IconAndImageBasedLoader
            type="icon"
            src={basket}
            alt="basket"
            className="cursor-pointer w-5 h-5"
          />
          <IconAndImageBasedLoader
            type="icon"
            onClick={() => dispatch(setSiteMapModalVisbility())}
            src={hamburger_menu}
            alt="hamburger_menu"
            className="cursor-pointer w-5 h-5"
          />
        </div>
      </div>
      <div className="max-sm:mx-[10px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Navbar;
