import BannerOne from "@/components/BannerOne";
import HeaderStartOne from "@/components/HeaderStartOne";
import OurFeatureOne from "@/components/OurFeatureOne";
import TopHeaderOne from "@/components/TopHeaderOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title:
    "SassTech - Saas Software and IT Solution Multipurpose NEXT JS Template",
  description: "IT Solution, Sass and Multipurpose NEXT JS Template.",
};

const page = () => {
  return (
    <AOSWrap>
      {/* CustomCursor */}
      <CustomCursor />

      {/* TopHeaderOne */}
      <TopHeaderOne />

      {/* HeaderStartOne */}
      <HeaderStartOne />

      {/* BannerOne */}
      <BannerOne />

      {/* OurFeatureOne */}
      <OurFeatureOne />
    </AOSWrap>
  );
};

export default page;
