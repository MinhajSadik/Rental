import { BlureEffect } from "@/components";
import Image from "next/image";

interface ApartmentImageProps {
  img: string;
  aprtmentImageToggle: boolean;
  setApartmentImageToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const ApartmentImage: React.FC<ApartmentImageProps> = ({img, aprtmentImageToggle, setApartmentImageToggle}) => {

  const closeApartmentImage = (): void => {
    setApartmentImageToggle(false);
  }

  return (
    <BlureEffect
      onClick={closeApartmentImage}
    >
      <Image
        src={img}
        alt="property image"
        width={600}
        height={600}
      />
    </BlureEffect>
  )
}

export default ApartmentImage;