import { Card, BlureEffect, CloseButton } from "@/components";
import { SubFormOne, SubFormTwo, SubFormThree } from "@/components/pages/forgetpassword";
import { closeForgetPassword } from "@/features/forgetpasswordToggleSlice";
import { useDispatch } from "react-redux";

const ForgetPasswordModal: React.FC = () => {
  
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
        <SubFormOne />
        <SubFormTwo/>
        {/* <SubFormThree/> */}
      </Card>
    </BlureEffect>
  );
};

export default ForgetPasswordModal;