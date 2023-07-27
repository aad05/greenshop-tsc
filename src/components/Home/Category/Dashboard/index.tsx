import type { FC } from "react";
import useQueryHandler from "../../../../hooks/useQuery";
import { CategoryType } from "../../../../@types";
import { useLoader } from "../../../../generic/Loader";

const Dashboard: FC = () => {
  const { text_based_loader } = useLoader();
  const useQuery = useQueryHandler();
  const { data, isLoading, isError } = useQuery({
    queryURL: "/flower/category",
    queryKEY: "/category",
    method: "GET",
  });

  return (
    <div className="w-[310px] bg-[#F5F5F580] p-[15px]">
      <h3 className="font-bold">Categories</h3>
      <div className="flex flex-col gap-4 mt-[10px] pl-[10px]">
        {isLoading || isError
          ? text_based_loader({ length: 9 })
          : data.map(({ title, count, _id }: CategoryType) => (
              <div
                key={_id}
                className="flex w-full justify-between text-base font-normal cursor-pointer hover:text-[#46A358] transition-colors"
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
