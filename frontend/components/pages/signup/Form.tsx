import React, { useEffect, useState } from "react";
// import { Input } from "@/components";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form"

export type IRegisterInputs = {
  name: string,
  phoneNumber: string,
  email: string,
  password: string,
  confirmPassword: string,
  role: string,
  profile: string,
  IDCard: {
    front: string,
    back: string,
  },
}

const Form: React.FC = () => {
  const [isPasswordMatched, setIsPasswordMatched]  = useState(true)
  // ==== Router ====
  const router = useRouter();


  // // State to store form data
  // const [formData, setFormData] = useState({
  //   name: "",
  //   phoneNumber: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  //   userType: "user",
  //   rememberMe: false,
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterInputs>({
    mode: "onChange"
  })

  const handleRegister: SubmitHandler<IRegisterInputs> = (data) => {
    if(data.password !== data.confirmPassword){
      return setIsPasswordMatched(false)
    }else{
      setIsPasswordMatched(true)
    }
    data.IDCard= {
      front: "",
      back: "",
    }
    data.profile = ""
    // store the register info in LocalStorage
    localStorage.setItem("signupData", JSON.stringify(data))
    router.push("/signup/verify")
  }


  // Function to handle form submission
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   // Here, you can process the form data as per your requirements.
  //   console.log(formData);
  //   router.push("/signup/verify");
  // };

  // // Function to handle form field changes
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  //   const { name, value, type } = event.target;
  
  //   let newValue: string | boolean;
  //   if (type === "checkbox" && event.target instanceof HTMLInputElement) {
  //     newValue = event.target.checked;
  //   } else {
  //     newValue = value;
  //   }
  
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: newValue,
  //   }));
  // };
  

  // if signup already in LocalStorage
  // retrieve the data and redirect to verify route
  useEffect(() => {
    const rawData = localStorage.getItem("signupData");
    if (rawData !== null) {
      const parsedData = JSON.parse(rawData)
      if(parsedData){
        router.push("/signup/verify");
      }
    }
  },[router])

  return (
    <div className="space-y-8 mx-auto">
      <h2 className="text-secondary text-[24px] text-center font-semibold">
        Sign Up
      </h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleRegister)}>
        <div className="space-y-2.5">
          <label htmlFor="name" className="text-lg text-secondary">
            Name*
          </label>
          <input
          className="flex w-full border border-gray-300 rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary"
          {...register("name", { required: true })}
            type="text"
            placeholder="Enter your name"
          />
          {errors.name && <span className="text-red-500">Name is required</span>}
          {/* <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          /> */}
        </div>
        <div className="space-y-2.5">
          <label htmlFor="phoneNumber" className="text-lg text-secondary">
            Phone Number*
          </label>
          <input
          className="flex w-full border border-gray-300 rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary"
          {...register("phoneNumber", { required: true })}
            type="text"
            placeholder="Enter your phone number"
          />
          {errors.phoneNumber && <span className="text-red-500">Phone number is required</span>}
          {/* <Input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your Phone number"
          /> */}
        </div>
        <div className="space-y-2.5">
          <label htmlFor="email" className="text-lg text-secondary">
            Email*
          </label>
          <input
          className="flex w-full border border-gray-300 rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary"
          type="email"
          {...register("email", { required: true })}
            placeholder="Enter your email"
          />
          {errors.email && <span className="text-red-500">Email is required</span>}
          {/* <Input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
          /> */}
        </div>
        <div className="space-y-2.5">
          <label htmlFor="password" className="text-lg text-secondary">
            Password*
          </label>
          <input
          className="flex w-full border border-gray-300 rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary"
          type="password"
          // onChange={(e) => setPasswordMatch(e.target.value)}

          {...register("password", { required: true })}
            placeholder="Enter password"
          />
          {errors.password && <span className="text-red-500">Password is required</span>}

          {/* <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          /> */}
        </div>
        <div className="space-y-2.5">
          <label htmlFor="confirmPassword" className="text-lg text-secondary">
            Confirm Password*
          </label>
          <input
          className="flex w-full border border-gray-300 rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary"
          type="password"
          {...register("confirmPassword", { required: true })}
            placeholder="Enter confirm password"
          />
          {errors.confirmPassword && <span className="text-red-500">Confirm password is required</span>}
          {
            !isPasswordMatched &&  <span className="text-red-500">Password is not matched</span>
          }
          {/* <Input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
          /> */}
        </div>
        <div className="space-y-3.5">
          <label htmlFor="role" className="text-lg text-secondary">
            Sign Up As*
          </label>
          <select
            {...register("role", { required: true })}
            // value={formData.userType}
            // onChange={handleChange}
            className="flex w-full border border-gray-300 rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary"
          >
            <option value="user">User</option>
            <option value="owner">Owner</option>
          </select>
        </div>
        <div className="flex justify-start">
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="rememberMe"
              // checked={formData.rememberMe}
              // onChange={handleChange}
              className="form-checkbox h-5 w-5 border text-primary"
            />
            <span className="text-sm text-gray-400">
              By clicking the registration button, you accept our Terms & Conditions.
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center mt-2">
          <button
            className="bg-primary text-white font-medium text-lg px-4 py-2.5 rounded w-full hover:bg-primaryHov transition duration-300 text-center"
            type="submit"
          >
            Verify Your ID
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;