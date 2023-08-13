import { useState } from "react";
import { BlureEffect } from "@/components";
import { Card } from "@components/pages/property";
import { IoMdClose } from "react-icons/io";
import { FiChevronDown } from "react-icons/fi";

interface AllFilterCardProps {
  setAllFilterToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const AllFilterCard: React.FC<AllFilterCardProps> = ({ setAllFilterToggle }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const options: Array<string> = [
    "Wifi",
    "CCTV",
    "Line Gas",
    "Garage",
    "Dining Room",
    "Air Condition",
  ];

  const handleCheckboxChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const dateOption: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const monthOption: Array<string> = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Augest",
    "September",
    "October",
    "November",
    "December",
  ];

  const yearOption: Array<number> = [2023, 2024, 2025, 2026, 2027];

  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);

  const [selectedRoomType, setSelectedRoomType] = useState<string>("");

  const handleRoomTypeClick = (roomType: string): void => {
    setSelectedRoomType(roomType);
  };

  const handleReset = (): void => {
    setSelectedOptions([]);
    setAllFilterToggle(false);
  }

  const handleDone = (): void => {
    setAllFilterToggle(false);
  };

  const closeAllFilterToggle = (): void => {
    setAllFilterToggle(false);
  };

  return (
    <BlureEffect
      // onClick={closeAllFilterToggle}
    >
      <Card>
        <div className="flex justify-between items-center gap-4">
          <div>
            <h4 className="text-secondary text-2xl font-semibold">
              Area in sqft
            </h4>
          </div>
          <button
            className="absolute right-5 top-6 text-[#9E9E9E] hover:text-secondary transition duration-300"
            onClick={closeAllFilterToggle}            
          >
            <IoMdClose size={24} />
          </button>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 items-center gap-x-6 gap-y-4">
            <div className="cursor-pointer space-y-4">
              <h4 className="text-xl text-start text-[#808080]">Minimum</h4>
              <input
                type="number"
                placeholder="0"
                className="w-full px-4 py-2.5 rounded-md border border-[#202020]/30 focus:outline-none focus:border-2 focus:border-primary"
              />
            </div>
            <div className="cursor-pointer space-y-4">
              <h4 className="text-xl text-start text-[#808080]">Maximum</h4>
              <input
                type="number"
                placeholder="Any"
                className="w-full px-4 py-2.5 rounded-md border border-[#202020]/30 focus:outline-none focus:border-2 focus:border-primary"
              />
            </div>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-xl text-start text-secondary font-semibold">
              Room type
            </h4>
            <div className="grid grid-cols-2 items-center gap-x-6 gap-y-4">
              <button 
                className={`px-4 py-2 border rounded-md text-center cursor-pointer transition duration-300 text-secondary ${selectedRoomType === "non-furnished" ? "bg-[#EDF4FF]" : "border-[#202020]/30 hover:border-[#202020]/60"}`}
                onClick={() => handleRoomTypeClick("non-furnished")}
              >
                Non-Furnished
              </button>
              <button 
                className={`px-4 py-2 border rounded-md text-center cursor-pointer transition duration-300 text-secondary ${selectedRoomType === "furnished" ? "bg-[#EDF4FF]" : "border-[#202020]/30 hover:border-[#202020]/60"}`}
                onClick={() => handleRoomTypeClick("furnished")}
              >
                Furnished
              </button>
            </div>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-xl text-start text-secondary font-semibold">
              Move in
            </h4>
            <div className="grid grid-cols-3 gap-6">
              <div className="relative">
                <div
                  className="w-full flex justify-between items-center gap-4 border border-[#202020]/30 hover:border-[#202020]/60 p-2 rounded-md cursor-pointer text-secondary transition duration-300"
                  onClick={() => setIsDateDropdownOpen(!isDateDropdownOpen)}
                >
                  <span>Date</span>
                  <FiChevronDown
                    className={`${
                      isDateDropdownOpen ? "rotate-180" : "rotate-0"
                    } transition duration-300`}
                    size={22}
                  />
                </div>
                {/* ==== dropdown ==== */}
                {isDateDropdownOpen && (
                  <div className="absolute w-full bg-white max-h-[150px] overflow-y-auto shadow rounded-lg mt-0.5">
                    <ul>
                      {dateOption.map((option, i) => (
                        <li
                          className="text-secondary font-semibold pl-6 pr-2 py-1.5 cursor-pointer hover:bg-[#eff4fc]"
                          key={i}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="relative">
                <div
                  className="w-full flex justify-between items-center gap-4 border border-[#202020]/30 hover:border-[#202020]/60 p-2 rounded-md cursor-pointer text-secondary transition duration-300"
                  onClick={() => setIsMonthDropdownOpen(!isMonthDropdownOpen)}
                >
                  <span>Month</span>
                  <FiChevronDown className={`${isMonthDropdownOpen ? "rotate-180" : "rotate-0"} transition duration-300`} size={22} />
                </div>
                {/* ==== dropdown ==== */}
                {isMonthDropdownOpen && (
                  <div className="absolute w-full bg-white max-h-[150px] overflow-y-auto shadow rounded-lg mt-0.5">
                    <ul>
                      {monthOption.map((option, i) => (
                        <li
                          className="text-secondary font-medium pl-6 pr-2 py-1.5 cursor-pointer hover:bg-[#eff4fc]"
                          key={i}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="relative">
                <div
                  className="w-full flex justify-between items-center gap-4 border border-[#202020]/30 hover:border-[#202020]/60 p-2 rounded-md cursor-pointer text-secondary transition duration-300"
                  onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                >
                  <span>Year</span>
                  <FiChevronDown
                    className={`${
                      isYearDropdownOpen ? "rotate-180" : "rotate-0"
                    } transition duration-300`}
                    size={22}
                  />
                </div>
                {/* ==== dropdown ==== */}
                {isYearDropdownOpen && (
                  <div className="absolute w-full bg-white max-h-[150px] overflow-y-auto shadow rounded-lg mt-0.5">
                    <ul>
                      {yearOption.map((option, i) => (
                        <li
                          className="text-secondary font-medium pl-6 pr-2 py-1.5 cursor-pointer hover:bg-[#eff4fc]"
                          key={i}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-xl text-start text-secondary font-semibold">
              Facilities
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {options.map((option) => (
                <label
                  className="flex items-center gap-2 text-secondary"
                  key={option}
                >
                  <input
                    type="checkbox"
                    value={option}
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-x-6 gap-y-4">
            <button 
              className="px-4 py-2 border border-primary rounded-md text-center cursor-pointer font-medium text-secondary transition duration-300 hover:bg-blue-50"
              onClick={handleReset}
            >
              Reset
            </button>
            <button 
              className="px-4 py-2 border rounded-md text-center border-[#202020]/30 bg-primary hover:bg-primaryHov text-white font-medium transition duration-300"
              onClick={handleDone}
            >
              Done
            </button>
          </div>
        </div>
      </Card>
    </BlureEffect>
  );
};

export default AllFilterCard;
