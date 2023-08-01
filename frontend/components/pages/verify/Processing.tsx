import { Oval } from "react-loader-spinner";

const Processing: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-2.5 bg-white shadow-lg max-w-[180px] w-full p-4 rounded-[10px] absolute left-[38%] z-10 top-[38%] animate-slide-up">
      <Oval
        height={35}
        width={35}
        color="#757575"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#C9C5C5"
        strokeWidth={4}
        strokeWidthSecondary={2}
      />
      <h4 className="text-secondary font-medium">
        Please Wait
      </h4>
    </div>
  );
};

export default Processing;
