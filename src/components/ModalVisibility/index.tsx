import { FC } from "react";
import { useReduxSelector } from "../../hooks/useRedux";
import SiteMap from "./Modals/SiteMap";
import Authorization from "./Modals/Authorization";
import MobileDashboard from "../Home/Category/Dashboard/MobileDashboard";
import Confirmation from "./Modals/Confirmation";
import TrackOrder from "./Modals/TrackOrder";
import AddNewPlant from "./Modals/AddNewPlant";
import GoogleAuthModal from "./Modals/GoogleAuth";

const ModalVisibility: FC = () => {
  const {
    siteMapModalVisibility,
    authModalVisibility,
    dashboardModalVisibility,
    confirmationModalVisibility,
    trackOrderModalVisibility,
    addNewPlantModalVisivility,
    googleAuthModalVisibility,
  } = useReduxSelector((state) => state.modal);
  return (
    <>
      {/* Site Map */}
      {siteMapModalVisibility && <SiteMap />}
      {/* Authorization based Modal */}
      {authModalVisibility.open && <Authorization />}
      {/* Mobile Category Dashboard */}
      {dashboardModalVisibility && <MobileDashboard />}
      {/* Confirmation Modal */}
      {confirmationModalVisibility && <Confirmation />}
      {/* Track Order Modal */}
      {trackOrderModalVisibility && <TrackOrder />}
      {/* Add New Plant Modal */}
      {addNewPlantModalVisivility.open && <AddNewPlant />}
      {/* Google Auth Modal */}
      {googleAuthModalVisibility && <GoogleAuthModal />}
    </>
  );
};

export default ModalVisibility;
