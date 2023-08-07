import { BiSolidPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

interface Property {
  image: string;
  title: string;
  location: string;
  size: string;
  bathTab: string;
  beth: string;
}

interface PropertyCardProps {
  item: Property;
  i: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ item, i }) => {
  return (
    <div
      className="bg-white rounded-[10px] shadow-xl shadow-[#ABBED1]/30"
      key={i}
    >
      <img
        src={item.image}
        alt="Image"
        width={400}
        height={400}
        className="w-full rounded-t-[10px]"
      />
      <div className="p-4 flex flex-col gap-2">
        <h5 className="text-secondary">{item.title}</h5>
        <p className="text-[#969693] text-[12px]">{item.location}</p>
        <div className="flex items-center gap-4 mt-1 text-[#575959]">
          <div className="flex items-center gap-2">
            <i>
              <img src="./images/icon/size.svg" alt="icon" />
            </i>
            <span className="text-[12px]">{item.size}</span>
          </div>
          <div className="flex items-center gap-2">
            <i>
              <img src="./images/icon/bath.svg" alt="icon" />
            </i>
            <span className="text-[12px]">{item.bathTab}</span>
          </div>
          <div className="flex items-center gap-2">
            <i>
              <img src="./images/icon/beth.svg" alt="icon" />
            </i>
            <span className="text-[12px]">{item.beth}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <button className="flex items-center gap-1 bg-primary text-white px-4 py-1.5 rounded hover:bg-primaryHov transition duration-300 text-sm">
            <BiSolidPhone size={20} />
            Call
          </button>
          <button className="flex items-center gap-1 bg-primary text-white px-4 py-1.5 rounded hover:bg-primaryHov transition duration-300 text-sm">
            <MdEmail size={20} />
            E-Mail
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
