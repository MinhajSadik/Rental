import React from "react";
import Link from "next/link";

const Verify: React.FC = () => {
  return (
    <section className="max-w-[1400px] w-full mx-auto lg:px-8 md:px-6 px-4 lg:py-14 py-10 space-y-4">
      <div className="max-w-[840px] mx-auto space-y-12">
        <h4 className="py-2 border-b-4 border-primary inline font-semibold text-secondary text-4xl">
          Verify Your ID
        </h4>
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
          <Link className="max-w-md w-full bg-primary text-white py-2.5 px-4 rounded text-lg font-medium hover:bg-primaryHov transition duration-300 text-center"
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
    </section>
  );
};

export default Verify;
