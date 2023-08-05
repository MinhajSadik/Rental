import { useRouter } from "next/router";
import { HeadTag, Header, Footer } from "@/components/common";
import { Inter } from "next/font/google";
import { PropertyDescription } from "@/components/pages/property/individual-property";

const inter = Inter({ subsets: ["latin"] });

const PropertyPage: React.FC = () => {

  const router = useRouter();

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
        {/* ==== Property Desctiption ==== */}
        <PropertyDescription/>
      </main>
      {/* ==== Footer ==== */}
      <Footer/>
    </div>
  )
}

export default PropertyPage;