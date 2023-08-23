import React, { useContext } from "react";
import { SubFormOne, SubFormTwo, SubFormThree } from "@/components/pages/forgetpassword";
import { AppContext } from "@/context/ApplicationContext";

const Form: React.FC = () => {
  const { activeComponent } = useContext(AppContext)
  return (
    <div className="space-y-8 max-w-[557px] mx-auto">
      {
        activeComponent === 1 && <SubFormOne/>  
      }
      {
        activeComponent === 2 && <SubFormTwo/>
      }
      {
        activeComponent === 3 && <SubFormThree/>
      }
    </div>
  );
};

export default Form;