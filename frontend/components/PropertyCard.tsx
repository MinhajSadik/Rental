import { BiSolidPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

interface Property {
  id: string;
  images: [string];
  price: {
    month: number;
  };
  location: string;
  roomSize: string;
  bathrooms: string;
  bedrooms: string;
}

interface PropertyCardProps {
  item: Property;
  key: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  callClick: () => void;
  emailClick: () => void;
}

// ==== Previous Button ====
const PreviousBtn = (props: any) => {
  const { className, onClick, currentSlide } = props;

  const handleIconClick = (e: React.MouseEvent<SVGElement>) => {};

  return (
    <>
      {currentSlide !== 0 && (
        <button className={`${className} group prev-button`} onClick={onClick}>
          <FaChevronLeft
            size={14}
            className="text-gray-600 group-hover:text-gray-700"
            onClick={handleIconClick}
          />
          <span className="text-black">hello</span>
        </button>
      )}
    </>
  );
};

// ==== Next Button ====
const NextBtn = (props: any) => {
  const { className, onClick, slideCount, currentSlide } = props;

  const handleIconClick = (e: React.MouseEvent<SVGElement>) => {};
  
  return (
    <>
      {currentSlide !== slideCount - 1 && (
        <button className={`${className} group next-button`} onClick={onClick}>
          <FaChevronRight
            size={14}
            className="text-gray-600 group-hover:text-gray-700"
            onClick={handleIconClick}
          />
        </button>
      )}
    </>
  );
};

const PropertyCard: React.FC<PropertyCardProps> = ({
  item,
  onClick,
  callClick,
  emailClick,
}) => {
  const Settings = {
    dots: true,
    dotsClass: "slick-dots circle-indicator",
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    customPaging: (i: any) => (
      <button className="opacity-0">
        {i}
      </button>
    )
  };
  console.log(item)
  return (
    <div
      className="bg-white border border-[#D9D9D9] rounded-[10px] cursor-pointer shadow-md shadow-[#ABBED1]/30 hover:shadow-lg transition duration-300 property-card"
      onClick={onClick}
    >
      <div className="property">
        <Slider {...Settings}>
          {item?.images?.map((img: string) => (
            <img
            key={Math.random()}
              src={img}
              alt="Image"
              width={400}
              height={400}
              className="w-full rounded-t-[10px] max-w-[400px] max-h-[400px] w-auto"
            />
          ))}
        </Slider>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h5 className="text-secondary font-semibold text-[20px]">
          {item?.price ? `${item?.price} BDT/month` : "Negotiable"} 
        </h5>
        <p className="text-[#969693] text-[12px]">{item?.location}</p>
        <div className="flex items-center gap-4 mt-1 text-[#575959]">
          <div className="flex items-center gap-2">
            <i>
              <img src="/images/icon/size.svg" alt="icon" />
            </i>
            <span className="text-[12px]">{item?.roomSize} Sq Ft</span>
          </div>
          <div className="flex items-center gap-2">
            <i>
              <img src="/images/icon/bath.svg" alt="icon" />
            </i>
            <span className="text-[12px]">
              {item?.bathrooms >= 10 ? item?.bathrooms : `0${item?.bathrooms}`}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <i>
              <img src="/images/icon/beth.svg" alt="icon" />
            </i>
            <span className="text-[12px]">
              {item?.bedrooms >= 10 ? item?.bedrooms : `0${item?.bedrooms}`}
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
