import { Breadcrumb } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const useBreadCrumbAPI = () => {
  const navigate = useNavigate();

  const ProductViewCrumb: FC = () => (
    <Breadcrumb
      items={[
        {
          title: "Home",
          onClick: () => navigate("/"),
          className: "cursor-pointer",
        },
        {
          title: "Shop",
        },
      ]}
    />
  );
  const ProductCardCrumb: FC = () => (
    <Breadcrumb
      items={[
        {
          title: "Home",
          onClick: () => navigate("/"),
          className: "cursor-pointer",
        },
        {
          title: "Shop Card",
        },
      ]}
    />
  );

  return { ProductViewCrumb, ProductCardCrumb };
};

export default useBreadCrumbAPI;
