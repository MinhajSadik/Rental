import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <h1 className="text-center my-10">Welcome to the Retal App 🏠</h1>
    </div>
  )
}
