import { BlureEffect } from "@/components";
import { closeSavePropertyToggle } from "@/features/savePropertyToggleSlice";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from "react-redux";

const SaveCard: React.FC = () => {

  const dispatch = useDispatch();

  return (
    <BlureEffect>
      <div className="max-w-[540px] w-full max-h-[440px] overflow-y-auto bg-white rounded-[10px] pt-6 pb-8 px-6 space-y-4">
        <div className="flex justify-between items-center gap-6">
          <h4 className="text-[25px] font-medium text-secondary">
            Create Wishlist
          </h4>
          <button
            className="text-[#A29999] hover:text-secondary transition duration-300"
            onClick={() => dispatch(closeSavePropertyToggle())}
          >
            <MdOutlineClose size={24} />
          </button>
        </div>
        <div className="border-b pb-4 space-y-2">
          <textarea 
            name="" 
            id="" 
            cols={30}
            rows={2}
            className="w-full h-full border border-[#000000]/20 rounded-[5px] p-4 focus:outline-none focus:border-2 focus:border-primary transition duration-300"
            placeholder="Name"
          >
          </textarea>
          <p className="text-[#828282] text-[12px]">
            17/50 characters
          </p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <button className="underline text-[#4D4D4D] hover:text-secondaryHov transition duration-300">
            clear
          </button>
          <button className="px-6 py-2 rounded-md bg-primary hover:bg-primaryHov transition duration-300 text-white text-sm">
            Create
          </button>
        </div>
      </div>
    </BlureEffect>
  );
};

export default SaveCard;
