import React, { useState } from "react";
import { Input } from "@/components";

const SubFormOne: React.FC = () => {

  // State to store form data
  const [formData, setFormData] = useState({
    emailOrPhone: "",
  });

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here, you can process the form data as per your requirements.
    console.log(formData);
  };

  // Function to handle form field changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <h2 className="text-secondary text-[24px] text-center font-semibold mb-8">
        Forget Password
      </h2>
      <label htmlFor="emailOrPhone" className="text-lg text-secondary">
        Enter Your Mobile Number Or Email
      </label>
      <Input
        type="text"
        name="emailOrPhone"
        value={formData.emailOrPhone}
        onChange={handleChange}
        placeholder="Email Or Phone Number"
      />
      <div className="flex justify-center items-center mt-1.5">
        <button
          className="bg-primary text-white font-medium text-lg px-4 py-2.5 rounded w-full hover:bg-primaryHov transition duration-300"
          type="submit"
        >
          Send Code
        </button>
      </div>
    </form>
  );
};

export default SubFormOne;
