import { useForm, SubmitHandler } from "react-hook-form";
import { CgImage } from "react-icons/cg";
import { TbVideo } from "react-icons/tb";

export type IProperty = {
  title: string;
  description: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  roomSize: number;
  additionals: {
    propertySize: number;
    attachedBath: boolean;
    balconies: number;
    generator: boolean;
    carParking: number;
    floorNo: string;
    floorType: string;
    wifiFacility: boolean;
    liftFacility: boolean;
    securityGuard: boolean;
    gasFacility: boolean;
    CCTVFacility: boolean;
  };
  images: string[];
  video: string;
};

const FormSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProperty>({
    mode: "onChange",
  });

  const handleAddProperty: SubmitHandler<IProperty> = (data) => {
    console.log(data);
  };

  return (
    <section className="bg-transparent">
      <div className="max-w-[1024px] mx-auto lg:px-8 md:px-6 px-4 py-14">
        <form
          className="flex flex-col gap-10"
          onSubmit={handleSubmit(handleAddProperty)}
        >
          <div className="space-y-8">
            <h2 className="text-primary font-semibold text-4xl">
              Property Details
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    placeholder="property-title"
                    {...register("title", { required: true })}
                    className={`border rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 ${
                      errors.title ? "border-red-500" : "border-gray-400"
                    }`}
                  />
                  {errors.title && (
                    <span className="text-red-500">Title is required</span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    placeholder="Location"
                    {...register("location", { required: true })}
                    className="border border-gray-400 rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary"
                  />
                  {errors.location && (
                    <span className="text-red-500">Location is required</span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    type="number"
                    placeholder="Bedrooms"
                    {...register("bedrooms", { required: true })}
                    className="border border-gray-400 rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary"
                  />
                  {errors.bedrooms && (
                    <span className="text-red-500">Bedrooms is required</span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    type="number"
                    placeholder="Room Size"
                    {...register("roomSize", { required: true })}
                    className="border border-gray-400 rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary"
                  />
                  {errors.roomSize && (
                    <span className="text-red-500">Room Size is required</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <textarea
                    placeholder="description"
                    {...register("description", { required: true })}
                    className="border border-gray-400 rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary"
                    rows={6}
                  ></textarea>
                  {errors.description && (
                    <span className="text-red-500">
                      Description is required
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    placeholder="Bathrooms"
                    {...register("bathrooms", { required: true })}
                    className="border border-gray-400 rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary"
                  />
                  {errors.bathrooms && (
                    <span className="text-red-500">Bathrooms is required</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-secondary font-medium text-3xl">
              Additional Details
            </h4>
            <div className="grid grid-cols-2 gap-6 max-w-[760px]">
              <div className="flex flex-col gap-4">
                <label htmlFor="property" className="flex flex-col gap-2">
                  Property Size
                  <input
                    type="number"
                    placeholder="0"
                    {...register("additionals.propertySize")}
                    className="border border-gray-400 rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary"
                  />
                </label>
                <label htmlFor="balconies" className="flex flex-col gap-2">
                  Balconies
                  <input
                    type="number"
                    placeholder="0"
                    {...register("additionals.balconies")}
                    className="border border-gray-400 rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary"
                  />
                </label>
                <label htmlFor="car-parking" className="flex flex-col gap-2">
                  Car Parking
                  <input
                    type="number"
                    placeholder="0"
                    {...register("additionals.carParking")}
                    className="border border-gray-400 rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary"
                  />
                </label>
                <label htmlFor="floor-type" className="flex flex-col gap-2">
                  Floor Type
                  <select
                    {...register("additionals.floorType")}
                    defaultValue="tiles"
                    className="border border-gray-400 rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary bg-white"
                  >
                    <option value="tiles">Tiles</option>
                    <option value="marble">Marble</option>
                    <option value="wooden">Wooden</option>
                  </select>
                </label>
                <label
                  htmlFor="lift-facilities"
                  className="flex flex-col gap-2"
                >
                  Lift facilities
                  <select
                    {...register("additionals.liftFacility")}
                    className="border border-gray-400 rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary bg-white"
                  >
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                  </select>
                </label>
                <label
                  htmlFor="lift-facilities"
                  className="flex flex-col gap-2"
                >
                  Gas facility
                  <select
                    {...register("additionals.gasFacility")}
                    className="border border-gray-400 rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary bg-white"
                  >
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                  </select>
                </label>
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="flex flex-col gap-2">
                  Attached Bath
                  <select
                    {...register("additionals.attachedBath")}
                    className="border border-gray-400 rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary bg-white"
                  >
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                  </select>
                </label>
                <label htmlFor="generator" className="flex flex-col gap-2">
                  Generator
                  <select
                    {...register("additionals.generator")}
                    className="border border-gray-400 rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary bg-white"
                  >
                    <option value="true">No</option>
                    <option value="false">Yes</option>
                  </select>
                </label>
                <label htmlFor="floor-no" className="flex flex-col gap-2">
                  Floor No
                  <select
                    {...register("additionals.floorNo")}
                    className="border border-gray-400 rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary bg-white"
                  >
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                    <option value="3rd">3rd</option>
                  </select>
                </label>
                <label
                  htmlFor="wifi-facilities"
                  className="flex flex-col gap-2"
                >
                  Wifi Facilities
                  <select
                    {...register("additionals.wifiFacility")}
                    className="border border-gray-400 rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary bg-white"
                  >
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                  </select>
                </label>
                <label htmlFor="security-gurd" className="flex flex-col gap-2">
                  Security guard
                  <select
                    {...register("additionals.securityGuard")}
                    className="border border-gray-400 rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary bg-white"
                  >
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                  </select>
                </label>
                <label htmlFor="cctv-facility" className="flex flex-col gap-2">
                  CCTV Facility
                  <select
                    {...register("additionals.CCTVFacility")}
                    className="border border-gray-400 rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary bg-white"
                  >
                    <option value="true">No</option>
                    <option value="false">Yes</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <h4 className="text-secondary text-3xl">Upload Photo</h4>
              <label className="flex flex-col items-center justify-center w-full h-[164px] border-2 border-gray-300 border-dashed rounded-[10px] gap-2 cursor-pointer">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden w-full"
                  {...register("images")}
                />
                <CgImage size={40} className="text-gray-500" />
                <p className="text-sm text-gray-500">
                  Drop files here to upload
                </p>
              </label>
            </div>
            <div className="space-y-6">
              <h4 className="text-secondary text-3xl">Upload Video</h4>
              <label className="flex flex-col items-center justify-center w-full h-[164px] border-2 border-gray-300 border-dashed rounded-[10px] gap-2 cursor-pointer">
                <input
                  type="file"
                  accept="video/*"
                  className="hidden w-full"
                  {...register("video")}
                />
                <TbVideo size={45} className="text-gray-500" />
                <p className="text-sm text-gray-500">
                  Drop files here to upload
                </p>
              </label>
            </div>
          </div>
          <div className="flex justify-start">
            <button
              type="submit"
              className="bg-primary text-white max-w-[200px] w-full px-4 py-3 rounded-lg text-lg font-semibold hover:bg-primaryHov transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
