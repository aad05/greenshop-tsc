import { FC } from "react";
import Order from "./Order";
import useQueryHandler from "../../../hooks/useQuery";
import { useLoader } from "../../../generic/Loader";
import { OrderType } from "../../../@types";
import { Empty } from "antd";

const TrackOrder: FC = () => {
  const useQuery = useQueryHandler();
  const { order_based_loader } = useLoader();

  const { data, isLoading, isError } = useQuery({
    queryURL: "/order/get-order",
    queryKEY: "order",
    method: "GET",
  });

  return (
    <div className="p-[15px] w-full">
      <h1 className="font-bold  text-xl mb-[20px]">Track your Orders</h1>
      <div className="flex flex-col gap-3">
        {isLoading || isError ? (
          order_based_loader({ length: 5 })
        ) : !data.length ? (
          <Empty
            className="mt-[10px] "
            description={
              <div>
                <h3 className="text-[18px] text-bold">No tracks yet...</h3>
              </div>
            }
          />
        ) : (
          data.map((value: OrderType) => <Order {...value} key={value._id} />)
        )}
      </div>
    </div>
  );
};

export default TrackOrder;
