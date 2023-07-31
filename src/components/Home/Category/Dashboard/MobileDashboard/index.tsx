import { Modal, Slider } from "antd";
import { FC, useState } from "react";
import {
  useReduxDispatch,
  useReduxSelector,
} from "../../../../../hooks/useRedux";
import { setDashboardModalVisibility } from "../../../../../redux/modalSlice";
import useQueryHandler from "../../../../../hooks/useQuery";
import { useSearchParams } from "react-router-dom";
import { CategoryType } from "../../../../../@types";
import { useLoader } from "../../../../../generic/Loader";

const MobileDashboard: FC = () => {
  const [range_value, setRangeValue] = useState<[number, number]>([0, 1000]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { text_based_loader } = useLoader();
  const dispatch = useReduxDispatch();
  const useQuery = useQueryHandler();
  const { dashboardModalVisibility } = useReduxSelector((state) => state.modal);

  const { data, isLoading, isError } = useQuery({
    queryURL: "/flower/category",
    queryKEY: "/category",
    method: "GET",
  });

  const paramsType = searchParams.get("type") ?? "all-plants";
  const paramsSort = searchParams.get("sort") ?? "default-sorting";
  const category = searchParams.get("category") ?? "house-plants";
  const range_min = searchParams.get("range-min") ?? "0";
  const range_max = searchParams.get("price-max") ?? "1000";

  return (
    <Modal
      title="Dashboard"
      open={dashboardModalVisibility}
      onCancel={() => dispatch(setDashboardModalVisibility())}
      footer={false}
    >
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
                onClick={() => {
                  dispatch(setDashboardModalVisibility());
                  setSearchParams({
                    category: route_path,
                    type: paramsType,
                    sort: paramsSort,
                    "range-min": range_min,
                    "range-max": range_max,
                  });
                }}
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
          defaultValue={[0, 1000]}
          max={1000}
          onChange={(e) => setRangeValue(e)}
        />
        <p className="font-normal">
          Price:{" "}
          <span className="font-bold text-[#46A358]">
            {range_value[0]}$ - {range_value[1]}$
          </span>
        </p>
        <button className="mt-[16px] bg-[#46A358] text-white px-[23px] py-[8px] rounded-lg">
          Filter
        </button>
      </div>
    </Modal>
  );
};

export default MobileDashboard;
