import { Inter } from "next/font/google";
import { HeadTag } from "@/components/common";
import { Header, Footer } from "@/components/common";
import { CaptureIdCard } from "@/components/pages/captureid";

const inter = Inter({ subsets: ["latin"] });

export default function CaptureId() {
  return (
    <div
      className={`min-h-screen flex flex-col w-full bg-white ${inter.className}`}
    >
      {/* ==== HeadTag ==== */}
      <HeadTag title="Capture Id" />

      {/* ==== Header ==== */}
      <Header/>

      {/* ==== Main ==== */}
      <main>
        {/* ==== Capture Id Card ==== */}
        <CaptureIdCard/>
      </main>
      {/* ==== Footer ==== */}
      <Footer/>
    </div>
  );
}