import {useContext} from "react";
import Link from "next/link";
import { withVerifyWrapper } from "@/components/pages/verify";
import { AppContext } from "@/context/ApplicationContext";


const IDSubmissionOptions: React.FC = () => {
  const { setActiveComponent} = useContext(AppContext)

  return (
    <div className="space-y-20">
      <h2 className="text-4xl font-semibold text-secondary">
        Choose how to submit your ID
      </h2>
      <div className="flex flex-col items-center justify-center gap-6 ">
        <button
        onClick={() => setActiveComponent(4)}
          className="text-lg bg-primary text-white py-3 px-4 rounded-md max-w-lg w-full hover:bg-primaryHov transition duration-300 font-medium text-center"
        >
          Capture image with  device 
        </button>
        <p className="text-lg text-secondary font-medium">OR</p>
        <button
        onClick={() => setActiveComponent(4)}
          className="bg-[#e3e8f0] max-w-lg w-full text-lg py-3 px-4 rounded-md text-secondary font-medium hover:bg-[#d4d9e2] transition duration-300 text-center"
        >
          Upload file from your device
        </button>
      </div>
    </div>
  );
};

const IDSubmissionOptionSection = withVerifyWrapper(IDSubmissionOptions);

export default IDSubmissionOptionSection;
