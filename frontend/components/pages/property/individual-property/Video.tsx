import { BlureEffect } from "@/components";

interface VideoProps {
  setApartmentVideoToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const Video: React.FC<VideoProps> = ({ setApartmentVideoToggle }) => {

  const closeApartmentVideo = (): void => {
    setApartmentVideoToggle(false);    
  };

  return (
    <BlureEffect
      onClick={closeApartmentVideo}
    >
      <iframe
        width="640"
        height="360"
        src="/videos/appertment_placeholder.mp4"
        title="Embedded Video"
        allowFullScreen
      />
    </BlureEffect>
  );
};

export default Video;
