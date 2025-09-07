import DashboardFooter from "../components/DashboardFooter";
import DashboardHeader from "../components/DashboardHeader";
import DashboardProfileSection from "../components/DashboardProfileSection";
import Preloader from "../helper/Preloader";

const DashboardLayout = ({ children }) => {
  return (
    <>
      {/* <Preloader /> */}
      <Preloader />

      {/* DashboardHeader */}
      <DashboardHeader />

      {/* DashboardProfileSection */}
      <DashboardProfileSection children={children} />

      {/* DashboardFooter */}
      <DashboardFooter />
    </>
  );
};

export default DashboardLayout;
