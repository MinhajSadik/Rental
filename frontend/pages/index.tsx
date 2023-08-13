import { ReactElement } from "react";
import { HeadTag } from "@/components/common";
import {
  Hero,
  FeatureAds,
  WhatYouWant,
  Help,
  Furnished,
  CustomerReview,
} from "@/components/pages/home";
import { RootLayout } from "@/components/layouts";

export default function Home() {

  return (
    <>
      {/* ==== Head ==== */}
      <HeadTag 
        title="Rental - Find Your Perfect Home: Explore Premier House Rentals" 
      />
      {/* ==== Hero ==== */}
      <Hero />
      {/* ==== What You Want ==== */}
      <WhatYouWant />
      {/* ==== Feature ADs ==== */}
      <FeatureAds />
      {/* ==== Help ==== */}
      <Help />
      {/* ==== Furnished ==== */}
      <Furnished />
      {/* ==== Testimonial ==== */}
      <CustomerReview />
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
