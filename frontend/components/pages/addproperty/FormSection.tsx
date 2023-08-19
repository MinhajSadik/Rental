/* eslint-disable @next/next/no-img-element */
import { useAddPropertyMutation, useUploadImagesMutation, useUploadVideoMutation } from "@/features/property/propertyApi";
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form";
import { CgImage } from "react-icons/cg";
import { TbVideo } from "react-icons/tb";
import Swal from "sweetalert2";
import { useRouter } from "next/router"

export type IProperty = {
  title: string;
  price: string;
  description: string;
  location: string;
  bedrooms: string;
  bathrooms: string;
  roomSize: string;
  additionals: {
    propertySize: string;
    attachedBath: string;
    balconies: string;
    generator: string;
    carParking: string;
    floorNo: string;
    floorType: string;
    wifiFacility: string;
    liftFacility: string;
    securityGuard: string;
    gasFacility: string;
    CCTVFacility: string;
  };
  images: string[];
  video: string;
  owner: string
};

const FormSection: React.FC = () => {
  const { register, handleSubmit, formState: { errors }} = useForm<IProperty>({mode: "onChange"});
  const [images, setImages] = useState([])
  const [video, setVideo] = useState("")
  const router = useRouter()

  const [addProperty] = useAddPropertyMutation()
  const handleAddProperty: SubmitHandler<IProperty> = async(data) => {
    data.images = images
    data.video = video
    data.owner = "64db372c411d328adec6f1e7"
    const result: any = await addProperty(data)
    if(result?.data?.success){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: result?.data?.message,
        showConfirmButton: false,
        timer: 1500
      })
      router.push("/property");
    }else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: result?.error?.data?.message,
        showConfirmButton: false,
        timer: 1500
      })
    }
  };

  // uploading property images
  const [uploadImage] = useUploadImagesMutation()
  const handleUploadImages = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = event.target.files;
    if (files === null || files.length === 0) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Please select one or more files to upload.',
        showConfirmButton: false,
        timer: 1500
      })
      return;
    }
    if(files.length > 4){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'You cannot select more than 4 images',
        showConfirmButton: true,
      })
      return
    }
    const formData = new FormData();
    Array.from(files).forEach((file: File) => {
      formData.append(`images`, file);
    });
    const result: any = await uploadImage(formData);
    setImages(result?.data?.data);
  };

  const [uploadVideo] = useUploadVideoMutation()
  const handleUploadVideo = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: FileList | null = event.target.files
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }
    const formData = new FormData();
    formData.append('video', file[0]);
    const result: any = await uploadVideo(formData)
    setVideo(result?.data?.data)
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
                    placeholder="Property Title"
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
                    placeholder="Property Price"
                    {...register("price", { required: true })}
                    className={`border rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 ${
                      errors.price ? "border-red-500" : "border-gray-400"
                    }`}
                  />
                  {errors.price && (
                    <span className="text-red-500">Price is required</span>
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
                    rows={9}
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
              {
                images?.length === 0 ?  <div className="space-y-6">
                    <h4 className="text-secondary text-3xl">Upload Photo</h4>
                    <label className="flex flex-col items-center justify-center w-full h-[164px] border-2 border-gray-300 border-dashed rounded-[10px] gap-2 cursor-pointer">
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleUploadImages}
                        className="hidden w-full"
                        // {...register("images")}
                      />
                      <CgImage size={40} className="text-gray-500" />
                      <p className="text-sm text-gray-500">
                        Drop files here to upload
                      </p>
                    </label>
                  </div> : <div className="space-y-6 grid border-2 border-gray-300 border-dashed rounded-[10px] p-5 grid-cols-3 items-center gap-4">
                    {
                      images?.map((img) => <img key={Math.random()} className="h-20" src={img} alt="property" />)
                    }
                  </div>
              }
              {
                !video ? <div className="space-y-6">
                  <h4 className="text-secondary text-3xl">Upload Video</h4>
                  <label className="flex flex-col items-center justify-center w-full h-[164px] border-2 border-gray-300 border-dashed rounded-[10px] gap-2 cursor-pointer">
                    <input
                      type="file"
                      accept="video/*"
                      className="hidden w-full"
                      onChange={handleUploadVideo}
                      // {...register("video")}
                    />
                    <TbVideo size={45} className="text-gray-500" />
                    <p className="text-sm text-gray-500">
                      Drop files here to upload
                    </p>
                  </label>
                </div> :
                 <div className="space-y-6">
                    <video className="border-2 border-gray-300 border-dashed rounded-[10px] p-4 outline-none" src={video} controls>
                  </video>
                </div>
            }
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
