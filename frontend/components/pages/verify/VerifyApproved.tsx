import React from "react";
import { VerifyResult } from "@/components/pages/verify";
import { withVerifyWrapper } from "@/components/pages/verify";

const VerifyApproved: React.FC = () => {

  const handleButton = (): void => {

  };

  return (
    <VerifyResult
      status="Success"
      title="ID Verified"
      subTitle="Thank you for verifying your ID."
      btn={{
        text: "Continue to Login",
        handle: handleButton
      }}
    />
  )
};

const VerifyApprovedSection = withVerifyWrapper(VerifyApproved);

export default VerifyApprovedSection;