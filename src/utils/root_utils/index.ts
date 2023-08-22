import React, { FC } from "react";
import {
  UserOutlined,
  HeartOutlined,
  ShoppingOutlined,
  EnvironmentOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import Home from "../../pages/home";
import AccountDetails from "../../components/Profile/AccountDetails";
import ProductView from "../../pages/product_view";
import ProductCard from "../../pages/product_card";
import ProductCheckout from "../../pages/product_checkout";
import Profile from "../../pages/profile";
import MyProducts from "../../components/Profile/MyProducts";
import Address from "../../components/Profile/Address";
import Wishlist from "../../components/Profile/Wishlist";
import TrackOrder from "../../components/Profile/TrackOrder";

type main_route_type = {
  id: number;
  path: string;
  Component: FC;
  hasChild?: boolean;
  children?: dashboard_items[];
  shouldAuth?: boolean;
};

type dashboard_items = {
  id: number;
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
    id: 0,
  },
  {
    path: "my-products",
    Icon: ShoppingOutlined,
    Component: MyProducts,
    title: "My Products",
    id: 1,
  },
  {
    path: "address",
    Icon: EnvironmentOutlined,
    Component: Address,
    title: "Address",
    id: 2,
  },
  {
    path: "wishlist",
    Icon: HeartOutlined,
    Component: Wishlist,
    title: "Wishlist",
    id: 3,
  },
  {
    path: "track-order",
    Icon: DashboardOutlined,
    Component: TrackOrder,
    title: "Track Order",
    id: 4,
  },
];

export const main_route: main_route_type[] = [
  {
    id: 0,
    path: "/",
    Component: Home,
  },
  {
    id: 1,
    path: "/shop/:category/:_id",
    Component: ProductView,
  },
  {
    id: 2,
    path: "/product-card",
    Component: ProductCard,
  },
  {
    id: 3,
    path: "/product-checkout",
    Component: ProductCheckout,
  },
  {
    id: 4,
    path: "/profile",
    Component: Profile,
    hasChild: true,
    children: dashboard_mock,
    shouldAuth: true,
  },
];
