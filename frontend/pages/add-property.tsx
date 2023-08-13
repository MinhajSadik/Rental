import { RootLayout } from "@/components/layouts";
import { ReactElement } from "react";
import { HeadTag } from "@/components/common";
import { FormSection } from "@/components/pages/addproperty";

export default function AddProperty() {
  return (
    <>
      <HeadTag title="Add Property - Rental" />
      <FormSection />
    </>
  );
}

AddProperty.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
