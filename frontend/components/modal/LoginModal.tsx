import { Card, BlureEffect } from "@/components";
import { useDispatch } from "react-redux";
import { CloseButton, Input, Button } from "@/components";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { closeLogin } from "@/features/loginToggleSlice";
import { openForgetPassword } from "@/features/forgetpasswordToggleSlice";
import { openSignup } from "@/features/signupToggleSlice";
import {useForm, SubmitHandler} from "react-hook-form"
import { ILoginInputs } from "../pages/login/Form";
import { useLogin } from "@/hooks";


const LoginModal: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInputs>({
    mode: "onChange"
  })
  const loginUser = useLogin()
  const handleLogin: SubmitHandler<ILoginInputs> = async(data) => {
    await loginUser(data)
    closeLoginToggle()
  }
  // State to store form data
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
    rememberMe: false,
  });

  // Function to handle form submission
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   // Here, you can process the form data as per your requirements.
  //   console.log(formData);
  //   dispatch(closeLogin());
  // };

  // Function to handle form field changes
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value, type, checked } = event.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: type === "checkbox" ? checked : value,
  //   }));
  // };

  const dispatch = useDispatch();

  const closeLoginToggle = (): void => {
    dispatch(closeLogin());
  };

  return (
    <BlureEffect
    // onClick={closeLoginToggle}
    >
      <Card>
        <CloseButton onClick={closeLoginToggle} />
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
            {/* <Input
              type="text"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleChange}
              placeholder="Email Or Phone Number"
            /> */}
              <input
              className="flex w-full border border-gray-300 rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary"
                type="password"
                {...register("password", { required: true })}
                placeholder="Password"
              />
              {errors.password && <span className="text-red-500">Password is required</span>}
            {/* <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            /> */}
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
              <span
                className="text-sm text-primary cursor-pointer hover:underline"
                onClick={() => {
                  dispatch(closeLogin());
                  dispatch(openForgetPassword());
                }}
              >
                Forget Password
              </span>
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
              <p className="text-center text-secondary">Are You New to here?</p>
            </div>
            <div className="flex items-center justify-center mt-2">
              <button
                className="bg-primary text-white font-medium text-lg px-4 py-2.5 rounded w-full hover:bg-primaryHov transition duration-300 flex items-center justify-center"
                onClick={() => {
                  dispatch(closeLogin());
                  dispatch(openSignup());
                }}
              >
                SignUp
              </button>
            </div>
          </form>
        </div>
      </Card>
    </BlureEffect>
  );
};

export default LoginModal;
