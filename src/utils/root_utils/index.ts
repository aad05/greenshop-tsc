import React, { FC } from "react";
import AccountDetails from "../../components/Profile/AccountDetails";
import MyProducts from "../../components/Profile/MyProducts";
import Address from "../../components/Profile/Address";
import Wishlist from "../../components/Profile/Wishlist";
import {
  UserOutlined,
  HeartOutlined,
  ShoppingOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

type dashboard_items = {
  path: string;
  Icon: React.ForwardRefExoticComponent<any>;
  Component: FC;
  title: string;
};

export const dashboard_mock: dashboard_items[] = [
  {
    path: "",
    Icon: UserOutlined,
    Component: AccountDetails,
    title: "Account Details",
  },
  {
    path: "my-products",
    Icon: ShoppingOutlined,
    Component: MyProducts,
    title: "My Products",
  },
  {
    path: "address",
    Icon: EnvironmentOutlined,
    Component: Address,
    title: "Address",
  },
  {
    path: "wishlist",
    Icon: HeartOutlined,
    Component: Wishlist,
    title: "Wishlist",
  },
];
