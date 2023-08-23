import { ReactElement } from "react";
import { HeadTag } from "@/components/common";
import { PropertyDescription } from "@/components/pages/property/individual-property";
import { RootLayout } from "@/components/layouts";

export default function IndividualProperty() {
 
  return (
    <>
      {/* ==== HeadTag ==== */}
      <HeadTag title="Apartment 1" />
      {/* ==== Property Desctiption ==== */}
      <PropertyDescription />
    </>
  );
}

IndividualProperty.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
