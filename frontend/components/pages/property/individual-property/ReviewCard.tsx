import { BlureEffect } from "@/components";
import { MdOutlineClose } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";

interface ReviewCardProps {
  setReviewToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ setReviewToggle }) => {

  const closeReviewToggle = (): void => {
    setReviewToggle(false);
  }

  return (
    <BlureEffect 
      // onClick={closeReviewToggle}
    >
      <div className="max-w-[540px] w-full max-h-[440px] overflow-y-auto bg-white rounded-[10px] pt-6 pb-8 px-6 space-y-4">
        <div className="flex justify-between items-center gap-6">
          <h4 className="text-[25px] font-medium text-secondary">Reviews</h4>
          <button 
            className="text-[#A29999] hover:text-secondary transition duration-300"
            onClick={closeReviewToggle}
          >
            <MdOutlineClose size={24} />
          </button>
        </div>
        <div className="border border-[#000000]/20 rounded-[5px] px-5 py-4 space-y-2">
          <p className="text-[15px] text-secondary">
            Lorem ipsum dolor sit amet consectetur. Aliquam facilisis nulla
            ipsum non dui. Feugiat quis morbi non fermentum cras tristique nec
            bibendum enim. Scelerisque semper at commodo sed est porttitor nec
            gravida. Nisl eget aliquam malesuada velit amet ut feugiat.
          </p>
          <div className="flex items-center gap-1 text-[#DABB18]">
            {[...Array(5)].map(() => (
              <AiFillStar size={14} key={Math.random()} />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div>
              <Image
                src="/images/reviewer.png"
                alt="reviewer image"
                width={40}
                height={40}
              />
            </div>
            <div className="flex flex-col">
              <h6 className="text-sm font-semibold text-secondary">Amir</h6>
              <span className="text-[12px] text-secondary">september, 2023</span>
            </div>
          </div>
        </div>
      </div>
    </BlureEffect>
  );
};

export default ReviewCard;
