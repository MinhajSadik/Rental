import React from "react";
import { AccessCamera, Capture } from "@/components/pages/captureid";

const CaptureId: React.FC = () => {
  return (
    <section className="max-w-[1400px] w-full mx-auto lg:px-8 md:px-6 px-4 lg:pt-14 lg:pb-20 pt-10 pb-14 space-y-4">
      <div className="max-w-[840px] mx-auto space-y-12">
        {/* <AccessCamera/> */}
        <Capture/>
      </div>
    </section>
  );
};

export default CaptureId;
