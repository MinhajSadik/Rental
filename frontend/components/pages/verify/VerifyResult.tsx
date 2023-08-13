import React from "react";

interface VerifyResultProps {
  status: {
    text: string;
    color: string;
  };
  title: string;
  subTitle: string;
  btn: {
    text: string;
    handle: () => void;
  };
}

const VerifyResult: React.FC<VerifyResultProps> = ({
  status,
  title,
  subTitle,
  btn,
}) => {
  return (
    <div className="max-w-[540px] mx-auto space-y-12">
      <div className="bg-[#F4F9FF] px-6 py-4">
        <h4 className={`text-xl font-medium ${status.color}`}>{status.text}</h4>
      </div>
      <div className="space-y-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-semibold text-secondary inline pb-2 border-primary">
            {title}
          </h2>
          <span className="w-[65px] h-[5px] border-b-8 border-primary">
          </span>
        </div>
        <p className="text-lg text-secondary">{subTitle}</p>
      </div>
      <div className="flex justify-center items-center">
        <button
          className="text-lg bg-primary text-white py-3 px-4 rounded-md w-full hover:bg-primaryHov transition duration-300 font-medium text-center"
          onClick={btn.handle}
        >
          {btn.text}
        </button>
      </div>
    </div>
  );
};

export default VerifyResult;
