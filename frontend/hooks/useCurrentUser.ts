import { loggedInUser, setCurrentUser } from '@/features/user/userSlice';
import { useAppDispatch } from '@/redux/hooks';

const useCurrentUser = () => {
    const dispatch = useAppDispatch()
    const currentUser = async() => {
      const user: any = await dispatch(loggedInUser())
      if(user?.payload?.data?.success){
        dispatch(setCurrentUser(user?.payload?.data?.data))
      }
    }
    return currentUser
};

export default useCurrentUser;