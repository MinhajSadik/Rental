import React from "react";
import { HeadTag, Header, Footer } from "@/components/common";
import { Inter } from "next/font/google";
import { PropertyDescription, ReviewCard, SaveCard, ShareCard } from "@/components/pages/property/individual-property";
import { useSelector } from "react-redux";
import { selectIsReviewToggleOpen } from "@/features/reviewToggleSlice";
import { useEffect } from "react";
import { selectIsShareToggleOpen } from "@/features/shareToggleSlice";
import { selectIsSavePropertyToggleOpen } from "@/features/savePropertyToggleSlice";

const inter = Inter({ subsets: ["latin"] });

const PropertyPage: React.FC = () => {

  const isOpenReviewToggle = useSelector(selectIsReviewToggleOpen);
  const isOpenShareToggle = useSelector(selectIsShareToggleOpen);
  const isOpenSavePropertyToggle = useSelector(selectIsSavePropertyToggleOpen);

  useEffect(() => {
    if (isOpenReviewToggle || isOpenShareToggle || isOpenSavePropertyToggle) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpenReviewToggle, isOpenShareToggle]);

  return (
    <div
      className={`min-h-screen flex flex-col w-full bg-white ${inter.className}`}
    >
      {/* ==== HeadTag ==== */}
      <HeadTag title="Rental App - Property" />

      {/* ==== Review Card ==== */}
      {isOpenReviewToggle && <ReviewCard />}

      {/* ==== Share Card ==== */}
      {isOpenShareToggle && <ShareCard />}

      {/* ==== Save Card ==== */}
      {isOpenSavePropertyToggle && <SaveCard />}

      {/* ==== Header ==== */}
      <Header />
      {/* ==== Main ==== */}
      <main>
        {/* ==== Property Desctiption ==== */}
        <PropertyDescription/>
      </main>
      {/* ==== Footer ==== */}
      <Footer/>
    </div>
  )
}

export default PropertyPage;