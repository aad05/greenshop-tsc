import { Select } from "antd";
import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { useLoader } from "../../../../../generic/Loader";
import { useAssets } from "../../../../../hooks/useAssets";

const Header: FC = () => {
  const { controller } = useAssets("icons");
  const { IconAndImageBasedLoader } = useLoader();
  const [searchParams, setSearchParams] = useSearchParams();

  const active_type_style = "pb-[3px] text-[#46A358] border-b border-[#46A358]";
  const paramsType = searchParams.get("type") ?? "all-plants";
  const paramsSort = searchParams.get("sort") ?? "default-sorting";
  const category = searchParams.get("category") ?? "house-plants";

  const paramsHandler = ({
    type = paramsType,
    sort = paramsSort,
  }: {
    type?: string;
    sort?: string;
  }) => {
    setSearchParams({ category, type, sort });
  };

  return (
    <div className="flex justify-between">
      <div className="flex gap-8 p-[5px] max-sm:gap-4">
        <h3
          className={`cursor-pointer font-normal transition-colors ${
            paramsType === "all-plants" && active_type_style
          }`}
          onClick={() => paramsHandler({ type: "all-plants" })}
        >
          All Plants
        </h3>
        <h3
          className={`cursor-pointer font-normal transition-colors ${
            paramsType === "new-arrivals" && active_type_style
          }`}
          onClick={() => paramsHandler({ type: "new-arrivals" })}
        >
          New Arrivvals
        </h3>
        <h3
          className={`cursor-pointer font-normal transition-colors ${
            paramsType === "sale" && active_type_style
          }`}
          onClick={() => paramsHandler({ type: "sale" })}
        >
          Sale
        </h3>
      </div>
      <div className="flex items-center justify-center gap-2 max-lg:hidden">
        <p>Sort by:</p>
        <Select
          onChange={(e) => paramsHandler({ sort: e })}
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
