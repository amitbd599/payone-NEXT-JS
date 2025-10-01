import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import DashboardLayout from "@/layout/DashboardLayout";
import DashboardDepositMoney from "@/components/DashboardDepositMoney";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Deposit-money | PayOne Money Exchange Next JS Template",
    description:
      "PayOne is a professional Next JS Template for online money exchange, remittance, and digital payment services. Clean design, responsive layout, and modern UI components included.",
    openGraph: {
      title: "Deposit-money | PayOne",
      description:
        "PayOne is a professional Next JS Template for online money exchange, remittance, and digital payment services. Clean design, responsive layout, and modern UI components included.",
      url: "https://nextjs.payone.wowtheme7.com/deposit-money",
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
      <DashboardLayout>
        {/* DashboardDepositMoney */}
        <DashboardDepositMoney />
      </DashboardLayout>
    </AOSWrap>
  );
};

export default Page;
