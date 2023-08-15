import { FC } from "react";
import { useLoader } from "../../../generic/Loader";

import { useAssets } from "../../../hooks/useAssets";

const Dashboard: FC = () => {
  const { user, product, location_black, heart, logout_black } =
    useAssets("icons");
  const { IconAndImageBasedLoader } = useLoader();

  return (
    <div className="bg-[#FBFBFB] w-[310px] my-[62px] text-xl p-[15px]">
      <h1 className="font-bold">My Account</h1>
      <div className="flex flex-col gap-3 mt-[15px] border-b border-[#46A35880] pb-[35px]">
        <div className="transition flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] hover:bg-white hover:border-l-[5px] hover:border-[#46A358]">
          <IconAndImageBasedLoader
            className="w-[20px] h-[20px]"
            type="icon"
            src={user}
            alt="user"
          />
          <h3 className="font-normal text-base">Account Details</h3>
        </div>
        <div className="transition flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] hover:bg-white hover:border-l-[5px] hover:border-[#46A358]">
          <IconAndImageBasedLoader
            className="w-[20px] h-[20px]"
            type="icon"
            src={product}
            alt="product"
          />
          <h3 className="font-normal text-base">My Products</h3>
        </div>
        <div className="transition flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] hover:bg-white hover:border-l-[5px] hover:border-[#46A358]">
          <IconAndImageBasedLoader
            className="w-[20px] h-[20px]"
            type="icon"
            src={location_black}
            alt="location_black"
          />
          <h3 className="font-normal text-base">Address</h3>
        </div>
        <div className="transition flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] hover:bg-white hover:border-l-[5px] hover:border-[#46A358]">
          <IconAndImageBasedLoader
            className="w-[20px] h-[20px]"
            type="icon"
            src={heart}
            alt="heart"
          />
          <h3 className="font-normal text-base">Wishlist</h3>
        </div>
      </div>
      <div className="flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] mt-[20px]">
        <IconAndImageBasedLoader
          className="w-[20px] h-[20px]"
          type="icon"
          src={logout_black}
          alt="logout_black"
        />
        <h3 className="font-normal text-base">Log out</h3>
      </div>
    </div>
  );
};

export default Dashboard;
