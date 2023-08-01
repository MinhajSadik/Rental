import React from "react"
import { Capture, withVerifyWrapper } from "@/components/pages/verify";

const CaptureImage: React.FC = () => {

  const handleCaptureImage = (): void => {
    
  }

  const handleContinue = (): void => {

  }

  return (
    <Capture
      title="Capture Image of your face"
      btnOne={{
        text: "Capture Image",
        handle: handleCaptureImage
      }}
      image="/images/placeholder_image.svg"
      btnTwo={{
        text: "Continue",
        handle: handleContinue
      }}
    />
  )
}

const CaptureImageSection = withVerifyWrapper(CaptureImage);

export default CaptureImageSection;