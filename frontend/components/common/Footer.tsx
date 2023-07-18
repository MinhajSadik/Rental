import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImInstagram } from "react-icons/im";
import Link from "next/link";
import { footerData } from "@/constants";

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto bg-secondary">
      <div className="max-w-[1400px] mx-auto lg:px-8 md:px-6 px-4 lg:py-16 py-14">
        <div className="grid grid-cols-4 items-start">
          <div className="space-y-6">
            <h2 className="text-[32px] text-white font-semibold">
              Logo
            </h2>
            <p className="text-white">
              Our vision is to provide convenience and help increase your sales business.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/" className="p-2 bg-white rounded-full">
                <FaFacebookF size={18}/>
              </Link>
              <Link href="/" className="p-2 bg-white rounded-full">
                <AiOutlineTwitter size={18}/>
              </Link>
              <Link href="/" className="p-2 bg-white rounded-full">
                <ImInstagram size={18}/>
              </Link>
            </div>
          </div>
          {footerData.map((item, i) => (
            <div key={i}>
              <h4>
                {item.title}
              </h4>
              <ul>
                {item.subData.map((item, i) => (
                  <li key={i}>
                    <Link href={item.path}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer;