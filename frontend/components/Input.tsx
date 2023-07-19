import React from "react";

interface InputProps {
  type: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, name, value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="flex w-full border border-gray-300 rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary"
      placeholder={placeholder}
    />
  );
};

export default Input;