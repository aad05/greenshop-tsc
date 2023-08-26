import { FC } from "react";
import { useLoader } from "../../../../generic/Loader";
import useQueryHandler from "../../../../hooks/useQuery";
import { useParams } from "react-router-dom";
import Card from "./Card";
import { MainCardType } from "../../../../@types";

const Products: FC = () => {
  const { _id } = useParams();
  const useQuery = useQueryHandler();
  const { card_based_loader } = useLoader();
  const { data, isLoading, isError } = useQuery({
    queryURL: "/user/products",
    queryKEY: `/user-${_id}/products`,
    method: "GET",
  });

  return (
    <div className="mt-[30px] w-full grid grid-cols-3 gap-4 max-sm:grid-cols-2 ">
      {isLoading || isError
        ? card_based_loader({ length: 10 })
        : data.map((v: MainCardType) => <Card key={v._id} {...v} />)}
    </div>
  );
};

export default Products;
