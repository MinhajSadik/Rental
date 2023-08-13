import {useContext} from "react"
import { Upload } from "@/components/pages/verify";
import { withVerifyWrapper } from "@/components/pages/verify";
import { AppContext } from "@/context/ApplicationContext";


const BackCard: React.FC = () => {
  const { setActiveComponent} = useContext(AppContext)

  const handleChooseFile = () => {

  };

  const handleContinue = () => {
    setActiveComponent(6)
  };

  return (
    <Upload
      title="Upload Back of your identify card"
      icon="/images/placeholder_id_back_card.svg"
      input={{
        text: "Choose File",
        handle: handleChooseFile,
      }}
      btn={{ 
        text: "Continue", 
        handle: handleContinue 
      }}
    />
  );
};

const BackCardSection = withVerifyWrapper(BackCard);

export default BackCardSection;