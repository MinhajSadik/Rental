import React from "react";

interface FormContainerProps {
  children: React.ReactNode;
}

const FormContainer: React.FC<FormContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[520px] mx-auto border border-[#AAAEB2] rounded-[10px] p-8">
      {children}
    </div>
  )
}

export default FormContainer;