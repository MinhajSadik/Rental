import Link from "next/link";
import Image from "next/image";
import { selectIdTypesData } from "@/constants";
import { withVerifyWrapper } from "@/components/pages/verify";

const IDTypeSelector: React.FC = () => {
  return (
    <div className="space-y-14">
      <h2 className="text-4xl font-semibold text-secondary">Select Id Type</h2>
      <div className="flex gap-6">
        {selectIdTypesData.map((item, i) => (
          <div
            className="max-w-[424px] w-full max-h-[440px] min-h-full bg-white shadow rounded-[10px] flex flex-col justify-between items-center"
            key={i}
          >
            <div />
            <Image
              src={item.img}
              alt="Card"
              width={334}
              height={200}
              className="w-auto p-6"
            />
            <Link
              className="bg-primary w-full text-white text-lg font-medium py-2.5 px-4 rounded-b-lg hover:bg-primaryHov transition duration-300 text-center"
              href={item.path}
            >
              {item.button}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const IDTypeSelectorSection = withVerifyWrapper(IDTypeSelector);

export default IDTypeSelectorSection;