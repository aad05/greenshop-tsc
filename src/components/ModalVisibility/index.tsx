import { FC } from "react";
import { useReduxSelector } from "../../hooks/useRedux";
import SiteMap from "../Navbar/Site_map";
import Authorization from "../Authorization";
import MobileDashboard from "../Home/Category/Dashboard/MobileDashboard";

const ModalVisibility: FC = () => {
  const {
    siteMapModalVisibility,
    authModalVisibility,
    dashboardModalVisibility,
  } = useReduxSelector((state) => state.modal);
  return (
    <>
      {/* Site Map */}
      {siteMapModalVisibility && <SiteMap />}
      {/* Authorization based Modal */}
      {authModalVisibility.open && <Authorization />}
      {/* Mobile Category Dashboard */}
      {dashboardModalVisibility && <MobileDashboard />}
    </>
  );
};

export default ModalVisibility;
