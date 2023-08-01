import Link from "next/link";
import { withVerifyWrapper } from "@/components/pages/verify";

const IDVerification: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-semibold text-secondary inline pb-2 border-primary">
            Verify Your ID
          </h2>
          <span className="w-[65px] h-[5px] border-b-8 border-primary">
          </span>
        </div>
      <div className="space-y-4">
        <p className="leading-normal text-[#717171] text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore e Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore e
        </p>
        <p className="leading-normal text-[#717171] text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore e ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore e
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        <Link
          className="max-w-md w-full bg-primary text-white py-2.5 px-4 rounded text-lg font-medium hover:bg-primaryHov transition duration-300 text-center"
          href="/signup/verify-id"
        >
          Verify your Id
        </Link>
        <p className="text-[#575959]">
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore e
        </p>
      </div>
    </div>
  );
};

const IDVerificationSection = withVerifyWrapper(IDVerification);

export default IDVerificationSection;