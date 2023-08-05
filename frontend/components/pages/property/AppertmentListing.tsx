import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { appertmentCardData } from "@/constants";
import Image from "next/image";
import { BiSolidPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { openPropertyEmail } from "@/features/propertyemailToggleSlice";
import { useDispatch } from "react-redux";
import { openPropertyCall } from "@/features/propertyCallToggleSlice";

const appertmentTenants: Array<string> = [
  "All",
  "Family",
  "Bachelor",
  "Females",
  "Shared",
  "Student",
];

const shortingAppertmentList: Array<string> = [
  "Most Popular",
  "Lowest to Highest",
  "Highest to Lowest",
  "Most Relevant",
];

const AppertmentListing: React.FC = () => {

  const [activeAppertmentTenants, setActiveAppertmentTenants] =
    useState<string>("All");
  const [isShortingAppertmentOpen, setIsShortingAppertmentOpen] =
    useState<boolean>(false);
  
  const dispatch = useDispatch();

  return (
    <section className="max-w-[1400px] w-full mx-auto lg:px-8 md:px-6 px-4 lg:pt-6 lg:pb-8 pt-4 pb-6">
      <div className="space-y-6">
        <h2 className="text-[24px] font-bold text-secondary">
          Apartments Available in <span className="text-primary">Dhaka</span>
        </h2>
        <div className="flex justify-between items-center gap-4">
          <ul className="flex items-center gap-4">
            {appertmentTenants.map((teant, i) => (
              <li
                className={`cursor-pointer text-secondary px-2 pb-2 ${
                  activeAppertmentTenants === teant
                    ? "border-b-2 border-primary"
                    : "border-none"
                }`}
                key={i}
                onClick={() => setActiveAppertmentTenants(teant)}
              >
                {teant}
              </li>
            ))}
          </ul>
          <div
            className={`flex justify-between items-center border hover:border-[#202020]/60 px-4 py-2 max-w-[200px] w-full rounded-lg cursor-pointer relative ${isShortingAppertmentOpen ? "border-[#202020]/60" : "border-[#000000]/30"} transition duration-300`}
            onClick={() =>
              setIsShortingAppertmentOpen(!isShortingAppertmentOpen)
            }
          >
            <span className="text-secondary font-medium">Popular</span>
            <FiChevronDown className={`text-secondary font-medium ${isShortingAppertmentOpen ? "rotate-180" : "rotate-0"} transition duration-300`} size={22} />
            {/* ===== dropdown item ==== */}
            {isShortingAppertmentOpen && (
              <div className="absolute bg-white shadow w-full left-0 rounded-lg top-[45px]">
                <ul>
                  {shortingAppertmentList.map((list, i) => {
                    const isFirst = i === 0;
                    const isLast = i === shortingAppertmentList.length - 1;

                    return (
                      <li
                        className={`px-6 py-2 cursor-pointer hover:bg-primary hover:text-white ${
                          isFirst ? "rounded-t-lg" : "rounded-t-none"
                        } ${
                          isLast ? "rounded-b-lg" : "rounded-b-none"
                        } transition duration-300`}
                        key={i}
                      >
                        {list}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-3 items-center gap-6">
          {/* ==== appertment card ==== */}
          {appertmentCardData.map((card, i) => (
            <div
              className="bg-white border border-[#D9D9D9] rounded-[10px] cursor-pointer hover:shadow-lg transition duration-300" 
              key={i}
            >
              <Image
                src={card.img[0]}
                alt="appertment"
                className="rounded-t-[10px] w-full"
                width={420}
                height={250}
              />
              <div className="p-4 space-y-3.5">
                <div className="space-y-2">
                  <h4 className="text-[20px] font-semibold text-secondary">
                    {card.price.month} BDT/month
                  </h4>
                  <span className="text-[12px] text-[#969693]">{card.area}</span>
                </div>
                <div className="flex items-center gap-4 mt-1 text-[#575959]">
                  <div className="flex items-center gap-2">
                    <i>
                      <img src="./images/icon/size.svg" alt="icon" />
                    </i>
                    <span className="text-[12px]">
                      {card.roomsize} Sq Ft
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i>
                      <img src="./images/icon/bath.svg" alt="icon" />
                    </i>
                    <span className="text-[12px]">
                      {card.bathroom >= 10 ? card.bathroom : `0${card.bathroom}`}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i>
                      <img src="./images/icon/beth.svg" alt="icon" />
                    </i>
                    <span className="text-[12px]">
                      {card.bedroom >= 10 ? card.bedroom : `0${card.bedroom}`}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <button 
                    className="flex items-center gap-1 bg-primary text-white px-4 py-1.5 rounded hover:bg-primaryHov transition duration-300 text-sm"
                    onClick={() => dispatch(openPropertyCall())}
                  >
                    <BiSolidPhone size={20}/>
                    Call
                  </button>
                  <button 
                    className="flex items-center gap-1 bg-primary text-white px-4 py-1.5 rounded hover:bg-primaryHov transition duration-300 text-sm"
                    onClick={() => dispatch(openPropertyEmail())}
                  >
                    <MdEmail size={20}/>
                    E-Mail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-end space-y-4">
          <div className="flex justify-end items-center gap-6">
            <button className="bg-white shadow-sm p-2 rounded-full text-primary border hover:shadow-md">
              <HiArrowLeft size={20}/>
            </button>
            <button className="bg-white shadow-sm p-2 rounded-full text-primary border hover:shadow-md">
              <HiArrowRight size={20}/>
            </button>
          </div>
          <span className="text-[#969693] text-sm">Page 1 of 19</span>
        </div>
      </div>
    </section>
  );
};

export default AppertmentListing;
