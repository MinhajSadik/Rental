import React, { useEffect, useState } from "react";
import { VerifyResult } from "@/components/pages/verify";
import { useRouter } from "next/router";
import { withVerifyWrapper } from "@/components/pages/verify";
import axios from "axios"
import Swal from "sweetalert2";

const VerifyPending: React.FC = () => {
  const router = useRouter();
  const [signupData, setSignupData] = useState({})

  const handleButton = (): void => {
    axios.post("http://localhost:5000/api/v1/user/register", signupData)
      .then((data) => {
        if(data.data.success){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: data.data.message,
            showConfirmButton: false,
            timer: 1500
          })
          router.push("/login")
          localStorage.removeItem("signupData")
        }else{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: data.data.message,
            showConfirmButton: false,
            timer: 1500
          })
          router.push("/signup")
          localStorage.removeItem("signupData")
        }

      })
      .catch((err) => console.log(err))
    
  };

  useEffect(() => {
    const rawData = localStorage.getItem("signupData");
    if (rawData !== null) {
      const parsedData = JSON.parse(rawData)
      setSignupData(parsedData)
    }
  },[])

  console.log(signupData)

  return (
    <VerifyResult
      status={{
        text: "Pending",
        color: "text-red-500"
      }}
      title="Checking Your ID Verification"
      subTitle="Thank you for submit your ID and image. We will notify you within 12 hours by mail or
      phone number"
      btn={{
        text: "Complete Registration",
        handle: handleButton
      }}
    />
  )
};

const VerifyFailedSection = withVerifyWrapper(VerifyPending);

export default VerifyFailedSection;