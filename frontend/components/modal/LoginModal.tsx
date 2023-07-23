import { Card, BlureEffect } from "@/components";
import { useDispatch } from "react-redux";
import { CloseButton, Input, Button } from "@/components";
import { useState } from "react";
import { openSignup } from "@/features/signupToggleSlice";
import { closeLogin } from "@/features/loginToggleSlice";
import { openForgetPassword } from "@/features/forgetpasswordToggleSlice";
import { FcGoogle } from "react-icons/fc";

const LoginModal: React.FC = () => {

  // ==== Redux State Managment ====
  const dispatch = useDispatch();

  // State to store form data
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
    rememberMe: false,
  });

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here, you can process the form data as per your requirements.
    console.log(formData);
  };

  // Function to handle form field changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ==== Handle Signup Modal ====
  const handleOpenSignup = (): void => {
    dispatch(openSignup());
    dispatch(closeLogin());
  };

  const handleOpenForgetPassword = (): void => {
    dispatch(openForgetPassword());
    dispatch(closeLogin());
  };

  const handleCloseLogin = (): void => {
    dispatch(closeLogin());
  };

  return (
    <BlureEffect>
      <Card>
        <CloseButton onClick={handleCloseLogin} />
        <div className="space-y-8 mx-auto">
          <h2 className="text-secondary text-[24px] text-center font-semibold">
            Your Trusted Rental Partner
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label
              htmlFor="emailOrPhone"
              className="text-[20px] text-secondary"
            >
              Enter Your mobile Number Or Email
            </label>
            <Input
              type="text"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleChange}
              placeholder="Email Or Phone Number"
            />
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 border text-primary"
                />
                <span className="text-sm text-gray-400">Remember Me</span>
              </div>
              <span
                className="text-sm text-primary cursor-pointer hover:underline"
                onClick={handleOpenForgetPassword}
              >
                Forget Password
              </span>
            </div>
            <div className="flex justify-center items-center mt-2">
              <Button>Log In</Button>
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
                className="bg-primary text-white font-medium text-[20px] px-4 py-2.5 rounded w-full hover:bg-primaryHov transition duration-300 flex items-center justify-center"
                onClick={handleOpenSignup}
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