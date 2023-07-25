import React from "react";
import { UploadImage, ImageVerify } from "@/components/pages/uploadimage";

const UploadImageSection: React.FC = () => {
  return (
    <section className="max-w-[1400px] w-full mx-auto lg:px-8 md:px-6 px-4 lg:pt-14 lg:pb-20 pt-10 pb-14 space-y-4">
      <div className="max-w-[840px] mx-auto space-y-12">
        {/* ==== Upload Image ==== */}
        <UploadImage />
        {/* <ImageVerify/> */}
      </div>
    </section>
  );
};

export default UploadImageSection;
