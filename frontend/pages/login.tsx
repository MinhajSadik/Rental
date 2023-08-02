import { Inter } from "next/font/google";
import { HeadTag, Header, Footer } from "@/components/common";
import { LoginFormSection } from "@/components/pages/login";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  return (
    <div
      className={`min-h-screen flex flex-col w-full bg-white ${inter.className}`}
    >
      {/* ==== HeadTag ==== */}
      <HeadTag title="Login" />
      {/* ==== Header ==== */}
      <Header />
      {/* ==== Main ==== */}
      <main>
        {/* ==== Login Form Section ==== */}
        <LoginFormSection />
      </main>
      {/* ==== Footer ==== */}
      <Footer />
    </div>
  );
}
