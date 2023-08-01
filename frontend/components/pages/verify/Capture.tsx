import Image from "next/image";
import { AiFillCamera } from "react-icons/ai";
import { Processing } from "@/components/pages/verify";

interface CaptureProps {
  title: string;
  btnOne: {
    text: string;
    handle: () => void;
  },
  image: string;
  btnTwo: {
    text: string;
    handle: () => void
  },
};

const Capture: React.FC<CaptureProps> = ({title, btnOne, image, btnTwo }) => {
  return (
    <div className="space-y-14">
      <h2 className="text-4xl font-semibold text-secondary">
        {title}
      </h2>
      <div className="grid grid-cols-2 items-center gap-6 relative">
        {/* <Processing/> */}
        <div className="space-y-4">
          <div className="bg-[#FAFAFA] max-w-[600px] w-full min-h-[300px] h-full flex justify-center items-center">
            <AiFillCamera
              className="text-gray-200 group-hover:text-gray-400"
              size={60}
            />
          </div>
          <button className="text-center w-full bg-primary px-4 py-3 rounded-md text-white font-medium text-lg hover:bg-primaryHov transition duration-300" onClick={btnOne.handle}>
            {btnOne.text}
          </button>
        </div>
        <div className="space-y-4">
          <div className="bg-[#FAFAFA] max-w-[600px] w-full min-h-[300px] h-full flex justify-center items-center relative">
            <Image
              src={image}
              alt="capture"
              width={200}
              height={200}
            />
            <div className="absolute bottom-0 left-0 px-4 py-2 bg-[#D8D8D8] text-secondary font-medium">
              Example
            </div>
          </div>
          <button className="text-center w-full bg-[#FAFAFA] px-4 py-3 rounded-md text-secondary font-medium text-lg transition duration-300 hover:bg-[#f1f0f0]" onClick={btnTwo.handle}>
            {btnTwo.text}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Capture;