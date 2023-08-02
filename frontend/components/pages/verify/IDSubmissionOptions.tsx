import Link from "next/link";
import { withVerifyWrapper } from "@/components/pages/verify";

const IDSubmissionOptions: React.FC = () => {
  return (
    <div className="space-y-20">
      <h2 className="text-4xl font-semibold text-secondary">
        Choose how to submit your ID
      </h2>
      <div className="flex flex-col items-center justify-center gap-6 ">
        <Link
          className="text-lg bg-primary text-white py-3 px-4 rounded-md max-w-lg w-full hover:bg-primaryHov transition duration-300 font-medium text-center"
          href="/signup/capture-id"
        >
          Capture image with  device 
        </Link>
        <p className="text-lg text-secondary font-medium">OR</p>
        <Link
          className="bg-[#e3e8f0] max-w-lg w-full text-lg py-3 px-4 rounded-md text-secondary font-medium hover:bg-[#d4d9e2] transition duration-300 text-center"
          href="/signup/upload-card"
        >
          Upload file from your device
        </Link>
      </div>
    </div>
  );
};

const IDSubmissionOptionSection = withVerifyWrapper(IDSubmissionOptions);

export default IDSubmissionOptionSection;
