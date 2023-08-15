import { ReactElement, useEffect } from "react";
import { HeadTag } from "@/components/common";
import { useAppDispatch } from "@/redux/hooks";
import { loggedInUser, setCurrentUser } from "@/features/user/userSlice";
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
  const dispatch = useAppDispatch()
  useEffect(() => {
    const currentUser = async() => {
      const user: any = await dispatch(loggedInUser())
      if(user?.payload?.data?.success){
        dispatch(setCurrentUser(user?.payload?.data?.data))
      }
    }
    currentUser()
  }, [dispatch])

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
