import { FC } from "react";
import Dashboard from "./Dashboard";
import { Outlet } from "react-router-dom";

const Profile: FC = () => {
  return (
    <div className="flex my-[62px] gap-[30px]">
      <Dashboard />
      <Outlet />
    </div>
  );
};

export default Profile;
