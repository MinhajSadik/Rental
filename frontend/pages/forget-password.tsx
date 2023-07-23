import { Inter } from "next/font/google";
import { Form } from "@/components/pagescom/forgetpassword";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  return (
    <div className={`min-h-screen flex flex-col bg-transparent ${inter.className}`}>
      <div className="max-w-[557px] w-full mx-auto lg:px-8 md:px-6 px-4 lg:pt-14 lg:pb-16 pt-10 pb-14">
        {/* ==== Form ==== */}
        <Form/>
      </div>
    </div>
  )
}