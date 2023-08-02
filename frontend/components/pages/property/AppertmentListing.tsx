import React from "react";

const AppertmentTenants: Array<string> = [
  "All",
  "Family",
  "Bachelor",
  "Females",
  "Shared",
  "Student"  
];

const AppertmentListing: React.FC = () => {

  const [activeAppertmentTenants, setActiveAppertmentTenants] = React.useState<string>("All");
  return (
    <section className="max-w-[1400px] w-full mx-auto lg:px-8 md:px-6 px-4 lg:pt-6 lg:pb-8 pt-4 pb-6">
      <div className="space-y-6">
        <h2 className="text-[24px] font-bold text-secondary">
          Apartments Available in <span className="text-primary">Dhaka</span>
        </h2>
        <div className="">
          <ul className="flex items-center gap-4">
            {AppertmentTenants.map((teant, i) => (
              <li 
                className={`cursor-pointer text-secondary px-2 pb-2 ${activeAppertmentTenants === teant ? "border-b-2 border-primary" : "border-none"}`} 
                key={i}
                onClick={() => setActiveAppertmentTenants(teant)}
              >
                {teant}
              </li>
            ))}
          </ul>
          <div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppertmentListing;