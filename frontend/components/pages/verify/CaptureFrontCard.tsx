import React from "react"
import { Capture, withVerifyWrapper } from "@/components/pages/verify";

const CaptureFrontCard: React.FC = () => {

  const handleCaptureImage = (): void => {
    
  }

  const handleContinue = (): void => {

  }

  return (
    <Capture
      title="Capture front of ID"
      btnOne={{
        text: "Capture Image",
        handle: handleCaptureImage
      }}
      image="/images/placeholder_id_front_card.svg"
      btnTwo={{
        text: "Continue",
        handle: handleContinue
      }}
    />
  )
}

const CaptureFrontCardSection = withVerifyWrapper(CaptureFrontCard);

export default CaptureFrontCardSection;