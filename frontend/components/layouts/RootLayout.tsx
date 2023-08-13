import { Header, Footer } from "@components/common";
import { Inter } from "next/font/google";

interface RootLayoutProps {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className={`min-h-screen flex flex-col w-full bg-white ${inter.className}`}>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default RootLayout;