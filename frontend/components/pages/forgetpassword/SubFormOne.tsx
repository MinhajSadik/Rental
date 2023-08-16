import React, { useContext } from "react";
// import { Input } from "@/components";
import { useForm, SubmitHandler } from "react-hook-form"
import { AppContext } from "@/context/ApplicationContext";
import { useGenerateOTPMutation } from "@/features/user/userApi";
import Swal from "sweetalert2";

type Input = {
  email:string
}

const SubFormOne: React.FC = () => {
  const { setActiveComponent} = useContext(AppContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    mode: "onChange"
  })

  const [generateOTP] = useGenerateOTPMutation()

  const handleSendCode: SubmitHandler<Input> = async(data) => {
    const result: any = await generateOTP(data)
    if(result?.data){
      setActiveComponent(2)
      localStorage.setItem("userEmail", JSON.stringify(data.email))
    }else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: result.error.data.message,
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
  // State to store form data
  // const [formData, setFormData] = useState({
  //   emailOrPhone: "",
  // });

  // Function to handle form submission
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   // Here, you can process the form data as per your requirements.
  //   console.log(event?.target?.emailOrPhone?.value);
  // };

  // Function to handle form field changes
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(handleSendCode)}>
      <h2 className="text-secondary text-[24px] text-center font-semibold mb-8">
        Forget Password
      </h2>
      <label htmlFor="emailOrPhone" className="text-lg text-secondary">
        Enter Your Mobile Number Or Email
      </label>
      <input
      className="flex w-full border border-gray-300 rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary"
        type="email"
        {...register("email", {required: true})}
        placeholder="Email Or Phone Number"
      />
      {errors.email && <span className="text-red-500">Email is required</span>}
      {/* <Input
        type="text"
        name="emailOrPhone"
        value={formData.emailOrPhone}
        onChange={handleChange}
        placeholder="Email Or Phone Number"
      /> */}
      <div className="flex justify-center items-center mt-1.5">
        <button
          className="bg-primary text-white font-medium text-lg px-4 py-2.5 rounded w-full hover:bg-primaryHov transition duration-300"
          type="submit"
        >
          Send Code
        </button>
      </div>
    </form>
  );
};

export default SubFormOne;
