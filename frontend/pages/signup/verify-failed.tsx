import { Inter } from "next/font/google";
import { HeadTag } from "@/components/common";
import { Header, Footer } from "@/components/common";
import { VerifyFailedSection } from "@/components/pages/verifyfailed";

const inter = Inter({ subsets: ["latin"] });

export default function VerifyFailed() {
  return (
    <div
      className={`min-h-screen flex flex-col w-full bg-white ${inter.className}`}
    >
      {/* ==== HeadTag ==== */}
      <HeadTag title="Verify - failed" />

      {/* ==== Header ==== */}
      <Header/>

      {/* ==== Main ==== */}
      <main>
        {/* ==== Verify Failed Section ===== */}
        <VerifyFailedSection/>
      </main>
      {/* ==== Footer ==== */}
      <Footer/>
    </div>
  );
}