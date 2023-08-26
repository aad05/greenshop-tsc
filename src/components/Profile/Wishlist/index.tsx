import { FC } from "react";
import Card from "./Card";
import useQueryHandler from "../../../hooks/useQuery";
import { useLoader } from "../../../generic/Loader";
import { MainCardType } from "../../../@types";
import { Empty } from "antd";
// import { Empty } from "antd";

const Wishlist: FC = () => {
  const { card_based_loader } = useLoader();
  const useQuery = useQueryHandler();
  const { data, isLoading, isError } = useQuery({
    queryURL: "/user/wishlist",
    queryKEY: "wishlist",
    method: "GET",
  });
  return isLoading || isError ? (
    <div className="mt-[30px] w-full grid grid-cols-3 gap-4 max-sm:grid-cols-2 ">
      {card_based_loader({ length: 5 })}
    </div>
  ) : !data?.length ? (
    <div className="flex justify-center w-full">
      <Empty
        className="mt-[10px] "
        description={
          <div>
            <h3 className="text-[18px] text-bold">No wishproducts yet...</h3>
          </div>
        }
      />
    </div>
  ) : (
    <div className="mt-[30px] w-full grid grid-cols-3 gap-4 max-sm:grid-cols-2 ">
      {data.map((value: MainCardType) => (
        <Card {...value} key={value._id} />
      ))}
    </div>
  );
};

export default Wishlist;
