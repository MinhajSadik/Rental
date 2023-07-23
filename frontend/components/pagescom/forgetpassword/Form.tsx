import React, { useState } from "react";
import { Input } from "@/components";

const Form: React.FC = () => {
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
    <form className="space-y-12" onSubmit={handleSubmit}>
      <h2 className="text-secondary text-[24px] text-center font-semibold">
        Forget Password
      </h2>
      <div className="flex flex-col gap-4">
        <label htmlFor="emailOrPhone" className="text-[20px] text-secondary">
          Enter Your Mobile Number Or Email
        </label>
        <Input
          type="text"
          name="emailOrPhone"
          value={formData.emailOrPhone}
          onChange={handleChange}
          placeholder="Email Or Phone Number"
        />
        <div className="flex justify-center items-center mt-2">
          <button
            className="bg-primary text-white font-medium text-[20px] px-4 py-2.5 rounded w-full hover:bg-primaryHov transition duration-300"
            type="submit"
          >
            Send Code
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;