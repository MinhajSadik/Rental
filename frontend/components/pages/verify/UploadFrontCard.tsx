import { Upload } from "@/components/pages/verify";
import { withVerifyWrapper } from "@/components/pages/verify";

const FrontCard: React.FC = () => {

  const handleChooseFile = () => {

  };

  const handleContinue = () => {
    
  };

  return (
    <Upload
      title="Upload Front of your identify card"
      icon="/images/placeholder_id_front_card.svg"
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

const FrontCardSection = withVerifyWrapper(FrontCard);

export default FrontCardSection;
