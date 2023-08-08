import { ReactElement } from "react";
import { HeadTag } from "@/components/common";
import { LoginFormSection } from "@/components/pages/login";
import { RootLayout } from "@/components/layouts";

export default function Login() {
  return (
    <>
      {/* ==== HeadTag ==== */}
      <HeadTag title="Login - Rental" />
      {/* ==== Login Form Section ==== */}
      <LoginFormSection />
    </>
  );
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
