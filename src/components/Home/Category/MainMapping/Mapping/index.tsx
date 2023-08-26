import { FC } from "react";
import Card from "./Card";
import useQueryHandler from "../../../../../hooks/useQuery";
import { MainCardType } from "../../../../../@types";
import { useLoader } from "../../../../../generic/Loader";
import { useAppSearchParams } from "../../../../../hooks/useSearchParams";
import { useNavigate } from "react-router-dom";
import { Empty } from "antd";

const Mappping: FC = () => {
  const navigate = useNavigate();
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

  const clickNavigator = ({
    category,
    _id,
  }: {
    category: string;
    _id: string;
  }) => navigate(`/shop/${category}/${_id}`);

  return isLoading || isError ? (
    <div className="mt-[30px] grid grid-cols-3 gap-4 max-sm:grid-cols-2">
      {card_based_loader({ length: 9 })}
    </div>
  ) : !data?.length ? (
    <div className="w-full mt-[50px]">
      <Empty description={"Data is empty."} />
    </div>
  ) : (
    <div className="mt-[30px] grid grid-cols-3 gap-4 max-sm:grid-cols-2">
      {data?.map((value: MainCardType) => (
        <Card
          clickNavigator={() =>
            clickNavigator({
              category: String(category),
              _id: String(value._id),
            })
          }
          key={value._id}
          value={value}
        />
      ))}
    </div>
  );
};

export default Mappping;
