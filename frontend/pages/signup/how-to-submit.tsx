import { Inter } from "next/font/google";
import { HeadTag, Header, Footer } from "@/components/common";
import { HowToSubmitSection } from "@/components/pages/howtosubmitid";

const inter = Inter({ subsets: ["latin"] });

export default function HowToSubmit() {
  return (
    <div
      className={`min-h-screen flex flex-col w-full bg-white ${inter.className}`}
    >
      {/* ==== HeadTag ==== */}
      <HeadTag title="How to submit" />
      {/* ==== Header ==== */}
      <Header />
      {/* ==== Main ==== */}
      <main>
        {/* ==== How to Submit ==== */}
        <HowToSubmitSection/>
      </main>
      {/* ==== Footer ==== */}
      <Footer />
    </div>
  );
}