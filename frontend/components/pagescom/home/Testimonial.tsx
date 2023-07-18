import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialData } from "@/constants";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Testimonial: React.FC = () => {
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: true,
    dotsClass: "slick-dots circle-indicator",
    ref: sliderRef,
    slidesToShow: 3,
    slidesToScroll: 3,
    customPaging: (i: any) => (
      <div className="opacity-0">
        {i}
      </div>
    )
  };

  return (
    <section className="bg-transparent">
      <div className="max-w-[1400px] mx-auto lg:px-8 md:px-6 px-4 lg:py-20 py-16 space-y-4">
        <div className="space-y-4">
          <h2 className="text-center text-[35px] font-semibold text-secondary">
            Trusted by Thousands of <br /> Happy Customer
          </h2>
          <p className="text-center text-lg text-[#575959]">
            Don’t just take our word for it – read what real customers have{" "}
            <br /> to say about Your.Rentals.
          </p>
        </div>
        <div className="testimonial">
          <Slider {...settings}>
            {testimonialData.map((item, i) => (
              <div className="bg-white rounded-[10px] p-6 space-y-4 shadow-lg border border-gray-100 my-10" key={i}>
                <div className="flex items-center justify-between mr-6">
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt="testimonial"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="text-secondary font-semibold text-lg">
                        {item.name}
                      </h4>
                      <p className="text-sm text-[#575959]">
                        {item.location}
                      </p>
                    </div>
                  </div>
                  <div>
                    <span className="text-[#486284]">
                      {item.rating}
                    </span>
                  </div>
                </div>
                <p className="text-lg text-[#575959] ">
                  {item.feedback}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;