import { useState } from "react";
import { Card, BlureEffect } from "@/components";
import { CloseButton, Input } from "@/components";
import { useDispatch } from "react-redux";
import { closeSignup } from "@/features/signupToggleSlice";
import { useRouter } from "next/router";

const SignupModal: React.FC = () => {

  // ==== Router ====
  const router = useRouter();

  // ==== Redux state managment ====
  const dispatch = useDispatch();

  const handleCloseSignup = (): void => {
    dispatch(closeSignup());
  };

  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "user",
    rememberMe: false,
  });

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here, you can process the form data as per your requirements.
    console.log(formData);
    router.push("/signup/verify");
  };

  // Function to handle form field changes
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target;

    let newValue: string | boolean;
    if (type === "checkbox" && event.target instanceof HTMLInputElement) {
      newValue = event.target.checked;
    } else {
      newValue = value;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  return (
    <BlureEffect>
      <Card>
        <CloseButton onClick={handleCloseSignup} />
        <div className="space-y-8 mx-auto">
          <h2 className="text-secondary text-[24px] text-center font-semibold">
            Sign Up
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="space-y-2.5">
              <label htmlFor="name" className="text-lg text-secondary">
                Name*
              </label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2.5">
              <label
                htmlFor="phoneNumber"
                className="text-lg text-secondary"
              >
                Phone Number*
              </label>
              <Input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your Phone number"
              />
            </div>
            <div className="space-y-2.5">
              <label htmlFor="email" className="text-lg text-secondary">
                Email*
              </label>
              <Input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
              />
            </div>
            <div className="space-y-2.5">
              <label htmlFor="password" className="text-lg text-secondary">
                Password*
              </label>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </div>
            <div className="space-y-2.5">
              <label
                htmlFor="confirmPassword"
                className="text-[20px] text-secondary"
              >
                Confirm Password*
              </label>
              <Input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
              />
            </div>
            <div className="space-y-3.5">
              <label htmlFor="userType" className="text-lg text-secondary">
                Sign Up As*
              </label>
              <select
                name="userType"
                value={formData.userType}
                onChange={handleChange}
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
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 border text-primary"
                />
                <span className="text-sm text-gray-400">
                  By clicking the registration button, you accept our Terms &
                  Conditions.
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
      </Card>
    </BlureEffect>
  );
};

export default SignupModal;
