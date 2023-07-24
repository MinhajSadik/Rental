import { Inter } from "next/font/google";
import { HeadTag } from "@/components/common";
import { Header, Footer } from "@/components/common";
import { UploadCardSection } from "@/components/pages/uploadcard";

const inter = Inter({ subsets: ["latin"] });

export default function UploadCard() {
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
        {/* ==== UploadCard  ===== */}
        <UploadCardSection/>
      </main>
      {/* ==== Footer ==== */}
      <Footer/>
    </div>
  );
}