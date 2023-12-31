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
import User from "../../components/User";
import About from "../../components/User/Body/About";
import Products from "../../components/User/Body/Products";
import Posts from "../../components/User/Body/Posts";
import Likees from "../../components/User/Body/Likees";
import Followers from "../../components/User/Body/Followers";
import Blog from "../../pages/blog";
import CreateBlog from "../../components/Blog/Create";
import Rendering from "../../components/Blog/Rendering";

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

export type ProfleTabType = {
  key: string;
  label: string;
  Children: FC;
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
    path: "/blog",
    Component: Blog,
  },
  {
    id: 2,
    path: "/blog/create-blog",
    Component: CreateBlog,
    shouldAuth: true,
  },
  {
    id: 3,
    path: "/blog/:created_by/:_id",
    Component: Rendering,
  },
  {
    id: 4,
    path: "/shop/:category/:_id",
    Component: ProductView,
  },
  {
    id: 5,
    path: "/product-card",
    Component: ProductCard,
  },
  {
    id: 6,
    path: "/product-checkout",
    Component: ProductCheckout,
  },
  {
    id: 7,
    path: "/profile",
    Component: Profile,
    hasChild: true,
    children: dashboard_mock,
    shouldAuth: true,
  },
  {
    id: 8,
    path: "/user/:_id",
    Component: User,
  },
];

export const profile_tab_items: ProfleTabType[] = [
  {
    key: "1",
    label: "About",
    Children: About,
  },
  {
    key: "2",
    label: "Products",
    Children: Products,
  },
  {
    key: "3",
    label: "Posts",
    Children: Posts,
  },
  {
    key: "4",
    label: "Likees",
    Children: Likees,
  },
  {
    key: "5",
    label: "Followers",
    Children: Followers,
  },
];
