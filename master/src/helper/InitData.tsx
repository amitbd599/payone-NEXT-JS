import CustomCursor from "./CustomCursor";
import InitializeAOS from "./InitializeAOS";
import PhosphorIconsLoader from "./PhosphorIconsLoader";
import RouteScrollToTop from "./RouteScrollToTop";
import SettingsPanel from "./SettingsPanel";

const InitData = () => {
  return (
    <>
      <InitializeAOS />

      <RouteScrollToTop />
      <PhosphorIconsLoader />
      <SettingsPanel />
      <CustomCursor />
    </>
  );
};

export default InitData;
