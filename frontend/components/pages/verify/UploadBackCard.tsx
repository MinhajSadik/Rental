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
      btnOne={{
        text: "Choose File",
        handle: handleChooseFile,
      }}
      btnTwo={{ 
        text: "Continue", 
        handle: handleContinue 
      }}
    />
  );
};

const BackCardSection = withVerifyWrapper(BackCard);

export default BackCardSection;