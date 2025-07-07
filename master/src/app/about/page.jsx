import AboutBannerInner from "@/components/AboutBannerInner";
import AboutCounter from "@/components/AboutCounter";
import AboutFeatures from "@/components/AboutFeatures";
import AboutTeamInner from "@/components/AboutTeamInner";
import BrandThree from "@/components/BrandThree";
import FooterThree from "@/components/FooterThree";
import HeaderOne from "@/components/HeaderOne";
import PricingPlanTwo from "@/components/PricingPlanTwo";
import TaskManagementOne from "@/components/TaskManagementOne";
import TestimonialsOne from "@/components/TestimonialsOne";
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
      <section className='heading-black'>
        {/* CustomCursor */}
        <CustomCursor />

        {/* Top Header One */}
        <TopHeaderOne />

        {/* HeaderOne */}
        <HeaderOne />

        {/* AboutBannerInner */}
        <AboutBannerInner />

        {/* AboutCounter */}
        <AboutCounter />

        {/* AboutFeatures */}
        <AboutFeatures />

        {/* AboutTeamInner */}
        <AboutTeamInner />

        {/* TestimonialsOne */}
        <TestimonialsOne />

        {/* BrandThree */}
        <BrandThree />

        {/* PricingPlanTwo */}
        <PricingPlanTwo />

        {/* TaskManagementOne */}
        <TaskManagementOne />

        {/* FooterThree */}
        <FooterThree />
      </section>
    </AOSWrap>
  );
};

export default page;
