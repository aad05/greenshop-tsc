import { Skeleton } from "antd";
import { useState } from "react";

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
    const [isLoading, setLoading] = useState<boolean>(true);
    return (
      <>
        {isLoading ? (
          type === "image" ? (
            <Skeleton.Image className={className} active={true} />
          ) : (
            <Skeleton.Avatar active={true} />
          )
        ) : null}
        <img
          onClick={onClick}
          className={`${className} ${!isLoading ? "flex" : "hidden"}`}
          src={src}
          alt={alt}
          onLoad={() => setLoading(false)}
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

  return {
    text_based_loader,
    IconAndImageBasedLoader,
    card_based_loader,
    order_based_loader,
  };
};
