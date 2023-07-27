import { Skeleton } from "antd";

type text_based_loader_type = {
  length?: number;
};

export const useLoader = () => {
  const text_based_loader = ({ length = 10 }: text_based_loader_type) => {
    return Array.from({ length }).map((_, i) => (
      <Skeleton.Input key={i} active={true} style={{ width: "100%" }} />
    ));
  };

  return {
    text_based_loader,
  };
};
