import { Inter } from "next/font/google";
import { HeadTag, Header, Footer } from "@/components/common";
import { ForgetPasswordFormSection } from "@/components/pages/forgetpassword";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  return (
    <div
      className={`min-h-screen flex flex-col w-full bg-white ${inter.className}`}
    >
      {/* ==== HeadTag ==== */}
      <HeadTag title="Forget Password" />
      {/* ==== Header ==== */}
      <Header />
      {/* ==== Main ==== */}
      <main>
        {/* ==== ForgetPassword Form Section ==== */}
        <ForgetPasswordFormSection/>
      </main>
      {/* ==== Footer ==== */}
      <Footer/>
    </div>
  );
}
