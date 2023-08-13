import { appertmentCardData } from "@/constants";
import { PropertyCard } from "@/components";

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
          {appertmentCardData.slice(0, 3).map((item) => (
            <PropertyCard 
              item={item} 
              key={item.id}
              onClick={() => {}}
              callClick={() => {}}
              emailClick={() => {}} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureAds;