import { ReactElement } from "react";
import { HeadTag } from "@/components/common";
import {
  FilterProperty,
  AppertmentListing,
} from "@/components/pages/property";
import { RootLayout } from "@/components/layouts";

export default function Property() {
  return (
    <>
      {/* ==== HeadTag ==== */}
      <HeadTag title="Rental App - Property" />
      {/* ==== Filter Property ====== */}
      <FilterProperty />
      {/* ==== Appertment Listing ====== */}
      <AppertmentListing />
    </>
  );
}

Property.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
