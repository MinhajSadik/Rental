import Image from "next/image";
import Link from "next/link";

const FrontCard: React.FC = () => {
  return (
    <>
      <h2 className="text-4xl font-semibold text-secondary">
        Upload Front of your identify card
      </h2>
      <div className="grid grid-cols-2 items-center gap-14">
        <div className="bg-[#FAFAFA] p-14 rounded">
          <Image
            src="/images/placeholder_id_front_card.svg"
            alt="placeholder_id_card"
            width={400}
            height={250}
          />
        </div>
        <div className="flex flex-col items-center gap-6">
          <button className="bg-primary text-white max-w-[250px] w-full py-3.5 px-4 rounded font-medium hover:bg-primaryHov transition duration-300">
            Choose File
          </button>
          <button className="bg-[#e3e8f0] max-w-[250px] w-full py-3.5 px-4 rounded font-medium text-secondary hover:bg-[#d4d9e2] transition duration-300 text-center">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default FrontCard;
