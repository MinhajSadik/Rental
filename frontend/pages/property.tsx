import { Inter } from "next/font/google";
import { HeadTag, Header, Footer } from "@/components/common";
import { FilterProperty, AppertmentListing } from "@/components/pages/property";

const inter = Inter({ subsets: ["latin"] });

export default function Property() {
  return (
    <div
      className={`min-h-screen flex flex-col w-full bg-white ${inter.className}`}
    >
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
