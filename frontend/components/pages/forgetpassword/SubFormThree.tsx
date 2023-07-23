import React, { useState } from "react";
import { Input, Button } from "@/components";
import Link from "next/link";

const SubFormThree: React.FC = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    code: "", // Corrected the field name to match the input name
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
    <form className="flex flex-col items-start gap-3" onSubmit={handleSubmit}>
      <label htmlFor="code" className="flex flex-col gap-2">
        <h4 className="text-[22px] text-secondary">Choose a new password</h4>
        <span className="text-secondary text-[15px]">
          Create a new password that is at least 6 characters long. A strong
          password has a combination of letters, digits and punctuation marks.
        </span>
      </label>
      <Input
        type="password"
        name="password"
        value={formData.code}
        onChange={handleChange}
        placeholder="New password"
      />
      <div className="flex flex-col items-center w-full mt-1.5">
        <Button>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default SubFormThree;
