import { FC } from "react";
import Dashboard from "./Dashboard";
import MainMapping from "./MainMapping";

const CategoryDashboard: FC = () => {
  return (
    <div className="flex gap-12 my-[26px]">
      <Dashboard />
      <MainMapping />
    </div>
  );
};

export default CategoryDashboard;
