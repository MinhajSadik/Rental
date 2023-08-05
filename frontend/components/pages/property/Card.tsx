import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="absolute max-w-[520px] w-full max-h-[520px] overflow-y-auto bg-white p-6 shadow rounded-[10px] space-y-6">
      {children}
    </div>
  );
};

export default Card;
