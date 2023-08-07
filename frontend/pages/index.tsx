import { useEffect } from "react";
import { Inter } from "next/font/google";
import { HeadTag, Header, Footer } from "@/components/common";
import {
  Hero,
  FeatureAds,
  WhatYouWant,
  Help,
  Furnished,
  CustomerReview,
} from "@/components/pages/home";
import { LoginModal, SignupModal, ForgetPasswordModal } from "@/components/modal";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // ==== Toggle Login Modal (Redux state managment) ====
  const loginToggle = useSelector(
    (state: RootState) => state.loginToggle.isOpen
  );
  const signupToggle = useSelector(
    (state: RootState) => state.signupToggle.isOpen
  );

  const forgetPasswordToggle = useSelector((state: RootState) => state.forgetPasswordToggle.isOpen); 

  useEffect(() => {
    if (loginToggle || signupToggle || forgetPasswordToggle) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [loginToggle, signupToggle, forgetPasswordToggle]);

  return (
    <div className="min-h-screen flex flex-col w-full bg-white">
      {/* ==== Head ==== */}
      <HeadTag title="Rental - Find Your Perfect Home: Explore Premier House Rentals" />

      {/* ==== Login Modal ===== */}
      {loginToggle && <LoginModal />}

      {/* ==== Signup Modal ==== */}
      {signupToggle && <SignupModal />}

      {/* ==== Forget Password Modal ==== */}
      {forgetPasswordToggle && <ForgetPasswordModal/>}

      {/* ==== Header ==== */}
      <Header />

      {/* ==== Main ==== */}
      <main>
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
      </main>

      {/* ==== Footer ==== */}
      <Footer />
    </div>
  );
}