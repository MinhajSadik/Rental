import { BlureEffect } from "@/components";
import { MdOutlineClose } from "react-icons/md";
import Image from "next/image";
import { BiLink } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { PiMessengerLogo } from "react-icons/pi";
import { IoLogoFacebook } from "react-icons/io";
import { ImTwitter } from "react-icons/im";
import { BiCodeAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { closeShareToggle } from "@/features/shareToggleSlice";

interface ShareLink {
  icon: JSX.Element;
  title: string;
}

const ShareLink: Array<ShareLink> = [
  {
    icon: <BiLink size={20} />,
    title: "Copy Link",
  },
  {
    icon: <TfiEmail size={20} />,
    title: "Email",
  },
  {
    icon: <IoPaperPlaneOutline size={20} />,
    title: "Messages",
  },
  {
    icon: <FaWhatsapp size={20} />,
    title: "Whatsapp",
  },
  {
    icon: <PiMessengerLogo size={20} />,
    title: "Messenger",
  },
  {
    icon: <IoLogoFacebook size={20} />,
    title: "Facebook",
  },
  {
    icon: <ImTwitter size={20} />,
    title: "Twitter",
  },
  {
    icon: <BiCodeAlt size={20} />,
    title: "Embed",
  },
];

const ShareCard: React.FC = () => {

  const dispatch = useDispatch();

  return (
    <BlureEffect>
      <div className="max-w-[390px] w-full max-h-[440px] overflow-y-auto bg-white rounded-[10px] pt-6 pb-8 px-6 space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center gap-6">
            <h4 className="text-[25px] font-medium text-secondary">
              Share this place
            </h4>
            <button
              className="text-[#A29999] hover:text-secondary transition duration-300"
              onClick={() => dispatch(closeShareToggle())}
            >
              <MdOutlineClose size={24} />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <Image
                src="/images/appertment1.jpg"
                alt="appertment"
                width={65}
                height={65}
                className="rounded"
              />
            </div>
            <div>
              <h5 className="text-[#717171] text-[15px]">Farm stay in Tarur</h5>
              <div className="flex flex-wrap gap-1 text-[#717171]">
                <span className="text-[13px]">3 bedrooms .</span>
                <span className="text-[13px]">4 beds .</span>
                <span className="text-[13px]">3 baths</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          {ShareLink.map((item, i) => (
            <div>
                <button className="flex items-center gap-2 text-[15px] text-gray-600 px-2 py-1.5 rounded-md hover:bg-gray-100 hover:text-secondary transition duration-300">
                {item.icon}
                {item.title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </BlureEffect>
  );
};

export default ShareCard;
