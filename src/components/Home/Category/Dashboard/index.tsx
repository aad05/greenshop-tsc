import { FC, useState } from "react";
import useQueryHandler from "../../../../hooks/useQuery";
import { CategoryType } from "../../../../@types";
import { useLoader } from "../../../../generic/Loader";
import { Slider } from "antd";
import Discount from "./Discount";
import MobileDashboard from "./MobileDashboard";
import { useAppSearchParams } from "../../../../hooks/useSearchParams";

const Dashboard: FC = () => {
  const { getParams, setParams } = useAppSearchParams();
  const [range_value, setRangeValue] = useState<[number, number]>([
    Number(getParams("range-min")),
    Number(getParams("range-max")),
  ]);
  const { text_based_loader } = useLoader();
  const useQuery = useQueryHandler();
  const { data, isLoading, isError } = useQuery({
    queryURL: "/flower/category",
    queryKEY: "/category",
    method: "GET",
  });

  const category = getParams("category");
  const range_min = getParams("range-min");
  const range_max = getParams("range-max");

  return (
    <div className="w-[310px] bg-[#F5F5F580] p-[15px] max-lg:hidden">
      <MobileDashboard />
      <h3 className="font-bold">Categories</h3>
      <div className="flex flex-col gap-4 mt-[10px] pl-[10px]">
        {isLoading || isError
          ? text_based_loader({ length: 9 })
          : data.map(({ title, count, _id, route_path }: CategoryType) => (
              <div
                key={_id}
                className={`flex w-full justify-between text-base font-normal cursor-pointer hover:text-[#46A358] transition-colors ${
                  category === route_path && "text-[#46A358]"
                }`}
                onClick={() =>
                  setParams({
                    category: route_path,
                  })
                }
              >
                <h3>{title}</h3>
                <p>({count})</p>
              </div>
            ))}
      </div>
      <div className="mt-[15px]">
        <h3 className="font-bold">Price Range</h3>
        <Slider
          range
          defaultValue={[Number(range_min), Number(range_max)]}
          max={1000}
          onChange={(e) => setRangeValue(e)}
        />
        <p className="font-normal">
          Price:{" "}
          <span className="font-bold text-[#46A358]">
            {range_value[0]}$ - {range_value[1]}$
          </span>
        </p>
        <button
          onClick={() =>
            setParams({
              "range-min": String(range_value[0]),
              "range-max": String(range_value[1]),
            })
          }
          className="mt-[16px] bg-[#46A358] text-white px-[23px] py-[8px] rounded-lg"
        >
          Filter
        </button>
      </div>
      <Discount />
    </div>
  );
};

export default Dashboard;
