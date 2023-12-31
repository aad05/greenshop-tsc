import { Breadcrumb } from "antd";
import { useNavigate } from "react-router-dom";

type BreadCrumbType =
  | "product_card"
  | "product_view"
  | "product_checkout"
  | "create_blog";

const useBreadCrumbAPI = () => {
  const navigate = useNavigate();

  const type_detect = (type: BreadCrumbType) => {
    switch (type) {
      case "product_view":
        return [
          {
            title: "Home",
            onClick: () => navigate("/"),
            className: "cursor-pointer",
          },
          {
            title: "Shop",
          },
        ];
      case "product_card":
        return [
          {
            title: "Home",
            onClick: () => navigate("/"),
            className: "cursor-pointer",
          },
          {
            title: "Shopping Card",
          },
        ];
      case "product_checkout":
        return [
          {
            title: "Home",
            onClick: () => navigate("/"),
            className: "cursor-pointer",
          },
          {
            title: "Checkout",
          },
        ];
      case "create_blog":
        return [
          {
            title: "Home",
            onClick: () => navigate("/"),
            className: "cursor-pointer",
          },
          {
            title: "Blog",
            onClick: () => navigate("/blog"),
            className: "cursor-pointer",
          },
          {
            title: "Create Blog",
          },
        ];
    }
  };
  return (type: BreadCrumbType) => <Breadcrumb items={type_detect(type)} />;
};

export default useBreadCrumbAPI;
