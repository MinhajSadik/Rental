import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const Form: React.FC = () => {
  const dateOption: Array<string> = [
    "12/2/23",
    "12/2/23",
    "12/2/23",
    "12/2/23",
    "12/2/23",
    "12/2/23",
  ];
  const timeOption: Array<string> = [
    "10:20 am",
    "10:20 am",
    "10:20 am",
    "10:20 am",
    "10:20 am",
  ];

  const [isDateDropdownVisible, setIsDateDropdownVisible] =
    useState<boolean>(false);
  const [isTimeDropdownVisible, setIsTimeDropdownVisible] =
    useState<boolean>(false);

  const [selectedDate, setSelectedDate] = useState<string>(""); // State to hold selected date
  const [selectedTime, setSelectedTime] = useState<string>(""); // State to hold selected time

  const handleDateSelection = (option: string) => {
    setSelectedDate(option);
    setIsDateDropdownVisible(false); // Close the dropdown after selection
  };

  const handleTimeSelection = (option: string) => {
    setSelectedTime(option);
    setIsTimeDropdownVisible(false); // Close the dropdown after selection
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Get form data and perform any necessary actions
    const formData = new FormData(e.currentTarget);
    formData.append("selectedDate", selectedDate); // Add selected date to form data
    formData.append("selectedTime", selectedTime); // Add selected time to form data

    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    console.log("Form Data:", data);
  };

  return (
    <form
      className="bg-white shadow-lg p-8 rounded-[10px] space-y-5 border border-gray-50"
      onSubmit={handleSubmit}
    >
      <div className="bg-primary flex justify-center items-center p-4 rounded">
        <h4 className="xl:text-3xl text-2xl font-medium text-white text-center">
          Book a Schedule
        </h4>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div
          className={`border border-[#DFDFDF] rounded-[5px] px-4 py-1.5 flex justify-between items-center text-secondary relative hover:border-secondary/60 transition duration-300 cursor-pointer ${
            isDateDropdownVisible ? "border-secondary/60" : ""
          }`}
          onClick={() => setIsDateDropdownVisible(!isDateDropdownVisible)}
        >
          <span className="text-sm">{selectedDate || "Select Date"}</span>
          <BiChevronDown
            size={20}
            className={`${
              isDateDropdownVisible ? "rotate-180" : "rotate-0"
            } transition duration-300`}
          />
          {/* Dropdown List */}
          {isDateDropdownVisible && (
            <div className="absolute w-full bg-white max-h-[150px] overflow-y-auto shadow-lg rounded-lg right-0 left-0 top-[34px]">
              <ul>
                {dateOption.map((option, i) => (
                  <li
                    className="text-secondary cursor-pointer hover:bg-[#eff4fc] px-6 py-2 text-start text-sm"
                    key={i}
                    onClick={() => handleDateSelection(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Time Dropdown */}
        <div
          className={`border border-[#DFDFDF] rounded-[5px] px-4 py-1.5 flex justify-between items-center text-secondary relative hover:border-secondary/60 transition duration-300 cursor-pointer ${
            isTimeDropdownVisible ? "border-secondary/60" : ""
          }`}
          onClick={() => setIsTimeDropdownVisible(!isTimeDropdownVisible)}
        >
          <span className="text-sm">{selectedTime || "Select Time"}</span>
          <BiChevronDown
            size={20}
            className={`${
              isTimeDropdownVisible ? "rotate-180" : "rotate-0"
            } transition duration-300`}
          />
          {/* Dropdown List */}
          {isTimeDropdownVisible && (
            <div className="absolute w-full bg-white max-h-[150px] overflow-y-auto shadow-lg rounded-lg right-0 left-0 top-[34px]">
              <ul>
                {timeOption.map((option, i) => (
                  <li
                    className="text-secondary cursor-pointer hover:bg-[#eff4fc] px-6 py-2 text-start text-sm"
                    key={i}
                    onClick={() => handleTimeSelection(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <input
        type="text"
        placeholder="Your Name"
        id="name"
        name="name"
        className="px-4 py-2.5 w-full border border-[#C6C6C6] rounded-[5px] focus:outline-none focus:border-2 focus:border-primary transition duration-300"
      />
      <input
        type="number"
        id="contactNumber"
        name="contactNumber"
        placeholder="Contact Number"
        className="px-4 py-2.5 w-full border border-[#C6C6C6] rounded-[5px] focus:outline-none focus:border-2 focus:border-primary transition duration-300"
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your Email"
        className="px-4 py-2.5 w-full border border-[#C6C6C6] rounded-[5px] focus:outline-none focus:border-2 focus:border-primary transition duration-300"
      />
      <input
        type="text"
        id="address"
        name="address"
        placeholder="Your Address"
        className="px-4 py-2.5 w-full border border-[#C6C6C6] rounded-[5px] focus:outline-none focus:border-2 focus:border-primary transition duration-300"
      />
      <button className="bg-primary px-4 py-2.5 text-lg font-medium text-white w-full rounded hover:bg-primaryHov transition duration-300">
        Submit
      </button>
    </form>
  );
};

export default Form;
