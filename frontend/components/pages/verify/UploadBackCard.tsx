import { Upload } from "@/components/pages/verify";
import { withVerifyWrapper } from "@/components/pages/verify";

const BackCard: React.FC = () => {

  const handleChooseFile = () => {

  };

  const handleContinue = () => {

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