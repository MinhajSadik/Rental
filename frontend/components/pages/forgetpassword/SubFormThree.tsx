import React, { useState , useEffect} from "react";
import { Input, Button } from "@/components";
import { useForm, SubmitHandler } from "react-hook-form"
import { useChangePasswordMutation } from "@/features/user/userApi";
import Swal from "sweetalert2";
import { useRouter } from "next/router"


type Input = {
  password: string
}

const SubFormThree: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    mode: "onChange"
  })

  const [email, setEmail] = useState("")
  const router = useRouter()

  const [changePassword] = useChangePasswordMutation()
  const handleChangePassword: SubmitHandler<Input> = async({password}) => {
    const result: any = await changePassword({password, email})
    if(result?.data){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: result?.data?.message,
        showConfirmButton: false,
        timer: 1500
      })
      router.push("/login");
      localStorage.removeItem("userEmail")
    }else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: result?.error?.data?.message,
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  useEffect(() => {
    const rawData = localStorage.getItem("userEmail")
    if(rawData !== null){
      const parsedEmail = JSON.parse(rawData);
      setEmail(parsedEmail)
    }
  }, [])
  // State to store form data
  // const [formData, setFormData] = useState({
  //   code: "", // Corrected the field name to match the input name
  // });

  // Function to handle form submission
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   // Here, you can process the form data as per your requirements.
  //   console.log(formData);
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
    <form className="flex flex-col items-start gap-3" onSubmit={handleSubmit(handleChangePassword)}>
      <label htmlFor="code" className="flex flex-col gap-2">
        <h4 className="text-[22px] text-secondary">Choose a new password</h4>
        <span className="text-secondary text-[15px]">
          Create a new password that is at least 6 characters long. A strong
          password has a combination of letters, digits and punctuation marks.
        </span>
      </label>
      <input
          className="flex w-full border border-gray-300 rounded px-4 py-2.5 focus:outline-none focus:border-2 focus:border-primary transition duration-300 text-secondary"
            type="text"
            {...register("password", {required: true})}
            placeholder="Enter your new password code"
      />
      {errors.password && <span className="text-red-500">Password is required</span>}
      {/* <Input
        type="password"
        name="password"
        value={formData.code}
        onChange={handleChange}
        placeholder="New password"
      /> */}
      <div className="flex flex-col items-center w-full mt-1.5">
        <Button>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default SubFormThree;
