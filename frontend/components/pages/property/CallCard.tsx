import { BlureEffect } from "@/components";
import { Card } from "@components/pages/property";
import { IoMdClose } from "react-icons/io";

interface CallCardProps {
  setCallToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const CallCard: React.FC<CallCardProps> = ({ setCallToggle }) => {

  const closeCallCard = (): void => {
    setCallToggle(false);
  }

  return (
    <BlureEffect 
      // onClick={closeCallCard}
    >
      <Card>
        <div className="flex justify-between items-center gap-4">
          <div className="space-y-2">
            <h4 className="text-secondary text-2xl font-bold">Contact now</h4>
            <span className="text-secondary text-[12px]">rental.com</span>
          </div>
          <button 
            className="absolute right-5 top-6 text-[#9E9E9E] hover:text-secondary transition duration-300"
            onClick={closeCallCard}
          >
            <IoMdClose size={24} />
          </button>
        </div>
        <h4 className="text-[20px] text-secondary">
          Call us: <span className="font-bold text-primary">+88-01919191191</span>
        </h4>
        <p className="text-[12px] text-secondary">
          Note: The reference code for this property is{" "}
          <span className="font-semibold">ID-909131</span>
        </p>
      </Card>
    </BlureEffect>
  );
};

export default CallCard;
