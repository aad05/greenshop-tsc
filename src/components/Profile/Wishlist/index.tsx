import { FC } from "react";
import Card from "./Card";
import useQueryHandler from "../../../hooks/useQuery";
import { useLoader } from "../../../generic/Loader";
import { MainCardType } from "../../../@types";

const Wishlist: FC = () => {
  const { card_based_loader } = useLoader();
  const useQuery = useQueryHandler();
  const { data, isLoading, isError } = useQuery({
    queryURL: "/user/wishlist",
    queryKEY: "wishlist",
    method: "GET",
  });
  return (
    <div className="mt-[30px] w-full grid grid-cols-3 gap-4 max-sm:grid-cols-2 ">
      {isLoading || isError
        ? card_based_loader({ length: 5 })
        : data.map((value: MainCardType) => (
            <Card {...value} key={value._id} />
          ))}
    </div>
  );
};

export default Wishlist;
