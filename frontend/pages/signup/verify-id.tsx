import { Inter } from "next/font/google";
import { HeadTag } from "@/components/common";
import { Header, Footer } from "@/components/common";
import { SelectIdTypeSection } from "@/components/pages/verifyid";

const inter = Inter({ subsets: ["latin"] });

export default function VerifyId() {
  return (
    <div
      className={`min-h-screen flex flex-col w-full bg-white ${inter.className}`}
    >
      {/* ==== HeadTag ==== */}
      <HeadTag title="Select id type" />

      {/* ==== Header ==== */}
      <Header/>

      {/* ==== Main ==== */}
      <main>
        {/* ==== Select Id Type ===== */}
        <SelectIdTypeSection/>
      </main>
      {/* ==== Footer ==== */}
      <Footer/>
    </div>
  );
}