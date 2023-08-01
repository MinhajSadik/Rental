import React from "react";
import { VerifyResult } from "@/components/pages/verify";
import { withVerifyWrapper } from "@/components/pages/verify";

const VerifyFailed: React.FC = () => {

  const handleButton = (): void => {
    
  };

  return (
    <VerifyResult
      status="Failed"
      title="Sorry, ID VERIFICATION FAILED"
      subTitle="Some thing wrong with your verification information.Please try again with your proper information! Or if you have any question please contact support@inquires.com"
      btn={{
        text: "Verify Again",
        handle: handleButton
      }}
    />
  )
};

const VerifyFailedSection = withVerifyWrapper(VerifyFailed);

export default VerifyFailedSection;