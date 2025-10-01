import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import TopHeaderOne from "@/components/TopHeaderOne";
import HeaderOne from "@/components/HeaderOne";
import Breadcrumb from "@/components/Breadcrumb";
import NewsletterTwo from "@/components/NewsletterTwo";
import FooterThree from "@/components/FooterThree";
import ServicesDetailsInner from "@/components/ServicesDetailsInner";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Services-details | PayOne Money Exchange Next JS Template",
    description:
      "PayOne is a professional Next JS Template for online money exchange, remittance, and digital payment services. Clean design, responsive layout, and modern UI components included.",
    openGraph: {
      title: "Services-details | PayOne",
      description:
        "PayOne is a professional Next JS Template for online money exchange, remittance, and digital payment services. Clean design, responsive layout, and modern UI components included.",
      url: "https://nextjs.payone.wowtheme7.com/services-details",
      type: "website",
      images: [
        {
          url: "https://nextjs.payone.wowtheme7.com/images/meta.png",
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

      {/* TopHeaderTwo */}
      <TopHeaderOne />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"services details"} />

      {/* ServicesDetailsInner */}
      <ServicesDetailsInner />

      {/* NewsletterTwo */}
      <NewsletterTwo />

      {/* FooterThree */}
      <FooterThree />
    </AOSWrap>
  );
};

export default Page;
