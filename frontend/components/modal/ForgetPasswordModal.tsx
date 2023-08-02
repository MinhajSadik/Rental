import { Card, BlureEffect, CloseButton } from "@/components";
import { useDispatch } from "react-redux";
import { closeForgetPassword } from "@/features/forgetpasswordToggleSlice";
import { SubFormOne, SubFormTwo, SubFormThree } from "@/components/pages/forgetpassword";

const ForgetPasswordModal: React.FC = () => {
  const dispatch = useDispatch();

  const handleCloseForgetPassword = (): void => {
    dispatch(closeForgetPassword());;
  };

  return (
    <BlureEffect>
      <Card>
        <CloseButton onClick={handleCloseForgetPassword}/>
        <SubFormOne />
        {/* <SubFormTwo/> */}
        {/* <SubFormThree/> */}
      </Card>
    </BlureEffect>
  );
};

export default ForgetPasswordModal;