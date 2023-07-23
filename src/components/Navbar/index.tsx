import type { FC } from "react";
import { useAssets } from "../../hooks/useAssets";
import SiteNap from "./Site_map";
import { useReduxDispatch } from "../../hooks/useRedux";
import {
  setAuthModalVisibility,
  setSiteMapModalVisbility,
} from "../../redux/modalSlice";

const Navbar: FC = () => {
  const dispatch = useReduxDispatch();
  const { logo, logout, basket, search, hamburger_menu } = useAssets("icons");

  return (
    <div className="p-8 flex align-center border-b border-[#46A358]">
      <SiteNap />
      <div className="flex-1">
        <img src={logo} alt="logo" className="cursor-pointer" />
      </div>
      <div className="flex-1 flex justify-center gap-8 max-sm:hidden">
        <h3 className="cursor-pointer">Home</h3>
        <h3 className="cursor-pointer">Shop</h3>
      </div>
      <div className="flex-1 justify-end flex gap-8 max-sm:hidden">
        <img src={search} alt="search" className="cursor-pointer" />
        <img src={basket} alt="basket" className="cursor-pointer" />
        <button
          onClick={() => dispatch(setAuthModalVisibility())}
          className="bg-[#46A358] flex rounded-md w-24 items-center justify-center gap-1 h-9 text-base text-white cursor-pointer"
        >
          <img className="w-5 h-5" src={logout} alt="logout-icon" /> Login
        </button>
      </div>
      <div className="hidden flex-1 justify-end gap-8 max-sm:flex">
        <img src={search} alt="search" className="cursor-pointer w-5 h-5" />
        <img src={basket} alt="basket" className="cursor-pointer w-5 h-5" />
        <img
          onClick={() => dispatch(setSiteMapModalVisbility())}
          src={hamburger_menu}
          alt="hamburger_menu"
          className="cursor-pointer w-5 h-5"
        />
      </div>
    </div>
  );
};

export default Navbar;
