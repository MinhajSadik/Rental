import React, {useContext, useState} from "react"
import { withVerifyWrapper } from "@/components/pages/verify";
import { AppContext } from "@/context/ApplicationContext";
import Image from "next/image";
import { Oval } from "react-loader-spinner";
import { useUploadImage } from "@/hooks";

const UploadImage: React.FC = () => {
  const { setActiveComponent } = useContext(AppContext)
  const [loading, setLoading] = useState(false)
  const [uploadedImage, setUploadedImage] = useState("")
  const uploadImage = useUploadImage()


  const handleChooseFile = async(event: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true)
    const files = event.target.files;
  if (files && files.length > 0) {
    const data: string = await uploadImage("image", files[0], 'http://localhost:5000/api/v1/user/uploadId');
    if (data) {
      setUploadedImage(data);
      setLoading(false);
    }
  }
  };

  const handleContinue = () => {
    const rawData = localStorage.getItem("signupData");
    if (rawData !== null) {
      const parsedData = JSON.parse(rawData);
      localStorage.setItem("signupData", JSON.stringify({...parsedData, profile: uploadedImage}))
    setActiveComponent(7)
    }
  };


  return (
    <div className="space-y-16">
    <h2 className="text-4xl font-semibold text-secondary">Upload Image of your face</h2>
    <div className="grid grid-cols-2 items-center gap-14">
      <div className="bg-[#FAFAFA] min-h-[400px] p-14 rounded flex justify-center items-center">
        {
          loading && <Oval
          height={80}
          width={80}
          color="#94a3b8"
          secondaryColor="#cbd5e1"
          ariaLabel="three-dots-loading"
          visible={true}
        />
        }

        {
          !loading && <Image
          src={uploadedImage || "/images/placeholder_image.svg" }
          alt="placeholder_id_card"
          width={300}
          height={230}
        />
        }
        
      </div>
      <div className="flex flex-col items-center gap-8">
        <label className="bg-primary text-white max-w-[280px] w-full py-3 px-4 rounded font-medium hover:bg-primaryHov transition duration-300 text-lg text-center cursor-pointer">
        Choose File
          <input
            onChange={handleChooseFile}
            type="file"
            style={{ display: "none" }}
          />
        </label>
        <button
        onClick={handleContinue}
        disabled={!uploadedImage}
          className={`${!uploadedImage && "cursor-not-allowed"} bg-[#e3e8f0] max-w-[280px] w-full py-3 px-4 rounded font-medium text-secondary hover:bg-[#d4d9e2] transition duration-300 text-lg`}
        >
          continue
        </button>
      </div>
    </div>
  </div>
    // <Upload
    //   title="Upload Image of your face"
    //   icon="/images/placeholder_image.svg"
    //   input={{
    //     text: "Choose File",
    //     handle: handleChooseFile,
    //   }}
    //   btn={{ 
    //     text: "Continue", 
    //     handle: handleContinue 
    //   }}
    // />
  );
};

const UploadImageSection = withVerifyWrapper(UploadImage);

export default UploadImageSection;