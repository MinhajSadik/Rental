import { Inter } from "next/font/google";
import { HeadTag, Header, Footer } from "@/components/common";
import { SignupFormSection } from "@/components/pages/signup";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  return (
    <div
      className={`min-h-screen flex flex-col w-full bg-white ${inter.className}`}
    >
      {/* ==== HeadTag ==== */}
      <HeadTag title="Sign Up" />
      {/* ==== Header ==== */}
      <Header />
      {/* ==== Main ==== */}
      <main>
        {/* ==== Signup Form Section ==== */}
        <SignupFormSection/>
      </main>
      {/* ==== Footer ==== */}
      <Footer />
    </div>
  );
}