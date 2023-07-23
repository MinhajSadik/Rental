import { Inter } from "next/font/google";
import { HeadTag } from "@/components/common";

const inter = Inter({ subsets: ["latin"] });

export default function Verify() {
  return (
    <div
      className={`min-h-screen flex flex-col w-full bg-white ${inter.className}`}
    >
      {/* ==== HeadTag ==== */}
      <HeadTag title="Verify" />
      <section className="max-w-[1400px] w-full mx-auto lg:px-8 md:px-6 px-4 lg:py-14 py-10 space-y-4">
        <div className="max-w-[800px] mx-auto">
          <h4 className="py-2 border-b-4 border-primary inline font-semibold text-secondary text-5xl">
            Verify Your ID
          </h4>
        </div>
      </section>
    </div>
  );
}