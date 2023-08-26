import { FC } from "react";
import { useLoader } from "../../../../generic/Loader";
import useQueryHandler from "../../../../hooks/useQuery";
import { useParams } from "react-router-dom";
import Card from "./Card";
import { MainCardType } from "../../../../@types";
import { Empty } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Products: FC = () => {
  const { _id } = useParams();
  const useQuery = useQueryHandler();
  const { card_based_loader } = useLoader();
  const { data, isLoading, isError } = useQuery({
    queryURL: "/user/products",
    queryKEY: `/user-${_id}/products`,
    method: "GET",
    params: {
      access_token: _id,
    },
  });

  return (
    <div>
      <div className="mt-[30px] w-full grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-sm:grid-cols-2">
        {isLoading || isError
          ? card_based_loader({ length: 10 })
          : data.map((v: MainCardType) => <Card key={v._id} {...v} />)}
      </div>
      {isLoading ||
        (!data?.length && (
          <div className="h-[400px] flex flex-col items-center justify-center">
            <Empty
              description={
                <div>
                  <h3 className="text-[18px] text-bold">
                    <ShoppingCartOutlined /> No products yet...
                  </h3>
                  <p></p>
                </div>
              }
            />
          </div>
        ))}
    </div>
  );
};

export default Products;
