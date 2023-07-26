import { AiFillCamera } from "react-icons/ai";
import Image from "next/image";

const Capture: React.FC = () => {
  return (
    <>
      <h2 className="text-4xl font-semibold text-secondary">
        Capture front of ID
      </h2>
      <div className="grid grid-cols-2 items-center gap-6">
        <div className="space-y-4">
          <div className="bg-[#FAFAFA] max-w-[600px] w-full min-h-[300px] h-full flex justify-center items-center">
            <AiFillCamera
              className="text-gray-200 group-hover:text-gray-400"
              size={60}
            />
          </div>
          <button className="text-center w-full bg-primary px-4 py-4 text-white font-medium text-lg hover:bg-primaryHov transition duration-300">
            Captured image
          </button>
        </div>
        <div className="space-y-4">
          <div className="bg-[#FAFAFA] max-w-[600px] w-full min-h-[300px] h-full flex justify-center items-center relative">
            <Image
              src="/images/placeholder_id_front_card.svg"
              alt="captureid"
              width={200}
              height={200}
            />
            <div className="absolute bottom-0 left-0 px-4 py-2 bg-[#D8D8D8] text-secondary font-medium">
              Example
            </div>
          </div>
          <button className="text-center w-full bg-[#FAFAFA] px-4 py-4 text-secondary font-medium text-lg transition duration-300 hover:bg-[#f1f0f0]">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default Capture;
