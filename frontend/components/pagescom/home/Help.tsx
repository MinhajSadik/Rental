import Image from "next/image";
import { BsLaptop } from "react-icons/bs";

const Help: React.FC = () => {
  return (
    <section className="bg-transparent">
      <div className="max-w-[1400px] mx-auto lg:px-8 md:px-6 px-4 lg:pt-10 pt-8 lg:pb-20 pb-16 space-y-8">
        <div className="space-y-2">
          <h2 className="text-center text-[42px] text-secondary font-semibold">
            We're Here to <span className="text-primary">Help!</span>
          </h2>
          <p className="text-center text-lg text-[#575959]">
            Personalized Support When You Need It. We're Here to Help <br /> You
            Every Step of the Way
          </p>
        </div>
        <div className="grid grid-cols-3 items-center gap-2">
          <div className="flex flex-col gap-4 pb-4 border-b-4 border-dotted">
            <div className="space-y-2.5 flex flex-col items-start">
              <span className="p-3 bg-white rounded-full flex flex-col items-center shadow text-primary">
                <BsLaptop size={20} />
              </span>
              <h5 className="font-bold text-secondary text-[20px]">
                Concierge
              </h5>
              <p className="text-[#1A202C]">
                We handle guest liaison, enquiries and booking issues.
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/images/help-care.png"
              alt="help-care"
              width={612}
              height={612}
              className="w-full"
            />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Help;
