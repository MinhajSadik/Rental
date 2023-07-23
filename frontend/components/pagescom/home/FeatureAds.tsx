import featuredAdsData from "@/constants/featureAdsData";
import { BiSolidPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const FeatureAds: React.FC = () => {
  return (
    <section className="bg-transparent">
      <div className="max-w-[1400px] mx-auto lg:px-8 md:px-6 px-4 lg:pt-8 lg:pb-[100px] pt-6 pb-20 space-y-8">
        <div className="space-y-4">
          <h2 className="text-[42px] font-semibold text-secondary">
            Featured <span className="text-primary">ADs</span>
          </h2>
          <p className="text-[#969693] text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt ut labore et 
          </p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 xl:gap-6 gap-4">
          {featuredAdsData.map((item, i) => (
            <div className="bg-white rounded-[10px] shadow-xl shadow-[#ABBED1]/30" key={i}>
              <img
                src={item.image}
                alt="Image"
                width={400}
                height={400}
                className="w-full rounded-t-[10px]"
              />
              <div className="p-4 flex flex-col gap-2">
                <h5 className="text-secondary">
                  {item.title}
                </h5>
                <p className="text-[#969693] text-[12px]">
                  {item.location}
                </p>
                <div className="flex items-center gap-4 mt-1 text-[#575959]">
                  <div className="flex items-center gap-2">
                    <i>
                      <img src="./images/icon/size.svg" alt="icon" />
                    </i>
                    <span className="text-[12px]">
                      {item.size}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i>
                      <img src="./images/icon/bath.svg" alt="icon" />
                    </i>
                    <span className="text-[12px]">
                      {item.bathTab}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i>
                      <img src="./images/icon/beth.svg" alt="icon" />
                    </i>
                    <span className="text-[12px]">
                      {item.beth}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <button className="flex items-center gap-1 bg-primary text-white px-4 py-1.5 rounded hover:bg-primaryHov transition duration-300 text-sm">
                    <BiSolidPhone size={20}/>
                    Call
                  </button>
                  <button className="flex items-center gap-1 bg-primary text-white px-4 py-1.5 rounded hover:bg-primaryHov transition duration-300 text-sm">
                    <MdEmail size={20}/>
                    E-Mail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureAds;