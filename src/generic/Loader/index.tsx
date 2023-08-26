import { Skeleton, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
// import { useState } from "react";

type text_based_loader_type = {
  length?: number;
};

type icon_and_based_loader = {
  src: string;
  className?: string;
  alt: string;
  onClick?: () => any;
  type: "image" | "icon";
};

type Card_Based_Loader_Type = {
  length?: number;
};

export const useLoader = () => {
  const text_based_loader = ({ length = 10 }: text_based_loader_type) => {
    return Array.from({ length }).map((_, i) => (
      <Skeleton.Input key={i} active={true} style={{ width: "100%" }} />
    ));
  };

  const IconAndImageBasedLoader = ({
    src,
    className,
    alt = "icon_loader",
    onClick,
    type,
  }: icon_and_based_loader) => {
    // const [isLoading, setLoading] = useState<boolean>(true);
    // console.log(isLoading);

    return (
      <>
        {/* {isLoading ? (
          type === "image" ? (
            isLoading && <Skeleton.Image className={className} active={true} />
          ) : (
            <Skeleton.Avatar active={true} />
          )
        ) : null} */}
        <img
          onClick={onClick}
          // className={`${className} ${!isLoading ? "flex" : "hidden"}`}
          className={className}
          src={src}
          alt={alt}
          // onLoad={() => setLoading(false)}
        />
      </>
    );
  };

  const card_based_loader = ({ length = 10 }: Card_Based_Loader_Type) => {
    return Array.from({ length }).map((_, index) => (
      <div key={index} className="h-[300px] flex flex-col">
        <Skeleton.Image className="w-full main_card" active={true} />
        <h3 className="font-normal cursor-pointer mt-[12px]">
          <Skeleton.Input active={true} />
        </h3>
        <p className="text-[#46A358] font-bold">
          <Skeleton.Input active={true} />
        </p>
      </div>
    ));
  };

  const order_based_loader = ({ length = 5 }) => {
    return Array.from({ length }).map((_, index) => (
      <div key={index} className="bg-[#FBFBFB] h-[70px] w-full flex">
        <div className="w-full grid grid-cols-4 max-sm:grid-cols-2">
          <div className="border-r m-[4px] border-[#46A35833]">
            <h3 className="font-light">Order Number</h3>
            <Skeleton.Input active={true} />
          </div>
          <div className="border-r m-[4px] border-[#46A35833]">
            <h3 className="font-light">Date</h3>
            <Skeleton.Input active={true} />
          </div>
          <div className="border-r m-[4px] border-[#46A35833]">
            <h3 className="font-light">Total</h3>
            <Skeleton.Input active={true} />
          </div>
          <div className="border-r m-[4px] border-[#46A35833]">
            <h3 className="font-light">More</h3>
            <Skeleton.Input active={true} />
          </div>
        </div>
      </div>
    ));
  };
  const my_product_based_loader = ({ length = 5 }) => {
    return Array.from({ length }).map((_, i) => (
      <div key={i} className="bg-[#FBFBFB] h-[70px] w-full mt-[11px] flex">
        <div className="w-[40%] flex items-center gap-2">
          <Skeleton.Image className="w-[70px] h-[70px]" active={true} />
          <div>
            <h3>
              <Skeleton.Input active={true} />
            </h3>
            <p className="font-light text-[14px]">
              SKU: <Skeleton.Input active={true} />
            </p>
          </div>
        </div>
        <div className="w-[20%] flex items-center text-[#727272]">
          <Skeleton.Input active={true} />
        </div>
        <div className="w-[40%] flex items-center justify-between pr-[10px]">
          <h3>
            $<Skeleton.Input active={true} />
          </h3>
          <div className="flex gap-4">
            <Tooltip title="Edit">
              <EditOutlined className="cursor-pointer" />
            </Tooltip>
            <Tooltip title="Delete">
              <DeleteOutlined className="cursor-pointer" />
            </Tooltip>
          </div>
        </div>
      </div>
    ));
  };

  const tab_loader = () => {
    return (
      <div className="w-full border-b border-[#F0F0F0] pb-[5px] flex gap-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton.Input key={i} size="small" active={true} />
        ))}
      </div>
    );
  };

  return {
    text_based_loader,
    IconAndImageBasedLoader,
    card_based_loader,
    order_based_loader,
    my_product_based_loader,
    tab_loader,
  };
};
