import React from "react";
import Link from "next/link";

const VerifyFailedSection: React.FC = () => {
  return (
    <section className="max-w-[1400px] w-full mx-auto lg:px-8 md:px-6 px-4 lg:pt-14 lg:pb-20 pt-10 pb-14 space-y-4">
      <div className="max-w-[740px] mx-auto space-y-12">
        <div className="bg-[#F4F9FF] px-6 py-4">
          <h4 className="text-[22px] font-medium text-secondary">
            Failed
          </h4>
        </div>
        <div className="space-y-8">
          <h2 className="text-4xl font-semibold text-secondary border-b-4 inline pb-2 border-primary">
            Sorry, ID VERIFICATION FAILED
          </h2>
          <p className="text-lg text-secondary">
            Some thing wrong with your verification information.Please try again with your proper information! Or if you have any question please contact <Link className="text-primary underline font-medium" href="/">support@inquires.com</Link>
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Link
            className="text-lg bg-primary text-white py-3.5 px-4 rounded max-w-lg w-full hover:bg-primaryHov transition duration-300 font-medium text-center"
            href="/signup/verify"
          >
            Verify Again
          </Link>
        </div>
      </div>
    </section>
  )
}

export default VerifyFailedSection;