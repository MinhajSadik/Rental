/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Form } from "@/components/pages/property/individual-property";
import { useRouter } from "next/router";
import { useGetPropertyQuery } from "@/features/property/propertyApi";

const Description: React.FC = () => {
  const router = useRouter();
  const {data} = useGetPropertyQuery(router.query.property);
  const property = data?.data
  const additionals = property?.additionals

  return (
    <div className="flex items-start xl:gap-10 gap-8 mt-8">
      {/* ==== Left ==== */}
      <div className="space-y-12">
        <div className="space-y-4 xl:mr-4">
          <div className="space-y-2">
            <h4 className="text-3xl text-secondary font-bold">
              <span className="text-2xl text-[#4D4D4D] font-normal">BDT-</span>
              {property?.price}/-
            </h4>
            <div className="flex items-center gap-4 mt-1 text-[#575959]">
              <div className="flex items-center gap-2">
                <i>
                  <img
                    src="/images/icon/size.svg"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                </i>
                <span className="text-lg">{property?.roomSize} Sq Ft</span>
              </div>
              <div className="flex items-center gap-2">
                <i>
                  <img
                    src="/images/icon/bath.svg"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                </i>
                <span className="text-lg">{property?.bathrooms}</span>
              </div>
              <div className="flex items-center gap-2">
                <i>
                  <img
                    src="/images/icon/beth.svg"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                </i>
                <span className="text-lg">{property?.bedrooms}</span>
              </div>
            </div>
          </div>
          <p className="text-secondary">
            Home which will make your everyday life relaxed? See this lovely
            apartment located in Mirpur, as the location ensures your daily
            necessity right within your reach Are you concerned about finding a
            Are you concerned about finding a home which will make your everyday
            life relaxed? See this lovely apartment located in Mirpur.
          </p>
        </div>
        <div className="space-y-6 xl:mr-4">
          <h4 className="font-bold text-2xl text-secondary">
            What this place{" "}
            <span className="text-primary font-semibold">offers</span>?
          </h4>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {
              additionals?.wifiFacility === "true" && <div className="flex items-start gap-2">
              <img src="/images/icon/wifi.svg" alt="wifi" />
              <span className="text-xl text-secondary font-medium">Wifi</span>
            </div> 
            }
            {
              additionals?.kitchen === "true" &&  <div className="flex items-center gap-2">
              <img src="/images/icon/kitchen.svg" alt="kitchen" />
              <span className="text-xl text-secondary font-medium">
                Kitchen
              </span>
            </div>
            }
            
            {
              additionals?.securityGuard === "true" && <div className="flex items-start gap-2">
              <img src="/images/icon/watchman.svg" alt="watchman" />
              <span className="text-xl text-secondary font-medium">
                Watchman service
              </span>
            </div>
            }
            
            {
              additionals?.carParking > 0 && <div className="flex items-start gap-2">
              <img src="/images/icon/parking.svg" alt="parking" />
              <span className="text-xl text-secondary font-medium">
                Free street parking
              </span>
            </div>
            }
            
            {
              additionals?.CCTVFacility === "true" && <div className="flex items-start gap-2">
              <img src="/images/icon/cctv.svg" alt="cctv" />
              <span className="text-xl text-secondary font-medium">
                24/7 CCTV Survailance
              </span>
            </div> 
            }
            {
              additionals?.washer === "true" &&  <div className="flex items-start gap-2">
              <img src="/images/icon/washer.svg" alt="washer" />
              <span className="text-xl text-secondary font-medium">Washer</span>
            </div>
            }
           {
            additionals?.garbage === "true" && <div className="flex items-start gap-2">
            <img src="/images/icon/garbage.svg" alt="garbage" />
            <span className="text-xl text-secondary font-medium">
              Garbage Disposal
            </span>
          </div>
           }
            {
              additionals?.balconies > 0 && <div className="flex items-start gap-2">
              <img src="/images/icon/private.svg" alt="private" />
              <span className="text-xl text-secondary font-medium">
                Private patio or balcony
              </span>
            </div>
            }
            {
              additionals?.outdoorSpace === "true" && <div className="flex items-start gap-2">
              <img src="/images/icon/outdore.svg" alt="outdore" />
              <span className="text-xl text-secondary font-medium">
                Outdoor Space
              </span>
            </div>
            }
            {
              additionals?.petsAllowed === "true" && <div className="flex items-start gap-2">
              <img src="/images/icon/pets.svg" alt="private" />
              <span className="text-xl text-secondary font-medium">
                Pets allowed
              </span>
            </div>
            }
            
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="font-bold text-2xl text-secondary">
            Nearby Landmarks
          </h4>
          <div className="grid grid-cols-4 gap-6">
            <button className="bg-white w-full flex flex-col items-center justify-center p-6 shadow rounded space-y-2">
              <img src="/images/icon/hospital.svg" alt="hospital" />
              <span className="text-secondary font-semibold">Hospital</span>
            </button>
            <button className="bg-white w-full flex flex-col items-center justify-center p-6 shadow rounded space-y-2">
              <img src="/images/icon/school.svg" alt="school" />
              <span className="text-secondary font-semibold">School</span>
            </button>
            <button className="bg-white w-full flex flex-col items-center justify-center p-6 shadow rounded space-y-2">
              <img src="/images/icon/tree.svg" alt="tree" />
              <span className="text-secondary font-semibold">Parks</span>
            </button>
            <button className="bg-white w-full flex flex-col items-center justify-center p-6 shadow rounded space-y-2">
              <img src="/images/icon/resturant.svg" alt="resturant" />
              <span className="text-secondary font-semibold">Resturant</span>
            </button>
          </div>
        </div>
      </div>

      {/* ==== Right ==== */}
      <div className="xl:min-w-[560px] min-w-[460px]">
        <Form/>
      </div>
    </div>
  );
};

export default Description;
