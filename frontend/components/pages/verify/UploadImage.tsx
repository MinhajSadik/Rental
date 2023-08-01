import { Upload } from "@/components/pages/verify";
import { withVerifyWrapper } from "@/components/pages/verify";

const UploadImage: React.FC = () => {

  const handleChooseFile = () => {

  };

  const handleContinue = () => {

  };

  return (
    <Upload
      title="Upload Image of your face"
      icon="/images/placeholder_image.svg"
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

const UploadImageSection = withVerifyWrapper(UploadImage);

export default UploadImageSection;