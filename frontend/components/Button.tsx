import React, { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button
      className="bg-primary text-white font-medium text-lg px-4 py-2.5 rounded w-full hover:bg-primaryHov transition duration-300"
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;