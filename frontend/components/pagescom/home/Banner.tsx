import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { categoryData, cityData } from "@/constants";

const Banner: React.FC = () => {
  // ==== selected city and area state ====
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedArea, setSelectedArea] = useState<string>("");

  // ==== dropdown state ====
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [isAreaOpen, setIsAreaOpen] = useState(false);

  const toggleCategoryDropdown = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const toggleCityDropdown = () => {
    setIsCityOpen(!isCityOpen);
  };

  const toggleAreaDropdown = () => {
    setIsAreaOpen(!isAreaOpen);
  };

  return (
    <section className="bg-[url('/images/hero.png')] bg-no-repeat bg-top bg-cover w-full">
      <div className="max-w-[1400px] mx-auto lg:px-8 md:px-6 px-4 lg:py-20 py-16 flex justify-start">
        <div className="flex flex-col md:gap-6 gap-4 items-start max-w-3xl">
          <h1 className="xl:text-[46px] md:text-4xl text-3xl xl:leading-tight md:leading-tight leading-tight text-secondary font-bold">
            Find Your Perfect Home: <br /> Explore
            <span className="text-primary">
              {" "}
              Premier House <br /> Rentals
            </span>
          </h1>
          <p className="text-[#575959] text-medium">
            Discover dream rentals with curated listings. Browse detailed <br />
            descriptions and photos. Rent with ease and unlock your new home.
          </p>
          <div className="bg-white py-4 flex items-center gap-2 border border-blue-200 rounded-[10px] shadow-xl">
            <div className="border-r-2 border-[#486284] px-2.5 space-y-1 relative">
              <h4 className="font-bold">Category</h4>
              <div
                className="flex items-center gap-6 text-[#969693] cursor-pointer hover:text-gray-500"
                onClick={toggleCategoryDropdown}
              >
                <p className="text-[12px] font-medium">
                  Select your categories
                </p>
                <span
                  className={`mt-1 text-xl transform transition duration-300 ${
                    isCategoryOpen ? "rotate-180" : ""
                  }`}
                >
                  <FiChevronDown />
                </span>
              </div>
              {/* ==== Dropdown list ==== */}
              {isCategoryOpen && (
                <div className="bg-white absolute z-10 rounded-md w-full shadow-lg left-1 border border-gray-100">
                  <ul className="py-4">
                    {categoryData.map((item) => (
                      <li
                        className="px-3 py-1.5 text-sm text-secondary cursor-pointer hover:bg-[#eff4fc]"
                        key={item.id}
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="border-r-2 border-[#486284] px-2.5 space-y-1 relative">
              <h4 className="font-bold">City</h4>
              <div
                className="flex items-center gap-6 text-[#969693] cursor-pointer hover:text-gray-500"
                onClick={toggleCityDropdown}
              >
                <p className="text-[12px] font-medium">Select your City</p>
                <span
                  className={`mt-1 text-xl transform transition duration-300 ${
                    isCityOpen ? "rotate-180" : ""
                  }`}
                >
                  <FiChevronDown />
                </span>
              </div>
              {/* ==== Dropdown list ==== */}
              {isCityOpen && (
                <div className="bg-white absolute z-10 rounded-md w-full shadow-lg left-1 border border-gray-100">
                  <ul className="py-4">
                    {cityData.map((item) => (
                      <li
                        className={`px-3 py-1.5 text-sm text-secondary cursor-pointer ${
                          item.name === selectedCity
                            ? "bg-[#eff4fc]"
                            : "hover:bg-[#eff4fc]"
                        }`}
                        key={item.id}
                        onClick={() => setSelectedCity(item.name)}
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="px-2 space-y-1 relative">
              <h4 className="font-bold">Area</h4>
              <div
                className="flex items-center gap-6 text-[#969693] cursor-pointer hover:text-gray-500"
                onClick={toggleAreaDropdown}
              >
                <p className="text-[12px] font-medium">Select your Area</p>
                <span
                  className={`mt-1 text-xl transform transition duration-300 ${
                    isAreaOpen ? "rotate-180" : ""
                  }`}
                >
                  <FiChevronDown />
                </span>
              </div>
              {/* ==== Dropdown list ==== */}
              {isAreaOpen && (
                <div className="bg-white absolute z-10 rounded-md w-full shadow-lg left-1 border border-gray-100">
                  <ul className="py-4">
                    {cityData
                      .find((city) => city.name === selectedCity)
                      ?.area.map((area) => (
                        <li
                          className="px-3 py-1.5 text-sm text-secondary cursor-pointer hover:bg-[#eff4fc]"
                          key={area}
                          onClick={() => setSelectedArea(area)}
                        >
                          {area}
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="px-3">
              <button className="bg-primary text-white px-6 py-2 rounded hover:bg-primaryHov transition duration-300">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
