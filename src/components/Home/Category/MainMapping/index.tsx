import type { FC } from "react";
import Header from "./Header";
import Mappping from "./Mapping";

const MainMapping: FC = () => {
  return (
    <div className="w-full">
      <Header />
      <Mappping />
    </div>
  );
};

export default MainMapping;
