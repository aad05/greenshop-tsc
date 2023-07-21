import type { FC } from "react";
import { useAssets } from "../../hooks/useAssets";

const Navbar: FC = () => {
  const { logo, logout } = useAssets("icons");

  return (
    <div className="p-8 flex align-center border-b border-[#46A358]">
      <div className="flex-1">
        <img src={logo} alt="logo" className="cursor-pointer" />
      </div>
      <div className="flex-1 flex justify-center gap-8">
        <h3 className="cursor-pointer">Home</h3>
        <h3 className="cursor-pointer">Shop</h3>
      </div>
      <div className="flex-1 justify-end flex">
        <button className="bg-[#46A358] flex rounded-md w-24 items-center justify-center gap-1 h-9 text-base text-white">
          <img className="w-5 h-5" src={logout} alt="logout-icon" /> Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
