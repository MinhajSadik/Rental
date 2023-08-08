import React from "react";
import { Card } from "@components/pages/property";
import { IoMdClose } from "react-icons/io";
import { BlureEffect } from "@/components";

interface EmailCardProps {
  setEmailToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const EmailCard: React.FC<EmailCardProps> = ({ setEmailToggle }) => {

  const closeEmailToggle = (): void => {
    setEmailToggle(false);
  };

  return (
    <BlureEffect
      // onClick={closeEmailToggle}
    >
      <Card>
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <h4 className="text-secondary text-2xl font-bold">Email</h4>
            <span className="text-secondary text-[12px]">rental.com</span>
          </div>
          <button 
            className="absolute right-5 top-6 text-[#9E9E9E] hover:text-secondary transition duration-300"
            onClick={closeEmailToggle}
          >
            <IoMdClose size={24} />
          </button>
        </div>
        <form className="flex items-start flex-col gap-3.5">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary"
          />
          <textarea
            placeholder="Message"
            name=""
            id=""
            rows={5}
            cols={10}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary"
          />
          <button className="bg-primary text-white px-8 py-2 rounded text-sm">
            Send E-mail
          </button>
        </form>
        <p className="text-[12px] text-secondary">
          Note: The reference code for this property is{" "}
          <span className="font-semibold">ID-909131</span>
        </p>
      </Card>
    </BlureEffect>
  );
};

export default EmailCard;
