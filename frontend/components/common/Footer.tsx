import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImInstagram } from "react-icons/im";
import Link from "next/link";
import { footerData } from "@/constants";

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto bg-secondary">
      <div className="max-w-[1400px] mx-auto lg:px-8 md:px-6 px-4 lg:pt-16 lg:pb-10 pt-10 pb-8">
        <div className="flex justify-between items-start gap-8 border-b border-gray-400 pb-8">
          <div className="space-y-6 max-w-xs w-full">
            <h2 className="text-[32px] text-white font-semibold">
              Logo
            </h2>
            <p className="text-white">
              Our vision is to provide convenience <br /> and help increase your sales business.
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
            <div className="space-y-6" key={i}>
              <h4 className="text-white font-semibold text-[20px]">
                {item.title}
              </h4>
              <ul className="space-y-4">
                {item.subData.map((item, i) => (
                  <li className="text-gray-200 hover:text-white font-medium" key={i}>
                    <Link href={item.path}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center gap-6 pt-8">
          <div>
            <p className="text-white">
              &copy; 2022 Company Name. All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center gap-8">
            <Link className="text-gray-200 font-medium hover:text-white transition duration-300" href="/">
              Privacy & Policy
            </Link>
            <Link className="text-gray-200 font-medium hover:text-white transition duration-300" href="/">
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;