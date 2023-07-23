import { Inter } from "next/font/google";
import { Form } from "@/components/pages/forgetpassword";
import { HeadTag, Header, Footer } from "@/components/common";
import { FormContainer } from "@/components";

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
      <section className="max-w-[1400px] w-full mx-auto lg:px-8 md:px-6 px-4 lg:py-14 py-10 space-y-4">
        <FormContainer>
          {/* ==== Form ==== */}
          <Form />
        </FormContainer>
      </section>
      {/* ==== Footer ==== */}
      <Footer/>
    </div>
  );
}
