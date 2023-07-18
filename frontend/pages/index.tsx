import { Inter } from "next/font/google";
import { HeadTag, Header, Footer } from "@/components/common";
import { Banner, FeatureAds, SliderFeature, Help, Furnished, Testimonial } from "@/components/pagescom/home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`min-h-screen flex flex-col ${inter.className}`}>
      {/* ==== Head ==== */}
      <HeadTag title="Rental - Find Your Perfect Home: Explore Premier House Rentals" />

      {/* ==== Header ==== */}
      <Header />

      {/* ==== Main ==== */}
      <main>
        {/* ==== Banner ==== */}
        <Banner/>
        {/* ==== SliderFeature ==== */}
        <SliderFeature/>
        {/* ==== Feature Ads ==== */}
        <FeatureAds/>
        {/* ==== Help ==== */}
        <Help/>
        {/* ==== Furnished ==== */}
        <Furnished/>
        {/* ==== Testimonial ==== */}
        <Testimonial/>
      </main>

      {/* ==== Footer ==== */}
      <Footer />
    </div>
  );
}
