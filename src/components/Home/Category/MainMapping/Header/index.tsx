import { Select } from "antd";
import { FC } from "react";
import { useLoader } from "../../../../../generic/Loader";
import { useAssets } from "../../../../../hooks/useAssets";
import { useReduxDispatch } from "../../../../../hooks/useRedux";
import { setDashboardModalVisibility } from "../../../../../redux/modalSlice";
import { useAppSearchParams } from "../../../../../hooks/useSearchParams";

const Header: FC = () => {
  const { getParams, setParams } = useAppSearchParams();
  const { controller } = useAssets("icons");
  const { IconAndImageBasedLoader } = useLoader();
  const dispatch = useReduxDispatch();

  const active_type_style = "pb-[3px] text-[#46A358] border-b border-[#46A358]";
  const paramsType = getParams("type");
  const paramsSort = getParams("sort");

  return (
    <div className="flex justify-between">
      <div className="flex gap-8 p-[5px] max-sm:gap-4">
        <h3
          className={`cursor-pointer font-normal transition-colors ${
            paramsType === "all-plants" && active_type_style
          }`}
          onClick={() => setParams({ type: "all-plants" })}
        >
          All Plants
        </h3>
        <h3
          className={`cursor-pointer font-normal transition-colors ${
            paramsType === "new-arrivals" && active_type_style
          }`}
          onClick={() => setParams({ type: "new-arrivals" })}
        >
          New Arrivvals
        </h3>
        <h3
          className={`cursor-pointer font-normal transition-colors ${
            paramsType === "sale" && active_type_style
          }`}
          onClick={() => setParams({ type: "sale" })}
        >
          Sale
        </h3>
      </div>
      <div className="flex items-center justify-center gap-2 max-lg:hidden">
        <p>Sort by:</p>
        <Select
          onChange={(e) => setParams({ sort: e })}
          defaultValue={paramsSort || "default-sorting"}
          options={[
            {
              label: "Default Sorting",
              value: "default-sorting",
            },
            {
              label: "The Cheapest",
              value: "the-cheapest",
            },
            {
              label: "Most Expensive",
              value: "most-expensive",
            },
          ]}
        />
      </div>
      <div className="hidden max-lg:flex">
        <IconAndImageBasedLoader
          onClick={() => dispatch(setDashboardModalVisibility())}
          src={controller}
          alt="controller"
          type="icon"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
