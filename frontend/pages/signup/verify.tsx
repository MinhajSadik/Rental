import { ReactElement } from "react";
import { HeadTag } from "@/components/common";
import { RootLayout } from "@/components/layouts";
import { VerifySection } from "@/components/pages/verify";

export default function Verify() {
  return (
    <>
      {/* ==== HeadTag ==== */}
      <HeadTag title="Verify" />
      {/* ==== Verify ==== */}
      <VerifySection />
    </>
  );
}

Verify.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
