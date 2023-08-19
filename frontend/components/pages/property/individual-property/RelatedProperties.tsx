import { PropertyCard } from "@/components";
import { Property } from "@/components/PropertyCard";
import { useGetPropertiesQuery } from "@/features/property/propertyApi";

const RelatedProperties: React.FC = () => {
  const {data, isLoading} = useGetPropertiesQuery([])
  return (
    <div className="mt-14 space-y-6">
      <h4 className="text-secondary font-bold text-[28px] text-center">
        Related <span className="text-primary">Properties</span>
      </h4>
      <div className="grid grid-cols-3 gap-6">
        {data?.data && data?.data?.slice(0, 3).map((card: Property) => (
          <PropertyCard
            item={card}
            key={card._id}
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