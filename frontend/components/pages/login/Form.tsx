import React, { useState } from "react";
import { Input, Button } from "@/components";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import {useForm, SubmitHandler} from "react-hook-form"
import { loginUser } from "@/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import Swal from "sweetalert2";

type Inputs = {
  emailOrPhone: string,
  password: string
}

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onChange"
  })

  const dispatch = useAppDispatch()

  const handleLogin: SubmitHandler<Inputs> = async(data) => {
    const result: any = await dispatch(loginUser(data))
    if(result.payload.data.success){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: result.payload.data.message,
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: result.payload.data.message,
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  // State to store form data
  // const [formData, setFormData] = useState({
  //   emailOrPhone: "",
  //   password: "",
  //   rememberMe: false,
  // });

  // Function to handle form submission
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   // Here, you can process the form data as per your requirements.
  //   console.log(formData);
  // };

  // Function to handle form field changes
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value, type, checked } = event.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: type === "checkbox" ? checked : value,
  //   }));
  // };

  return (
    <div className="space-y-8 mx-auto">
      <h2 className="text-secondary text-[24px] text-center font-semibold">
        Your Trusted Rental Partner
      </h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleLogin)}>
        <label htmlFor="emailOrPhone" className="text-lg text-secondary">
          Enter Your mobile Number Or Email
        </label>
        <input
        className="flex w-full border border-gray-300 rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary"
        {...register("emailOrPhone", { required: true })}
          type="text"
          placeholder="Email Or Phone Number"
        />
        {errors.emailOrPhone && <span className="text-red-500">Email or Phone is required</span>}
        <input
        className="flex w-full border border-gray-300 rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary"
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
        />
        {errors.password && <span className="text-red-500">Password is required</span>}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="rememberMe"
              // checked={formData.rememberMe}
              // onChange={handleChange}
              className="form-checkbox h-5 w-5 border text-primary"
            />
            <span className="text-sm text-gray-400">Remember Me</span>
          </div>
          <Link className="text-sm text-primary cursor-pointer hover:underline" href="/forget-password">
            Forget Password
          </Link>
        </div>
        <div className="flex justify-center items-center mt-2">
          <button className="bg-primary text-white font-medium text-lg px-4 py-2.5 rounded w-full hover:bg-primaryHov transition duration-300" type="submit">
            Log In
          </button>
        </div>
        <div className="flex items-center gap-4 justify-between mt-2">
          <div className="max-w-[140px] w-full border-b border-gray-200"></div>
          <p className="text-gray-500">or connected With</p>
          <div className="max-w-[140px] w-full border-b border-gray-200"></div>
        </div>
        <div className="flex justify-center items-center mt-2">
          <button className="px-6 py-2.5 w-full border border-gray-400 flex items-center justify-center gap-2 rounded hover:border-primary transition duration-300 font-semibold text-secondary hover:bg-gray-50">
            <FcGoogle size={28} />
            Continue with Google
          </button>
        </div>
        <div className="flex items-center justify-center mt-2">
          <p className="text-center text-secondary">
            Are You New to here?
          </p>
        </div>
        <div className="flex items-center justify-center mt-2">
          <Link className="bg-primary text-white font-medium text-lg px-4 py-2.5 rounded w-full hover:bg-primaryHov transition duration-300 flex items-center justify-center" href="/signup">
            SignUp
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
