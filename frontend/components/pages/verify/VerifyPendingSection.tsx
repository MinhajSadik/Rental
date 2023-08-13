import React from "react";
import { VerifyResult } from "@/components/pages/verify";
import { withVerifyWrapper } from "@/components/pages/verify";

const VerifyPending: React.FC = () => {

  const handleButton = (): void => {
    
  };

  return (
    <VerifyResult
      status={{
        text: "Pending",
        color: "text-red-500"
      }}
      title="Checking Your ID Verification"
      subTitle="Thank you for submit your ID and image. We will notify you within 12 hours by mail or
      phone number"
      btn={{
        text: "Continue to Login",
        handle: handleButton
      }}
    />
  )
};

const VerifyFailedSection = withVerifyWrapper(VerifyPending);

export default VerifyFailedSection;