import { ReactElement , useEffect} from "react";
import { HeadTag } from "@/components/common";
import {
  FilterProperty,
  AppertmentListing,
} from "@/components/pages/property";
import { RootLayout } from "@/components/layouts";
import {useCurrentUser} from "@/hooks";

export default function Property() {
  const currentUser = useCurrentUser()
  useEffect(() => {
    currentUser()
  }, [currentUser])
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
