import { useState } from "react";
import { withVerifyWrapper } from "@/components/pages/verify";
import { AiFillCamera } from "react-icons/ai";

const CameraPermission = () => {

  const [showCard, setShowCard] = useState<boolean>(false);

  const handleShowCard = (): void => {
    setShowCard(!showCard);
  };

  const handleRemoveCard = (): void => {
    setShowCard(false);
  };

  return (
    <div className="space-y-14">
      <h2 className="text-4xl font-semibold text-secondary">
        Please allow webcam access
      </h2>
      <div className="flex justify-center items-center">
        <div
          className="bg-[#FAFAFA] max-w-[600px] w-full min-h-[300px] h-full flex justify-center items-center hover:bg-[#f1f0f0] cursor-pointer transition duration-300 group relative"
          onClick={handleShowCard}
        >
          <AiFillCamera
            className="text-gray-200 group-hover:text-gray-400"
            size={60}
          />
        </div>
        <div
          className={`absolute flex-col gap-1.5 bg-white shadow-lg rounded-[10px] px-6 py-4 animate-slide-up ${
            showCard ? "flex" : "hidden"
          }`}
        >
          <button className="text-medium text-secondary px-4 py-2 hover:bg-gray-100 hover:rounded-lg transition duration-300">
            Allow your device camera
          </button>
          <button
            className="text-medium text-secondary px-4 py-2 hover:bg-gray-100 hover:rounded-lg transition duration-300"
            onClick={handleRemoveCard}
          >
            Don't allow
          </button>
        </div>
      </div>
    </div>
  );
};

const CameraPermissionSection = withVerifyWrapper(CameraPermission);

export default CameraPermissionSection;
