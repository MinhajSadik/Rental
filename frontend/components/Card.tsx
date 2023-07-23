import React from "react";

interface CardProps {
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="max-w-[520px] max-h-[560px] overflow-y-auto px-8 py-12 w-full mx-auto bg-white shadow-lg border border-gray-100 rounded-[10px] relative animate-slide-up z-40">
      {children}
    </div>
  )
}

export default Card;