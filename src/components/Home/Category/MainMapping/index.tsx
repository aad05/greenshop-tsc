import type { FC } from "react";
import Header from "./Header";
import Mappping from "./Mapping";

const MainMapping: FC = () => {
  return (
    <div className="w-full max-sm:mx-[10px]">
      <Header />
      <Mappping />
    </div>
  );
};

export default MainMapping;
