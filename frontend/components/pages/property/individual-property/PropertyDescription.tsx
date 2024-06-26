import React, { useState, useEffect } from "react";
import { BiStar } from "react-icons/bi";
import { MdOutlineVerified } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { RxShare2 } from "react-icons/rx";
import { BsSave } from "react-icons/bs";
import { Gallery, Description, Map, RelatedProperties, ReviewCard, ShareCard, SaveCard } from "@/components/pages/property/individual-property";

const PropertyDescription: React.FC = () => {

  // ==== review toggle ====
  const [reviewToggle, setReviewToggle] = useState<boolean>(false);

  // ==== share toggle ====
  const [shareToggle, setShareToggle] = useState<boolean>(false);

  // ==== save toggle ====
  const [saveToggle, setSaveToggle] = useState<boolean>(false);

  // ==== useEffect ====
  useEffect(() => {
    if (reviewToggle || shareToggle || saveToggle) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [reviewToggle, shareToggle, saveToggle]);

  return (
    <section className="max-w-[1400px] w-full mx-auto lg:px-8 md:px-6 px-4 lg:py-10 py-8">
      <div className="space-y-5">
        <h2 className="font-semibold text-4xl text-secondary">
          <span className="text-primary">Property</span> Description
        </h2>
        <div className="flex justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5">
              <BiStar className="text-primary" size={22}/>
              <button 
                className="text-[#7D7D7D] hover:text-secondary underline transition duration-300"
                onClick={() => setReviewToggle(true)}
              >
                5 reviews.
              </button>
            </div>
            <div className="flex items-center gap-2.5">
              <MdOutlineVerified className="text-primary" size={22}/>
              <span className="text-secondary">Verified</span>
            </div>
            <div className="flex items-center gap-2.5">
              <SlLocationPin className="text-primary" size={22}/>
              <span className="text-secondary">Dhaka, Bangladesh</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <RxShare2 className="text-primary" size={22}/>
              <button 
                className="text-[#7D7D7D] hover:text-secondary underline transition duration-300"
                onClick={() => setShareToggle(true)}
              >
                Share
              </button>
            </div>
            <div className="flex items-center gap-2">
              <BsSave className="text-primary" size={18}/>
              <button 
                className="text-[#7D7D7D] hover:text-secondary underline transition duration-300"
                onClick={() => setSaveToggle(true)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ==== Gallery ==== */}
      <Gallery/>
      {/* ==== Description ==== */}
      <Description/>
      {/* ==== Map ===== */}
      <Map/>
      {/* ==== Related Properties ==== */}
      <RelatedProperties/>

      {reviewToggle && (
        <ReviewCard
          setReviewToggle={setReviewToggle}
        />
      )}

      {shareToggle && (
        <ShareCard setShareToggle={setShareToggle}/>
      )}

      {saveToggle && (
        <SaveCard setSaveToggle={setSaveToggle}/>
      )}
    </section>
  )
}

export default PropertyDescription;