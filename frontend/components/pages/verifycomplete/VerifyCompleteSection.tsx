import React from "react";
import Link from "next/link";

const VerifyCompleteSection: React.FC = () => {
  return (
    <section className="max-w-[1400px] w-full mx-auto lg:px-8 md:px-6 px-4 lg:pt-14 lg:pb-20 pt-10 pb-14 space-y-4">
      <div className="max-w-[740px] mx-auto space-y-12">
        <div className="bg-[#F4F9FF] px-6 py-4">
          <h4 className="text-[22px] font-medium text-secondary">
            ID Verified
          </h4>
        </div>
        <div className="space-y-8">
          <h2 className="text-4xl font-semibold text-secondary border-b-4 inline pb-2 border-primary">
            ID Verified
          </h2>
          <p className="text-lg text-secondary">
            Thank you for verifying your ID.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Link
            className="text-lg bg-primary text-white py-3.5 px-4 rounded max-w-lg w-full hover:bg-primaryHov transition duration-300 font-medium text-center"
            href="/login"
          >
            Continue to Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VerifyCompleteSection;
