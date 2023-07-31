import { FC } from "react";
import Card from "./Card";
import useQueryHandler from "../../../../../hooks/useQuery";
import { MainCardType } from "../../../../../@types";
import { useLoader } from "../../../../../generic/Loader";
import { useAppSearchParams } from "../../../../../hooks/useSearchParams";

const Mappping: FC = () => {
  const { getParams } = useAppSearchParams();
  const { card_based_loader } = useLoader();
  const useQuery = useQueryHandler();

  const category = getParams("category");
  const paramsSort = getParams("sort");
  const paramsType = getParams("type");
  const range_min = getParams("range-min");
  const range_max = getParams("range-max");

  const { data, isLoading, isError } = useQuery({
    queryURL: `/flower/category/${category}`,
    queryKEY: `flower/${category}?sort=${paramsSort}&type=${paramsType}&range_min=${range_min}&range_max=${range_max}`,
    method: "GET",
    params: {
      sort: paramsSort,
      type: paramsType,
      range_min,
      range_max,
    },
  });

  return (
    <div className="mt-[30px] grid grid-cols-3 gap-4 max-sm:grid-cols-2">
      {isLoading || isError
        ? card_based_loader({ length: 9 })
        : data?.map((value: MainCardType) => (
            <Card key={value._id} value={value} />
          ))}
    </div>
  );
};

export default Mappping;
