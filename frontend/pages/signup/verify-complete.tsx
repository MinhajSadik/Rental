import { Inter } from "next/font/google";
import { HeadTag } from "@/components/common";
import { Header, Footer } from "@/components/common";
import { VerifyCompleteSection } from "@/components/pages/verifycomplete";

const inter = Inter({ subsets: ["latin"] });

export default function VerifyComplete() {
  return (
    <div
      className={`min-h-screen flex flex-col w-full bg-white ${inter.className}`}
    >
      {/* ==== HeadTag ==== */}
      <HeadTag title="Upload Front of your identify card" />

      {/* ==== Header ==== */}
      <Header/>

      {/* ==== Main ==== */}
      <main>
        {/* ==== Verify Complete Section ===== */}
        <VerifyCompleteSection/>
      </main>
      {/* ==== Footer ==== */}
      <Footer/>
    </div>
  );
}