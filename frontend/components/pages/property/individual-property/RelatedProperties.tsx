import { PropertyCard } from "@/components";
import { appertmentCardData } from "@/constants";

const RelatedProperties: React.FC = () => {
  return (
    <div className="mt-14 space-y-6">
      <h4 className="text-secondary font-bold text-[28px] text-center">
        Related <span className="text-primary">Properties</span>
      </h4>
      <div className="grid grid-cols-3 gap-6">
        {appertmentCardData.slice(0, 3).map((card) => (
          <PropertyCard
            item={card}
            key={card.id}
            onClick={() => {}}
            callClick={() => {}}
            emailClick={() => {}}
          />
        ))}
      </div>
    </div>
  )
}

export default RelatedProperties;