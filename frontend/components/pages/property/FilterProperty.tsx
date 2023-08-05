import { openAllFilter } from "@/features/allFilterToggleSlice";
import { useState, useEffect, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import { useDispatch } from "react-redux";

const SearchArea: Array<string> = [
  "Sylhet - Akhalia",
  "Sylhet - Amborkhana",
  "Sylhet - Bondor",
  "Sylhet - Beanibazar",
  "Sylhet - Bishwanth",
  "Sylhet - Chouhatta",
  "Sylhet - Darga",
  "Sylhet - Fenchuganj",
  "Sylhet - Mejortila",
];

const FilterProperty: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredAreas, setFilteredAreas] = useState<string[]>(SearchArea);

  const [selectedProperty, setSelectedProperty] = useState<
    "Residential" | "Commercial"
  >("Residential");
  const [isPropertyCardVisible, setIsPropertyCardVisible] =
    useState<boolean>(false);

  const [selectedPropertyCategory, setSelectedPropertyCategory] = useState<
    string | null
  >(null);

  const [isMontlyPriceCardVisible, setIsMontlyPriceCardVisible] =
    useState<boolean>(false);

  const [isBedBathCardVisible, setIsBedBathCardVisible] =
    useState<boolean>(false);

  const [selectedBedCategory, setSelectedBedCategory] = useState<number | null>(null);

  const [selectedBathCategory, setSelectedBathCategory] = useState< number | null>(null);

  const dispatch = useDispatch();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchQuery(value);

    const filteredAreas = SearchArea.filter((area) =>
      area.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredAreas(filteredAreas);
  };

  const handlePropertyClick = (
    propertyType: "Residential" | "Commercial"
  ): void => {
    setSelectedProperty(propertyType);
    setIsPropertyCardVisible(true);
  };

  const handleSelectedPropertyReset = (): void => {
    setSelectedProperty("Residential");
    setSelectedPropertyCategory(null);
    setIsPropertyCardVisible(false);
  };

  const handleSelectedPropertyDone = (): void => {
    setIsPropertyCardVisible(false);
  };

  const handlePropertyCategoryClick = (category: string) => {
    setSelectedPropertyCategory((prevSelected) =>
      prevSelected === category ? null : category
    );
  };

  const handleMontlyPriceClick = (): void => {
    setIsMontlyPriceCardVisible(!isMontlyPriceCardVisible);
  };

  const handleMontlyPriceReset = (): void => {
    setIsMontlyPriceCardVisible(false);
  };

  const handleMontlyPriceDone = (): void => {
    setIsMontlyPriceCardVisible(false);
  };

  const handleBedBathClick = (): void => {
    setIsBedBathCardVisible(!isBedBathCardVisible);
  };

  const hadleBedCategoryClick = (category: number): void => {
    setSelectedBedCategory((prevSelected) =>
      prevSelected === category ? null : category
    );
  };

  const handleBathCategoryClick = (cateogry: number): void => {
    setSelectedBathCategory((prevSelected) => prevSelected === cateogry ? null : cateogry);
  };

  const handleSelectedBedBathReset = (): void => {
    setSelectedBedCategory(null);
    setSelectedBathCategory(null);
    setIsBedBathCardVisible(false);
  };

  const handleSelectedBedBathDone = (): void => {
    setIsBedBathCardVisible(false);
  };

  return (
    <section className="max-w-[1400px] w-full mx-auto lg:px-8 md:px-6 px-4 lg:py-10 py-8">
      <div className="flex items-center xl:gap-8 gap-6 relative">
        <div className="space-y-2 max-w-[226px] w-full">
          <h4 className="text-secondary font-medium">Selected area/location</h4>
          <div
            className={`flex justify-between items-center gap-2 px-3.5 py-3 border border-[#202020]/30 rounded-lg cursor-pointer hover:border-[#202020]/60 transition duration-300 group ${
              searchQuery ? "border-[#202020]/60" : ""
            }`}
          >
            <input
              type="text"
              placeholder="Type here"
              className="focus:outline-none max-w-[170px] w-full"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <span className="text-[#717171] group-hover:text-[#202020]/70">
              <BiSearch size={18} />
            </span>
          </div>
          {/* ==== card ===== */}
          {searchQuery &&
            filteredAreas.length > 0 && ( // Check if there is a search query and there are search results
              <div className="absolute shadow-xl border bg-white py-4 z-20 rounded-[10px] max-w-[230px] w-full">
                <ul>
                  {filteredAreas.map((area, i) => (
                    <li
                      className="px-6 py-2.5 cursor-pointer text-secondary hover:bg-[#EDF4FF]"
                      key={i}
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </div>
        <div className="space-y-2 max-w-[226px] w-full">
          <h4 className="text-secondary font-medium">Property Type</h4>
          <div
            className={`flex justify-between items-center gap-2 px-3.5 py-3 border border-[#202020]/30 rounded-lg cursor-pointer focus:border-[#202020]/60 hover:border-[#202020]/60 transition duration-300 group ${
              isPropertyCardVisible ? "border-[#202020]/60" : ""
            }`}
            onClick={() => setIsPropertyCardVisible(!isPropertyCardVisible)}
          >
            <div
              className={`ocus:outline-none text-[#717171] group-hover:text-[#202020]/70 ${
                isPropertyCardVisible ? "text-[#202020]" : ""
              }`}
            >
              Apartments
            </div>
            <span
              className={`text-[#717171] group-hover:text-[#202020]/70 ${
                isPropertyCardVisible ? "rotate-180" : "rotate-0"
              } transition duration-300`}
            >
              <FiChevronDown size={24} />
            </span>
          </div>
          {/* ==== Card ==== */}
          {isPropertyCardVisible && (
            <div className="absolute shadow-xl border bg-white px-4 pt-4 pb-6 z-20 rounded-[10px] space-y-4">
              <div className="flex justify-between items-center border-b">
                <div
                  className={`px-6 pb-2.5 cursor-pointer ${
                    selectedProperty === "Residential"
                      ? "border-b border-primary"
                      : "border-transparent"
                  }`}
                  onClick={() => handlePropertyClick("Residential")}
                >
                  <h4 className="text-xl text-center text-[#808080]">
                    Residential
                  </h4>
                </div>
                <div
                  className={`px-6 pb-2.5 cursor-pointer ${
                    selectedProperty === "Commercial"
                      ? "border-b border-primary"
                      : "border-transparent"
                  }`}
                  onClick={() => handlePropertyClick("Commercial")}
                >
                  <h4 className="text-xl text-center text-[#808080]">
                    Commercial
                  </h4>
                </div>
              </div>
              {/* ==== Residential Property ==== */}
              {selectedProperty === "Residential" && (
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 px-2">
                  <div
                    className={`px-4 py-2 border rounded-md text-center ${
                      selectedPropertyCategory === "Studio"
                        ? "bg-[#EDF4FF]"
                        : "border-[#202020]/30 hover:border-[#202020]/60"
                    } cursor-pointer transition duration-300`}
                    onClick={() => handlePropertyCategoryClick("Studio")}
                  >
                    Studio
                  </div>
                  <div
                    className={`px-4 py-2 border rounded-md text-center ${
                      selectedPropertyCategory === "Store"
                        ? "bg-[#EDF4FF]"
                        : "border-[#202020]/30 hover:border-[#202020]/60"
                    } cursor-pointer transition duration-300`}
                    onClick={() => handlePropertyCategoryClick("Store")}
                  >
                    Store
                  </div>
                  <div
                    className={`px-4 py-2 border rounded-md text-center ${
                      selectedPropertyCategory === "Flat"
                        ? "bg-[#EDF4FF]"
                        : "border-[#202020]/30 hover:border-[#202020]/60"
                    } cursor-pointer transition duration-300`}
                    onClick={() => handlePropertyCategoryClick("Flat")}
                  >
                    Flat
                  </div>
                  <div
                    className={`px-4 py-2 border rounded-md text-center ${
                      selectedPropertyCategory === "Room"
                        ? "bg-[#EDF4FF]"
                        : "border-[#202020]/30 hover:border-[#202020]/60"
                    } cursor-pointer transition duration-300`}
                    onClick={() => handlePropertyCategoryClick("Room")}
                  >
                    Room
                  </div>
                  <div
                    className={`px-4 py-2 border rounded-md text-center ${
                      selectedPropertyCategory === "Apartment"
                        ? "bg-[#EDF4FF]"
                        : "border-[#202020]/30 hover:border-[#202020]/60"
                    } cursor-pointer transition duration-300`}
                    onClick={() => handlePropertyCategoryClick("Apartment")}
                  >
                    Apartment
                  </div>
                  <div
                    className={`px-4 py-2 border rounded-md text-center ${
                      selectedPropertyCategory === "Floor"
                        ? "bg-[#EDF4FF]"
                        : "border-[#202020]/30 hover:border-[#202020]/60"
                    } cursor-pointer transition duration-300`}
                    onClick={() => handlePropertyCategoryClick("Floor")}
                  >
                    Floor
                  </div>
                  <div
                    className={`px-4 py-2 border rounded-md text-center ${
                      selectedPropertyCategory === "House"
                        ? "bg-[#EDF4FF]"
                        : "border-[#202020]/30 hover:border-[#202020]/60"
                    } cursor-pointer transition duration-300`}
                    onClick={() => handlePropertyCategoryClick("House")}
                  >
                    House
                  </div>
                  <div
                    className={`px-4 py-2 border rounded-md text-center ${
                      selectedPropertyCategory === "Building"
                        ? "bg-[#EDF4FF]"
                        : "border-[#202020]/30 hover:border-[#202020]/60"
                    } cursor-pointer transition duration-300`}
                    onClick={() => handlePropertyCategoryClick("Building")}
                  >
                    Building
                  </div>
                  <div
                    className="px-4 py-2 border border-primary rounded-md text-center cursor-pointer font-medium text-secondary transition duration-300 hover:bg-blue-50"
                    onClick={handleSelectedPropertyReset}
                  >
                    Reset
                  </div>
                  <button
                    className="px-4 py-2 border rounded-md text-center border-[#202020]/30 bg-primary hover:bg-primaryHov text-white font-medium transition duration-300"
                    onClick={handleSelectedPropertyDone}
                  >
                    Done
                  </button>
                </div>
              )}
              {/* ==== Commercial Property ==== */}
              {selectedProperty === "Commercial" && (
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 px-2">
                  <div
                    className={`px-4 py-2 border rounded-md text-center ${
                      selectedPropertyCategory === "Studio"
                        ? "bg-[#EDF4FF]"
                        : "border-[#202020]/30 hover:border-[#202020]/60"
                    } cursor-pointer transition duration-300`}
                    onClick={() => handlePropertyCategoryClick("Studio")}
                  >
                    Studio
                  </div>
                  <div
                    className={`px-4 py-2 border rounded-md text-center ${
                      selectedPropertyCategory === "Store"
                        ? "bg-[#EDF4FF]"
                        : "border-[#202020]/30 hover:border-[#202020]/60"
                    } cursor-pointer transition duration-300`}
                    onClick={() => handlePropertyCategoryClick("Store")}
                  >
                    Store
                  </div>
                  <div
                    className={`px-4 py-2 border rounded-md text-center ${
                      selectedPropertyCategory === "Flat"
                        ? "bg-[#EDF4FF]"
                        : "border-[#202020]/30 hover:border-[#202020]/60"
                    } cursor-pointer transition duration-300`}
                    onClick={() => handlePropertyCategoryClick("Flat")}
                  >
                    Flat
                  </div>
                  <div
                    className={`px-4 py-2 border rounded-md text-center ${
                      selectedPropertyCategory === "Room"
                        ? "bg-[#EDF4FF]"
                        : "border-[#202020]/30 hover:border-[#202020]/60"
                    } cursor-pointer transition duration-300`}
                    onClick={() => handlePropertyCategoryClick("Room")}
                  >
                    Room
                  </div>
                  <div
                    className={`px-4 py-2 border rounded-md text-center ${
                      selectedPropertyCategory === "Apartment"
                        ? "bg-[#EDF4FF]"
                        : "border-[#202020]/30 hover:border-[#202020]/60"
                    } cursor-pointer transition duration-300`}
                    onClick={() => handlePropertyCategoryClick("Apartment")}
                  >
                    Apartment
                  </div>
                  <div
                    className={`px-4 py-2 border rounded-md text-center ${
                      selectedPropertyCategory === "Floor"
                        ? "bg-[#EDF4FF]"
                        : "border-[#202020]/30 hover:border-[#202020]/60"
                    } cursor-pointer transition duration-300`}
                    onClick={() => handlePropertyCategoryClick("Floor")}
                  >
                    Floor
                  </div>
                  <div
                    className={`px-4 py-2 border rounded-md text-center ${
                      selectedPropertyCategory === "House"
                        ? "bg-[#EDF4FF]"
                        : "border-[#202020]/30 hover:border-[#202020]/60"
                    } cursor-pointer transition duration-300`}
                    onClick={() => handlePropertyCategoryClick("House")}
                  >
                    House
                  </div>
                  <div
                    className={`px-4 py-2 border rounded-md text-center ${
                      selectedPropertyCategory === "Building"
                        ? "bg-[#EDF4FF]"
                        : "border-[#202020]/30 hover:border-[#202020]/60"
                    } cursor-pointer transition duration-300`}
                    onClick={() => handlePropertyCategoryClick("Building")}
                  >
                    Building
                  </div>
                  <button
                    className="px-4 py-2 border border-primary rounded-md text-center cursor-pointer font-medium text-secondary transition duration-300 hover:bg-blue-50"
                    onClick={handleSelectedPropertyReset}
                  >
                    Reset
                  </button>
                  <button
                    className="px-4 py-2 border rounded-md text-center border-[#202020]/30 bg-primary hover:bg-primaryHov text-white font-medium transition duration-300"
                    onClick={handleSelectedPropertyDone}
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="space-y-2 max-w-[226px] w-full">
          <h4 className="text-secondary font-medium">Monthly Price</h4>
          <div
            className={`flex justify-between items-center gap-2 px-3.5 py-3 border border-[#202020]/30 rounded-lg cursor-pointer focus:border-[#202020]/60 hover:border-[#202020]/60 transition duration-300 group ${
              isMontlyPriceCardVisible ? "border-[#202020]/60" : ""
            }`}
            onClick={handleMontlyPriceClick}
          >
            <div className="focus:outline-none text-[#717171] group-hover:text-[#202020]/70">
              Lowest to highest
            </div>
            <span
              className={`text-[#717171] group-hover:text-[#202020]/70 ${
                isMontlyPriceCardVisible ? "rotate-180" : "rotate-0"
              } transition duration-300`}
            >
              <FiChevronDown size={24} />
            </span>
          </div>
          {/* ==== Card ==== */}
          {isMontlyPriceCardVisible && (
            <div className="absolute shadow-xl border bg-white px-4 pt-4 pb-6 z-20 rounded-[10px] space-y-4">
              <div className="grid grid-cols-2 items-center gap-x-6 gap-y-4 px-4 pb-2.5">
                <div className="cursor-pointer space-y-4">
                  <h4 className="text-xl text-start text-[#808080]">
                    Minimum
                  </h4>
                  <input
                    type="number"
                    className="max-w-[180px] px-4 py-2.5 rounded-md border border-[#202020]/30 focus:outline-none focus:border-2 focus:border-primary transition duration-300"
                  />
                </div>
                <div className="cursor-pointer space-y-4">
                  <h4 className="text-xl text-start text-[#808080]">
                    Maximum
                  </h4>
                  <input
                    type="number"
                    className="max-w-[180px] px-4 py-2.5 rounded-md border border-[#202020]/30 focus:outline-none focus:border-2 focus:border-primary transition duration-300"
                  />
                </div>
                <button
                  className="px-4 py-2.5 border border-primary rounded-md text-center cursor-pointer font-medium text-secondary transition duration-300 hover:bg-blue-50"
                  onClick={handleMontlyPriceReset}
                >
                  Reset
                </button>
                <button
                  className="px-4 py-2.5 border rounded-md text-center border-[#202020]/30 bg-primary hover:bg-primaryHov text-white font-medium transition duration-300"
                  onClick={handleMontlyPriceDone}
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-end xl:gap-8 gap-6 w-full">
          <div className="max-w-[226px] w-full space-y-2">
            <h4 className="text-secondary font-medium">Bed & bath</h4>
            <div
              className={`flex justify-between items-center gap-2 px-3.5 py-3 border border-[#202020]/30 rounded-lg cursor-pointer focus:border-[#202020]/60 hover:border-[#202020]/60 transition duration-300 group ${
                isBedBathCardVisible ? "border-[#202020]/60" : ""
              }`}
              onClick={handleBedBathClick}
            >
              <div className="focus:outline-none text-[#717171] group-hover:text-[#202020]/70">
                Enter here
              </div>
              <span
                className={`text-[#717171] group-hover:text-[#202020]/70 ${
                  isBedBathCardVisible ? "rotate-180" : "rotate-0"
                } transition duration-300`}
              >
                <FiChevronDown size={24} />
              </span>
            </div>
            {/* ==== Card ==== */}
            {isBedBathCardVisible && (
              <div className="absolute shadow-xl border bg-white px-4 pt-4 pb-6 z-20 rounded-[10px] space-y-4 max-w-[450px] w-full right-0">
                <div className="space-y-2.5 px-4 pb-2.5">
                  <h4 className="text-xl text-[#808080]">Beds</h4>
                  <div className="flex items-center flex-wrap gap-4">
                    <div
                      className={`border cursor-pointer px-6 py-1.5 rounded-full text-lg ${
                        selectedBedCategory === 1
                          ? "bg-[#EDF4FF]"
                          : "border-[#202020]/30 hover:border-[#202020]/60"
                      }`}
                      onClick={() => hadleBedCategoryClick(1)}
                    >
                      1
                    </div>
                    <div
                      className={`border cursor-pointer px-6 py-1.5 rounded-full text-lg ${
                        selectedBedCategory === 2
                          ? "bg-[#EDF4FF]"
                          : "border-[#202020]/30 hover:border-[#202020]/60"
                      }`}
                      onClick={() => hadleBedCategoryClick(2)}
                    >
                      2
                    </div>
                    <div
                      className={`border cursor-pointer px-6 py-1.5 rounded-full text-lg ${
                        selectedBedCategory === 3
                          ? "bg-[#EDF4FF]"
                          : "border-[#202020]/30 hover:border-[#202020]/60"
                      }`}
                      onClick={() => hadleBedCategoryClick(3)}
                    >
                      3
                    </div>
                    <div
                      className={`border cursor-pointer px-6 py-1.5 rounded-full text-lg ${
                        selectedBedCategory === 4
                          ? "bg-[#EDF4FF]"
                          : "border-[#202020]/30 hover:border-[#202020]/60"
                      }`}
                      onClick={() => hadleBedCategoryClick(4)}
                    >
                      4
                    </div>
                    <div
                      className={`border cursor-pointer px-6 py-1.5 rounded-full text-lg ${
                        selectedBedCategory === 5
                          ? "bg-[#EDF4FF]"
                          : "border-[#202020]/30 hover:border-[#202020]/60"
                      }`}
                      onClick={() => hadleBedCategoryClick(5)}
                    >
                      5
                    </div>
                    <div
                      className={`border cursor-pointer px-6 py-1.5 rounded-full text-lg ${
                        selectedBedCategory === 6
                          ? "bg-[#EDF4FF]"
                          : "border-[#202020]/30 hover:border-[#202020]/60"
                      }`}
                      onClick={() => hadleBedCategoryClick(6)}
                    >
                      6
                    </div>
                    <div
                      className={`border cursor-pointer px-6 py-1.5 rounded-full text-lg ${
                        selectedBedCategory === 7
                          ? "bg-[#EDF4FF]"
                          : "border-[#202020]/30 hover:border-[#202020]/60"
                      }`}
                      onClick={() => hadleBedCategoryClick(7)}
                    >
                      7
                    </div>
                    <div className="border border-[#202020]/30 hover:border-[#202020]/60 cursor-pointer px-6 py-1.5 rounded-full text-lg">
                      8+
                    </div>
                  </div>
                </div>
                <div className="space-y-2.5 px-4 pb-2.5">
                  <h4 className="text-xl text-[#808080]">Bathroom</h4>
                  <div className="flex items-center flex-wrap gap-4">
                    <div
                      className={`border cursor-pointer px-6 py-1.5 rounded-full text-lg ${
                        selectedBathCategory === 1
                          ? "bg-[#EDF4FF]"
                          : "border-[#202020]/30 hover:border-[#202020]/60"
                      }`}
                      onClick={() => handleBathCategoryClick(1)}
                    >
                      1
                    </div>
                    <div
                      className={`border cursor-pointer px-6 py-1.5 rounded-full text-lg ${
                        selectedBathCategory === 2
                          ? "bg-[#EDF4FF]"
                          : "border-[#202020]/30 hover:border-[#202020]/60"
                      }`}
                      onClick={() => handleBathCategoryClick(2)}
                    >
                      2
                    </div>
                    <div
                      className={`border cursor-pointer px-6 py-1.5 rounded-full text-lg ${
                        selectedBathCategory === 3
                          ? "bg-[#EDF4FF]"
                          : "border-[#202020]/30 hover:border-[#202020]/60"
                      }`}
                      onClick={() => handleBathCategoryClick(3)}
                    >
                      3
                    </div>
                    <div
                      className={`border cursor-pointer px-6 py-1.5 rounded-full text-lg ${
                        selectedBathCategory === 4
                          ? "bg-[#EDF4FF]"
                          : "border-[#202020]/30 hover:border-[#202020]/60"
                      }`}
                      onClick={() => handleBathCategoryClick(4)}
                    >
                      4
                    </div>
                    <div className="border border-[#202020]/30 hover:border-[#202020]/60 cursor-pointer px-6 py-1.5 rounded-full text-lg">
                      5+
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 px-4 pb-2.5">
                  <button
                    className="px-4 py-2.5 border border-primary rounded-md text-center cursor-pointer font-medium text-secondary transition duration-300 hover:bg-blue-50"
                    onClick={handleSelectedBedBathReset}
                  >
                    Reset
                  </button>
                  <button
                    className="px-4 py-2.5 border rounded-md text-center border-[#202020]/30 bg-primary hover:bg-primaryHov text-white font-medium transition duration-300"
                    onClick={handleSelectedBedBathDone}
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
          <button
            className="flex items-center gap-2 max-w-[180px] w-full px-3.5 py-3 border border-primary rounded-lg cursor-pointer hover:border-[#202020]/60 transition duration-300"
            onClick={() => dispatch(openAllFilter())}
          >
            <img
              src="/images/icon/filter.svg"
              alt="Filter icon"
              className="w-[22px] h-[22px]"
            />
            <span className="text-primary font-medium">Show all filters</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FilterProperty;
