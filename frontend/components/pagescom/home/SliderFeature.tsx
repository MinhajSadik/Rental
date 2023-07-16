import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../styles/sliderfeature.module.css";
import { sliderFeatureData } from "@/constants";

const SliderFeature: React.FC = () => {

  var settings = {    
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
      <div className="max-w-[1400px] mx-auto lg:px-8 md:px-6 px-4 lg:py-20 py-16 space-y-14">
        <h2 className="text-center xl:text-[42px] md:text-4xl text-3xl text-[#2C3849] font-semibold">
          What You Want?
        </h2>
        <div className={`${styles.slideFeature}`}>
          <Slider {...settings}>
            {sliderFeatureData.map((item, i) => (
              <div key={i}>
                <img
                  src={item.icon}
                  alt="icon"
                  className="bg-primary p-3 rounded-full"
                />
                <h4 className="text-[20px] text-secondary font-semibold">
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

export default SliderFeature;
