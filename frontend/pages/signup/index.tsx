import { ReactElement } from "react";
import { HeadTag } from "@/components/common";
import { SignupFormSection } from "@/components/pages/signup";
import { RootLayout } from "@/components/layouts";

export default function Signup() {
  return (
    <>
      {/* ==== HeadTag ==== */}
      <HeadTag title="Signup - Rental" />
      {/* ==== Signup Form Section ==== */}
      <SignupFormSection />
    </>
  );
}

Signup.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
