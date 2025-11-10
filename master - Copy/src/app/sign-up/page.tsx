import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import SignUpInner from "@/components/SignUpInner";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Sign-up | PayOne Money Exchange Next JS Template",
    description:
      "PayOne is a professional Next JS Template for online money exchange, remittance, and digital payment services. Clean design, responsive layout, and modern UI components included.",
    openGraph: {
      title: "Sign-up | PayOne",
      description:
        "PayOne is a professional Next JS Template for online money exchange, remittance, and digital payment services. Clean design, responsive layout, and modern UI components included.",
      url: "https://nextjs.payone.wowtheme7.com/sign-up",
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

      {/* SignUpInner */}
      <SignUpInner />
    </AOSWrap>
  );
};

export default Page;
