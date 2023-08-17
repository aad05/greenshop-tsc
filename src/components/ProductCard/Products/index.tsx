import { FC } from "react";

import { useReduxSelector } from "../../../hooks/useRedux";
import Card from "./Card";
import { Empty } from "antd";
import Button from "../../../generic/Button";
import { useNavigate } from "react-router-dom";

const Products: FC = () => {
  const navigate = useNavigate();
  const { data } = useReduxSelector((state) => state.shopping);
  return (
    <div className="w-[65%] max-lg:w-[100%]">
      <div className="pb-[11px] border-b border-[#46A35880] flex max-lg:hidden">
        <h3 className="w-[40%]">Products</h3>
        <h3 className="w-[20%]">Price</h3>
        <h3 className="w-[20%]">Quantity</h3>
        <h3 className="w-[20%]">Total</h3>
      </div>
      <div className="flex flex-col gap-5 mt-[11px]">
        {data.length ? (
          data.map((value) => <Card key={value._id} {...value} />)
        ) : (
          <div className="w-[100%] flex flex-col items-center">
            <Empty />
            <Button
              onClick={() => navigate("/")}
              className="h-[40px] px-[10px] mt-[10px]"
            >
              LET'S SHOP
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
