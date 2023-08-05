import { useEffect } from "react";
import { Inter } from "next/font/google";
import { HeadTag, Header, Footer } from "@/components/common";
import { FilterProperty, AppertmentListing, EmailCard, CallCard, AllFilterCard } from "@/components/pages/property";
import { useSelector } from "react-redux";
import { selectIsPropertyEmailOpen } from "@/features/propertyemailToggleSlice";
import { selectIsPropertyCallOpen } from "@/features/propertyCallToggleSlice";
import { selectIsAllFilterOpen } from "@/features/allFilterToggleSlice";

const inter = Inter({ subsets: ["latin"] });

export default function Property() {

  const isOpenPropertyEmail = useSelector(selectIsPropertyEmailOpen);
  const isOpenPropertyCall = useSelector(selectIsPropertyCallOpen);
  const isOpenAllFilter = useSelector(selectIsAllFilterOpen);

  useEffect(() => {
    if (isOpenPropertyEmail || isOpenPropertyCall || isOpenAllFilter) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpenPropertyEmail, isOpenPropertyCall, isOpenAllFilter]);

  return (
    <div
      className={`min-h-screen flex flex-col w-full bg-white ${inter.className}`}
    >
      {isOpenAllFilter && <AllFilterCard/>}
      {/* ==== Call Card ==== */}
      {isOpenPropertyCall && <CallCard/>}
      {/* ==== Email Card ==== */}
      {isOpenPropertyEmail && <EmailCard />}

      {/* ==== HeadTag ==== */}
      <HeadTag title="Rental App - Property" />
      {/* ==== Header ==== */}
      <Header />
      {/* ==== Main ==== */}
      <main>
        {/* ==== Filter Property ====== */}
        <FilterProperty />
        {/* ==== Appertment Listing ====== */}
        <AppertmentListing />
      </main>
      {/* ==== Footer ==== */}
      <Footer />
    </div>
  );
}
