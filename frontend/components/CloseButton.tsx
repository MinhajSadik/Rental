// CloseButton.tsx
import React from "react";
import { CgClose } from "react-icons/cg";

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <button
      className="absolute right-5 top-6 text-[#9E9E9E] hover:text-secondary transition duration-300"
      onClick={onClick}
    >
      <CgClose size={26} />
    </button>
  );
};

export default CloseButton;