import { FC } from "react";
import Card from "./Card";

const Mappping: FC = () => {
  return (
    <div className="mt-[30px] grid grid-cols-3 gap-4 max-sm:grid-cols-2">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Mappping;
