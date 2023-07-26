import Link from "next/link";

const HowToSubmit: React.FC = () => {
  return (
    <section className="max-w-[1400px] w-full mx-auto lg:px-8 md:px-6 px-4 lg:pt-14 lg:pb-20 pt-10 pb-14 space-y-4">
      <div className="max-w-[1024px] mx-auto flex flex-col gap-16">
        <h2 className="text-4xl font-semibold text-secondary">
          Choose how to submit your ID
        </h2>
        <div className="flex flex-col items-center justify-center gap-6 ">
          <Link 
            className="text-lg bg-primary text-white py-3.5 px-4 rounded max-w-lg w-full hover:bg-primaryHov transition duration-300 font-medium text-center"
            href="/signup/capture-id"
          >
            Captured image with your device camera
          </Link>
          <p className="text-lg text-secondary font-medium">OR</p>
          <Link
            className="bg-[#e3e8f0] max-w-lg w-full text-lg py-3.5 px-4 rounded text-secondary font-medium hover:bg-[#d4d9e2] transition duration-300 text-center"
            href="/signup/upload-card"
          >
            Upload file from your device
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowToSubmit;
