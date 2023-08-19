/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderFeatureData } from "@/constants";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

// ==== Previous Button ====
const PreviousBtn = (props: any) => {
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <button className={`${className} group`} onClick={onClick}>
          <FaChevronLeft size={24} className="text-primary group-hover:text-white" />
        </button>
      )}
    </>
  )
};

// ==== Next Button ====
const NextBtn = (props: any) => {
  const { className, onClick, slideCount, currentSlide } = props;
  return (
    <>
      {currentSlide !== slideCount - 4 && (
        <button className={`${className} group`} onClick={onClick}>
          <FaChevronRight size={24} className="text-primary group-hover:text-white"/>
        </button>
      )}
    </>
  )
};

const WhatYouWant: React.FC = () => {

  var settings = {    
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <PreviousBtn/>,
    nextArrow: <NextBtn/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <section className="bg-transparent">
      <div className="max-w-[1400px] mx-auto lg:px-8 md:px-6 px-4 lg:py-[100px] py-20 space-y-4">
        <h2 className="text-center xl:text-[42px] md:text-4xl text-3xl text-[#2C3849] font-semibold">
          What You Want?
        </h2>
        <div className="slider-feature ">
          <Slider {...settings}>
            {sliderFeatureData.map((item, i) => (
              <div className="flex flex-col items-center space-y-4 bg-white p-8 rounded-tr-[28px] rounded-bl-[28px] shadow-xl border border-gray-100 my-10" key={i}>
                <img
                  src={item.icon}
                  alt="icon"
                  className="bg-primary p-3 rounded-full mx-auto"
                />
                <h4 className="text-[20px] text-secondary font-semibold text-center">
                  {item.name}
                </h4>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default WhatYouWant;
