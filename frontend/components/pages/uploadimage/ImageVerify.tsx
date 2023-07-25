import Image from "next/image";
import { Oval } from "react-loader-spinner";

const ImageVerify: React.FC = () => {
  return (
    <>
      <div className="space-y-4">
        <h2 className="text-4xl font-semibold text-secondary">
          Checking Image quality for{" "}
          <span className="text-primary">ID verification</span>
        </h2>
        <p className="text-[#969693]">
          Please do not close your browser -this may take a moment
        </p>
      </div>
      <div className="flex flex-col justify-center items-center min-h-[280px]">
        {/* <h4 className="text-xl text-secondary">Loading....</h4> */}
        <Oval
          height={80}
          width={80}
          color="#94a3b8"
          secondaryColor="#cbd5e1"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      </div>
    </>
  );
};

export default ImageVerify;
