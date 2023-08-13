import { useEffect, useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import {
  ApartmentImage,
  Video,
} from "@/components/pages/property/individual-property";

const Gallery: React.FC = () => {
  // ==== Apartment Image ====
  const [image, setImage] = useState<string>("");
  const [apartmentImageToggle, setApartmentImageToggle] =
    useState<boolean>(false);

  const handleApartmentImageToggle = (img: string, toggle: boolean) => {
    setImage(img);
    setApartmentImageToggle(toggle);
  };

  // ==== Apartment Video ====
  const [apartmentVideoToggle, setApartmentVideoToggle] =
    useState<boolean>(false);

  const handleApartmentVideoToggle = (toggle: boolean) => {
    setApartmentVideoToggle(toggle);
  };

  // ==== useEffect ====
  useEffect(() => {
    if (apartmentImageToggle || apartmentVideoToggle) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [apartmentImageToggle, apartmentImageToggle]);

  return (
    <div className="grid grid-cols-2 gap-6 mt-8">
      <div
        className="relative cursor-pointer group"
        onClick={() => handleApartmentVideoToggle(true)}
      >
        <Image
          src="/images/property-thumbnail.png"
          alt="property thumbnail"
          width={650}
          height={412}
          className="rounded-[5px] w-full h-full"
        />
        <FaPlay
          className="absolute left-0 right-0 top-0 bottom-0 m-auto text-white/70 group-hover:text-white/80 transition duration-300"
          size={50}
        />
      </div>
      <div className="grid grid-cols-2 gap-6 items-center">
        <Image
          src="/images/property-picture1.png"
          alt="property thumbnail"
          width={650}
          height={412}
          className="rounded-[5px] w-full h-full cursor-pointer"
          onClick={() =>
            handleApartmentImageToggle("/images/property-picture1.png", true)
          }
        />
        <Image
          src="/images/property-picture2.png"
          alt="property thumbnail"
          width={650}
          height={412}
          className="rounded-[5px] w-full h-full cursor-pointer"
          onClick={() =>
            handleApartmentImageToggle("/images/property-picture2.png", true)
          }
        />
        <Image
          src="/images/property-picture3.png"
          alt="property thumbnail"
          width={650}
          height={412}
          className="rounded-[5px] w-full h-full cursor-pointer"
          onClick={() =>
            handleApartmentImageToggle("/images/property-picture3.png", true)
          }
        />
        <Image
          src="/images/property-picture4.png"
          alt="property thumbnail"
          width={650}
          height={412}
          className="rounded-[5px] w-full h-full cursor-pointer"
          onClick={() =>
            handleApartmentImageToggle("/images/property-picture4.png", true)
          }
        />
      </div>
      {apartmentImageToggle && (
        <ApartmentImage
          img={image}
          setApartmentImageToggle={setApartmentImageToggle}
        />
      )}

      {apartmentVideoToggle && (
        <Video setApartmentVideoToggle={setApartmentVideoToggle} />
      )}
    </div>
  );
};

export default Gallery;
