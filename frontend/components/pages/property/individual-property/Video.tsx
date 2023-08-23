import { BlureEffect } from "@/components";

interface VideoProps {
  setApartmentVideoToggle: React.Dispatch<React.SetStateAction<boolean>>,
  video: string
};

const Video: React.FC<VideoProps> = ({ setApartmentVideoToggle, video }) => {

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
        src={video}
        title="Embedded Video"
        allowFullScreen
      />
    </BlureEffect>
  );
};

export default Video;
