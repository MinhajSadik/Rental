import React, {useContext} from "react";
import {
  IDVerificationSection,
  IDTypeSelectorSection,
  IDSubmissionOptionSection,
  FrontCardSection,
  BackCardSection,
  UploadImageSection,
  ImageVerifySection,
  VerifyApprovedSection,
  VerifyFailedSection,
  VerifyPendingSection,
  CameraPermissionSection,
  CaptureFrontCardSection,
  CaptureBackCardSection,
  CaptureImageSection,
} from "@/components/pages/verify";
import { AppContext } from "@/context/ApplicationContext";

const Verify: React.FC = () => {
  const { activeComponent } = useContext(AppContext)
  return (
    <>
    {
      activeComponent === 1 && <IDVerificationSection />
    }

    {
       activeComponent === 2 && <IDTypeSelectorSection/>
    }
    
    {
      activeComponent === 3 && <IDSubmissionOptionSection/>
    }
    
    {
      activeComponent === 4 && <FrontCardSection />
    }

    {
       activeComponent === 5 && <BackCardSection />
    }
    
    {
      activeComponent === 6 && <UploadImageSection/>
    }
      {/* ====== Verify two phases ==== */}
      {/* <ImageVerifySection/> */}
      {/* <VerifyApprovedSection/> */}
      {/* <VerifyFailedSection/> */}
      {/* <VerifyPendingSection/> */}

      {/* <CameraPermissionSection/> */}
      {/* <CaptureFrontCardSection/> */}
      {/* <CaptureBackCardSection/> */}
      {/* <CaptureImageSection/> */}
      {/* <ImageVerifySection/> */}
      {/* <VerifyApprovedSection/> */}
      {/* <VerifyFailedSection/> */}
      {/* <VerifyPendingSection/> */}
    </>
  );
};

export default Verify;
