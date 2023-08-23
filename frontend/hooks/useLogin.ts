import { ILoginInputs } from '@/components/pages/login/Form';
import { loginUser } from '@/features/user/userSlice';
import { useAppDispatch } from '@/redux/hooks';
import Swal from 'sweetalert2';
import { useRouter } from "next/router"

const useLogin = () => {
    const dispatch = useAppDispatch();
    const router = useRouter()
    const handleLogin = async(data: ILoginInputs) => {
        const result: any = await dispatch(loginUser(data))
        if(result?.payload?.data?.success){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: result?.payload?.data?.message,
            showConfirmButton: false,
            timer: 1500
          })
          router.push("/")
        }else{
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: result?.payload?.data?.message,
            showConfirmButton: false,
            timer: 1500
          })
        }
    }
    return handleLogin
};

export default useLogin;