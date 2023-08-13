import { ReactElement } from "react";
import { HeadTag } from "@/components/common";
import { ForgetPasswordFormSection } from "@/components/pages/forgetpassword";
import { RootLayout } from "@/components/layouts";

export default function ForgetPassword() {
  return (
    <>
      {/* ==== HeadTag ==== */}
      <HeadTag title="Forget Password" />
      {/* ==== ForgetPassword Form Section ==== */}
      <ForgetPasswordFormSection />
    </>
  );
}

ForgetPassword.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
}