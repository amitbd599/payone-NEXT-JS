import type { Metadata } from "next";
import React from "react";
import Preloader from "../helper/Preloader";
import TopHeaderOne from "../components/TopHeaderOne";
import HeaderOne from "../components/HeaderOne";

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
      <TopHeaderOne />

      {/* HeaderOne */}
      <HeaderOne />

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
