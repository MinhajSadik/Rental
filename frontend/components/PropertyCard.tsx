import { BiSolidPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

interface Property {
  id: string;
  img: Array<string>;
  price: {
    month: number;
  };
  area: string;
  roomsize: number;
  bathroom: number;
  bedroom: number;
}

interface PropertyCardProps {
  item: Property;
  i: number;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  callClick: () => void;
  emailClick: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  item,
  i,
  onClick,
  callClick,
  emailClick,
}) => {
  return (
    <div
      className="bg-white border border-[#D9D9D9] rounded-[10px] cursor-pointer shadow-md shadow-[#ABBED1]/30 hover:shadow-lg transition duration-300"
      key={i}
      onClick={onClick}
    >
      <img
        src={item.img[0]}
        alt="Image"
        width={400}
        height={400}
        className="w-full rounded-t-[10px]"
      />
      <div className="p-4 flex flex-col gap-2">
        <h5 className="text-secondary font-semibold text-[20px]">
          {item.price.month} BDT/month
        </h5>
        <p className="text-[#969693] text-[12px]">{item.area}</p>
        <div className="flex items-center gap-4 mt-1 text-[#575959]">
          <div className="flex items-center gap-2">
            <i>
              <img src="/images/icon/size.svg" alt="icon" />
            </i>
            <span className="text-[12px]">
              {item.roomsize} Sq Ft
            </span>
          </div>
          <div className="flex items-center gap-2">
            <i>
              <img src="/images/icon/bath.svg" alt="icon" />
            </i>
            <span className="text-[12px]">
              {item.bathroom >= 10 ? item.bathroom : `0${item.bathroom}`}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <i>
              <img src="/images/icon/beth.svg" alt="icon" />
            </i>
            <span className="text-[12px]">
              {item.bedroom >= 10 ? item.bedroom : `0${item.bedroom}`}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <button
            className="flex items-center gap-1 bg-primary text-white px-4 py-1.5 rounded hover:bg-primaryHov transition duration-300 text-sm"
            onClick={callClick}
          >
            <BiSolidPhone size={20} />
            Call
          </button>
          <button
            className="flex items-center gap-1 bg-primary text-white px-4 py-1.5 rounded hover:bg-primaryHov transition duration-300 text-sm"
            onClick={emailClick}
          >
            <MdEmail size={20} />
            E-Mail
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
