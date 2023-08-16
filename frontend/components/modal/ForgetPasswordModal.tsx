import React, { useContext } from "react";
import { Card, BlureEffect, CloseButton } from "@/components";
import { SubFormOne, SubFormTwo, SubFormThree } from "@/components/pages/forgetpassword";
import { closeForgetPassword } from "@/features/forgetpasswordToggleSlice";
import { useDispatch } from "react-redux";
import { AppContext } from "@/context/ApplicationContext";

const ForgetPasswordModal: React.FC = () => {
  const { activeComponent } = useContext(AppContext)
  
  const dispatch = useDispatch();

  const closeForgetPasswordToggle = (): void => {
    dispatch(closeForgetPassword());
  }

  return (
    <BlureEffect
      // onClick={closeForgetPasswordToggle}
    >
      <Card>
        <CloseButton onClick={closeForgetPasswordToggle}/>
        {
          activeComponent === 1 && <SubFormOne/>  
        }
        {
          activeComponent === 2 && <SubFormTwo/>
        }
        {
          activeComponent === 3 && <SubFormThree/>
        }
      </Card>
    </BlureEffect>
  );
};

export default ForgetPasswordModal;