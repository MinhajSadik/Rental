import { Inter } from "next/font/google";
import { HeadTag } from "@/components/common";
import { VerifySection } from "@/components/pages/verify";
import { Header, Footer } from "@/components/common";

const inter = Inter({ subsets: ["latin"] });

export default function Verify() {
  return (
    <div
      className={`min-h-screen flex flex-col w-full bg-white ${inter.className}`}
    >
      {/* ==== HeadTag ==== */}
      <HeadTag title="Verify" />

      {/* ==== Header ==== */}
      <Header/>

      {/* ==== Main ==== */}
      <main>
        {/* ==== Verify ==== */}
        <VerifySection />
      </main>
      {/* ==== Footer ==== */}
      <Footer/>
    </div>
  );
}
