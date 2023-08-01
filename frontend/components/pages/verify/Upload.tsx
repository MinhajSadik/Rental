import Image from "next/image";

interface UploadProps {
  title: string;
  icon: string;
  btnOne: {
    text: string;
    handle: () => void;
  };
  btnTwo: {
    text: string;
    handle: () => void;
  };
}

const Upload: React.FC<UploadProps> = ({ title, icon, btnOne, btnTwo }) => {
  return (
    <div className="space-y-16">
      <h2 className="text-4xl font-semibold text-secondary">{title}</h2>
      <div className="grid grid-cols-2 items-center gap-14">
        <div className="bg-[#FAFAFA] p-14 rounded flex justify-center items">
          <Image
            src={icon}
            alt="placeholder_id_card"
            width={300}
            height={230}
          />
        </div>
        <div className="flex flex-col items-center gap-8">
          <button
            className="bg-primary text-white max-w-[280px] w-full py-3 px-4 rounded font-medium hover:bg-primaryHov transition duration-300 text-lg"
            onClick={btnOne.handle}
          >
            {btnOne.text}
          </button>
          <button
            className="bg-[#e3e8f0] max-w-[280px] w-full py-3 px-4 rounded font-medium text-secondary hover:bg-[#d4d9e2] transition duration-300 text-lg"
            onClick={btnTwo.handle}
          >
            {btnTwo.text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
