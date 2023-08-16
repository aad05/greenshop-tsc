import { FC } from "react";
import { Skeleton } from "antd";
import { useLoader } from "../../../../../generic/Loader";
import useQueryHandler from "../../../../../hooks/useQuery";

const Discount: FC = () => {
  const useQuery = useQueryHandler();
  const { IconAndImageBasedLoader } = useLoader();

  const { data, isLoading } = useQuery({
    queryURL: "/features/discount",
    method: "GET",
    queryKEY: "/flower-discount",
  });

  return (
    <div className="mt-[20px] bg-[#d9fae0] w-full h-[300px] flex flex-col items-center">
      <h1 className="mt-[18px] text-[#46A358] text-4xl">
        {isLoading ? <Skeleton.Input /> : data?.title}
      </h1>
      <p className="mt-[11px] text-base font-bold">
        {isLoading ? (
          <Skeleton.Input />
        ) : (
          `UP TO
        ${data?.discoount_up_to}% OFF`
        )}
      </p>
      <IconAndImageBasedLoader
        type="image"
        alt="discount"
        src={data?.poster_image_url}
        className="my-[10px] h-[180px]"
      />
    </div>
  );
};

export default Discount;
