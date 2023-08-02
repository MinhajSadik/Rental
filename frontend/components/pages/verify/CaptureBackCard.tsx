import React from "react"
import { Capture, withVerifyWrapper } from "@/components/pages/verify";

const CaptureBackCard: React.FC = () => {

  const handleCaptureImage = (): void => {
    
  }

  const handleContinue = (): void => {

  }

  return (
    <Capture
      title="Capture Back of ID"
      btnOne={{
        text: "Capture Image",
        handle: handleCaptureImage
      }}
      image="/images/placeholder_id_back_card.svg"
      btnTwo={{
        text: "Continue",
        handle: handleContinue
      }}
    />
  )
}

const CaptureBackCardSection = withVerifyWrapper(CaptureBackCard);

export default CaptureBackCardSection;