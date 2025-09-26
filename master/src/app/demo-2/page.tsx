import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import TopHeaderOne from "@/components/TopHeaderOne";
import HeaderOne from "@/components/HeaderOne";
import BannerTwo from "@/components/BannerTwo";
import WhyChooseUsOne from "@/components/WhyChooseUsOne";
import PayoneTwo from "@/components/PayoneTwo";
import HowItWorksOne from "@/components/HowItWorksOne";
import OurPlatformOne from "@/components/OurPlatformOne";
import OurPlatformTwo from "@/components/OurPlatformTwo";
import OurServicesOne from "@/components/OurServicesOne";
import OurFeaturesTwo from "@/components/OurFeaturesTwo";
import TestimonialsTwo from "@/components/TestimonialsTwo";
import FAQTwo from "@/components/FAQTwo";
import BlogThree from "@/components/BlogThree";
import FooterTwo from "@/components/FooterTwo";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Home | PayOne Money Exchange React JS Template",
    description:
      "PayOne is a professional React JS template for online money exchange, remittance, and digital payment services. Clean design, responsive layout, and modern UI components included.",
    openGraph: {
      title: "Home | PayOne",
      description:
        "PayOne is a professional React JS template for online money exchange, remittance, and digital payment services. Clean design, responsive layout, and modern UI components included.",
      url: "https://nextjs.payone.webnextpro.com/about",
      type: "website",
      images: [
        {
          url: "https://nextjs.payone.webnextpro.com/images/meta.png",
          width: 1200,
          height: 630,
          alt: "PayOne",
        },
      ],
    },
  };
};

const Page: React.FC = () => {
  return (
    <AOSWrap>
      {/* <Preloader /> */}
      <Preloader />

      {/* TopHeaderOne */}
      <TopHeaderOne />

      {/* HeaderOne */}
      <HeaderOne />

      {/* BannerTwo */}
      <BannerTwo />

      {/* WhyChooseUsOne */}
      <div className='bg-neutral-10'>
        <WhyChooseUsOne />
      </div>

      {/* PayoneTwo */}
      <PayoneTwo />

      {/* HowItWorksOne */}
      <HowItWorksOne />

      {/* OurPlatformOne */}
      <OurPlatformOne />

      {/* OurPlatformTwo */}
      <OurPlatformTwo />

      {/* OurServicesOne */}
      <OurServicesOne />

      {/* OurFeaturesTwo */}
      <OurFeaturesTwo />

      {/* TestimonialsTwo */}
      <TestimonialsTwo />

      {/* FAQTwo */}
      <FAQTwo />

      {/* BlogThree */}
      <BlogThree />

      {/* FooterTwo */}
      <FooterTwo />
    </AOSWrap>
  );
};

export default Page;
