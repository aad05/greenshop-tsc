import type { FC } from "react";
import useQueryHandler from "../../../../hooks/useQuery";
import { CategoryType } from "../../../../@types";
import { useLoader } from "../../../../generic/Loader";
import { useSearchParams } from "react-router-dom";

const Dashboard: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { text_based_loader } = useLoader();
  const useQuery = useQueryHandler();
  const { data, isLoading, isError } = useQuery({
    queryURL: "/flower/category",
    queryKEY: "/category",
    method: "GET",
  });

  const paramsType = searchParams.get("type") ?? "all-plants";
  const paramsSort = searchParams.get("sort") ?? "default-sorting";
  const category = searchParams.get("category") ?? "house-plants";

  return (
    <div className="w-[310px] bg-[#F5F5F580] p-[15px]">
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
                  setSearchParams({
                    category: route_path,
                    type: paramsType,
                    sort: paramsSort,
                  })
                }
              >
                <h3>{title}</h3>
                <p>({count})</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Dashboard;
