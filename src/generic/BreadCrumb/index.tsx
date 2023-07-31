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

  return { ProductViewCrumb };
};

export default useBreadCrumbAPI;
