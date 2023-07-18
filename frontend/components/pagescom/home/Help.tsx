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
        <div className="grid grid-cols-3 items-end gap-4">
          <div className="flex flex-col gap-8">
            <div className="space-y-4 flex flex-col items-start">
              <span className="p-4 bg-white rounded-full flex flex-col items-center shadow text-primary">
                <img
                  src="./images/icon/laptop.svg"
                  alt="concierge"
                  className="w-[28px] h-[28px]"
                />
              </span>
              <h5 className="font-bold text-secondary text-[20px]">
                Concierge
              </h5>
              <p className="text-[#1A202C]">
                We handle guest liaison, enquiries and <br /> booking issues.
              </p>
              <img src="./images/bordersnake.svg" alt="border" />
            </div>
            <div className="space-y-4 flex flex-col items-start">
              <span className="p-4 bg-white rounded-full flex flex-col items-center shadow text-primary">
                <img
                  src="./images/icon/bookings.svg"
                  alt="booking"
                  className="w-[28px] h-[28px]"
                />
              </span>
              <h5 className="font-bold text-secondary text-[20px]">Booking</h5>
              <p className="text-[#1A202C]">
                We manage booking support on your <br /> behalf with sales channels.
              </p>
              <img src="./images/bordersnake.svg" alt="border" />
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
          <div className="flex flex-col gap-8 justify-self-end">
            <div className="space-y-4 flex flex-col items-start">
              <span className="p-4 bg-white rounded-full flex flex-col items-center shadow text-primary">
                <img
                  src="./images/icon/full-support.svg"
                  alt="full support"
                  className="w-[28px] h-[28px]"
                />
              </span>
              <h5 className="font-bold text-secondary text-[20px]">
                Full Support
              </h5>
              <p className="text-[#1A202C]">
                Support 7 days of the week through EMAIL, <br /> CHAT or PHONE.
              </p>
              <img src="./images/bordersnake.svg" alt="border" />
            </div>
            <div className="space-y-4 flex flex-col items-start">
              <span className="p-4 bg-white rounded-full flex flex-col items-center shadow text-primary">
                <img
                  src="./images/icon/multi-language.svg"
                  alt="Multi Language"
                  className="w-[28px] h-[28px]"
                />
              </span>
              <h5 className="font-bold text-secondary text-[20px]">Multi-language</h5>
              <p className="text-[#1A202C]">
                We speak English, Bengali, French and <br /> Japaniese.
              </p>
              <img src="./images/bordersnake.svg" alt="border" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-primary text-white px-8 py-2.5 rounded hover:bg-primaryHov transition duration-300">
            Get Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default Help;
