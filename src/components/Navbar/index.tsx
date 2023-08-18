import { FC } from "react";
import { useAssets } from "../../hooks/useAssets";
import { useReduxDispatch, useReduxSelector } from "../../hooks/useRedux";
import {
  setAuthModalVisibility,
  setSiteMapModalVisbility,
} from "../../redux/modalSlice";
import { useAuthUser } from "react-auth-kit";
import { useAuthDecider } from "../../tools/authDecider";
import { Badge } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import Footer from "../Footer";
import ModalVisibility from "../ModalVisibility";

const Navbar: FC = () => {
  const { data } = useReduxSelector((state) => state.shopping);
  const navigate = useNavigate();
  const authedUser = useAuthUser();
  const dispatch = useReduxDispatch();
  const { auth_decider_func, auth_decider_html } = useAuthDecider();
  const { logo } = useAssets("icons");

  const userData = authedUser();

  return (
    <div className="w-4/5 m-auto max-sm:w-full">
      <ModalVisibility />
      <div className="p-8 flex align-center border-b border-[#46A358]">
        <div className="flex-1">
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt="logo"
            className="cursor-pointer"
          />
        </div>
        <div className="flex-1 flex justify-center gap-8 max-sm:hidden">
          <h3 className="cursor-pointer" onClick={() => navigate("/")}>
            Home
          </h3>
          <h3 className="cursor-pointer">Shop</h3>
        </div>
        <div className="flex-1 justify-end flex gap-8 max-sm:hidden">
          <SearchOutlined className="cursor-pointer text-[20px]" />
          <Badge count={data.length} className="mt-[5px]">
            <ShoppingCartOutlined
              onClick={() => navigate("/product-card")}
              className="cursor-pointer text-[25px]"
            />
          </Badge>
          <button
            onClick={() =>
              auth_decider_func({
                withoutAuth: () =>
                  dispatch(
                    setAuthModalVisibility({ open: true, loading: false }),
                  ),
                withAuth: () => navigate("/profile"),
              })
            }
            className="bg-[#46A358] flex rounded-md w-24 items-center justify-center gap-1 h-9 text-base text-white cursor-pointer"
          >
            {auth_decider_html({
              withAuth: <>{userData?.name}</>,
              withoutAuth: (
                <>
                  <LoginOutlined className="text-[20px]" />
                  Login
                </>
              ),
            })}
          </button>
        </div>
        <div className="hidden flex-1 justify-end gap-8 max-sm:flex">
          <SearchOutlined className="cursor-pointer text-[20px]" />
          <Badge count={data.length} className="mt-[5px]">
            <ShoppingCartOutlined
              onClick={() => navigate("/product-card")}
              className="cursor-pointer text-[25px]"
            />
          </Badge>
          <MenuOutlined
            className="cursor-pointer text-[20px]"
            onClick={() => dispatch(setSiteMapModalVisbility())}
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
