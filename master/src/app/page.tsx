import type { Metadata } from "next";
import React from "react";
import dynamic from "next/dynamic";
import TopHeaderOne from "../components/TopHeaderOne";
import HeaderOne from "../components/HeaderOne";
import BannerOne from "../components/BannerOne";
import OurFeatureOne from "../components/OurFeatureOne";
import PaynoneOne from "../components/PaynoneOne";
import ServicesOne from "../components/ServicesOne";
import RequestSectionOne from "../components/RequestSectionOne";
import WorkingSectionOne from "../components/WorkingSectionOne";
import MobileSectionOne from "../components/MobileSectionOne";
import TestimonialsOne from "../components/TestimonialsOne";
import FAQOne from "../components/FAQOne";
import PaymentMethodOne from "../components/PaymentMethodOne";
import BlogOne from "../components/BlogOne";
import NewsletterOne from "../components/NewsletterOne";
import FooterOne from "../components/FooterOne";
import Preloader from "../helper/Preloader";

// const BrandSliderOne = dynamic(() => import("../components/BrandSliderOne"));
// const ShowCaseOne = dynamic(() => import("../components/ShowCaseOne"));

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "About | SassTech - Saas Software and IT Solution",
    description:
      "Learn more about our SaaS software, team, features, and IT solutions.",
    openGraph: {
      title: "Home | SassTech",
      description:
        "Learn more about our SaaS software, team, features, and IT solutions.",
      url: "https://nextjs.sasstech.webnextpro.com/about",
      type: "website",
      images: [
        {
          url: "https://nextjs.sasstech.webnextpro.com/images/about-og.jpg",
          width: 1200,
          height: 630,
          alt: "About SassTech",
        },
      ],
    },
  };
};

const Page: React.FC = () => {
  return (
    <>
      {/* <Preloader /> */}
      <Preloader />

      {/* TopHeaderOne */}
      {/* <TopHeaderOne /> */}

      {/* HeaderOne */}
      {/* <HeaderOne /> */}

      {/* BannerOne */}
      {/* <BannerOne /> */}

      {/* OurFeatureOne */}
      {/* <OurFeatureOne /> */}

      {/* PaynoneOne */}
      {/* <PaynoneOne /> */}

      {/* ServicesOne */}
      {/* <ServicesOne /> */}

      {/* RequestSectionOne */}
      {/* <RequestSectionOne /> */}

      {/* WorkingSectionOne */}
      {/* <WorkingSectionOne /> */}

      {/* MobileSectionOne */}
      {/* <MobileSectionOne /> */}

      {/* TestimonialsOne */}
      {/* <TestimonialsOne /> */}

      {/* FAQOne */}
      {/* <FAQOne /> */}

      {/* PaymentMethodOne */}
      {/* <PaymentMethodOne /> */}

      {/* BlogOne */}
      {/* <BlogOne /> */}

      {/* NewsletterOne */}
      {/* <NewsletterOne /> */}

      {/* FooterOne */}
      {/* <FooterOne /> */}
    </>
  );
};

export default Page;
