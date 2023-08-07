import { BlureEffect } from "@/components";
import { closeApartmentVideo } from "@/features/apartmentVideoToggleSlice";
import { useDispatch } from "react-redux";

const Video: React.FC = () => {

  const dispatch = useDispatch();

  return (
    <BlureEffect
      onClick={() => dispatch(closeApartmentVideo())}
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
