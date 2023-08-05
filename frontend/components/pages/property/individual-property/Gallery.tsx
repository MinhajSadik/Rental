import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const Gallery: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-6 mt-8">
      <div className="relative cursor-pointer">
        <Image
          src="/images/property-thumbnail.png"
          alt="property thumbnail"
          width={650}
          height={412}
          className="rounded-[5px] w-full h-full"
        />
        <FaPlay 
          className="absolute left-0 right-0 top-0 bottom-0 m-auto text-white/70" 
          size={50}
        />
      </div>
      <div className="grid grid-cols-2 gap-6 items-center">
        <Image
          src="/images/property-picture1.png"
          alt="property thumbnail"
          width={650}
          height={412}
          className="rounded-[5px] w-full h-full"
        />
        <Image
          src="/images/property-picture2.png"
          alt="property thumbnail"
          width={650}
          height={412}
          className="rounded-[5px] w-full h-full"
        />
        <Image
          src="/images/property-picture3.png"
          alt="property thumbnail"
          width={650}
          height={412}
          className="rounded-[5px] w-full h-full"
        />
        <Image
          src="/images/property-picture4.png"
          alt="property thumbnail"
          width={650}
          height={412}
          className="rounded-[5px] w-full h-full"
        />
      </div>
    </div>
  )
}

export default Gallery;