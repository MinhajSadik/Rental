import React, { useState } from "react";
import { Input, Button } from "@/components";
import Link from "next/link";

const SubFormTwo: React.FC = () => {
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
        <h4 className="text-[22px] text-secondary">
          We sent a code to your email
        </h4>
        <span className="text-secondary">
          Enter the 6-digit verification code sent to t*****@gmail.com.{" "}
          <Link href="/" className="text-primary underline font-medium">
            Change
          </Link>{" "}
        </span>
      </label>
      <Input
        type="text"
        name="code"
        value={formData.code}
        onChange={handleChange}
        placeholder="Enter your code"
      />
      <button className="font-medium text-semibold text-primary transition duration-300 hover:underline mb-1.5">
        Resend SMS
      </button>
      <Button>Submit</Button>
      <p className="text-sm text-secondary">
        If you don't see the email in your inbox, check your spam folder.
      </p>
      <button className="text-primary font-medium underline">
        Can’t access this email?
      </button>
    </form>
  );
};

export default SubFormTwo;
