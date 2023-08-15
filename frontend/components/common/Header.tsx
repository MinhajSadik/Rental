/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constants";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import {
  ForgetPasswordModal,
  LoginModal,
  SignupModal,
} from "@/components/modal";
import { useDispatch, useSelector } from "react-redux";
import { openLogin, selectIsLoginOpen } from "@/features/loginToggleSlice";
import { selectIsSignupOpen } from "@/features/signupToggleSlice";
import { selectIsForgetPasswordOpen } from "@/features/forgetpasswordToggleSlice";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const {user} = useAppSelector((state) => state.user)
  const router = useRouter();
  // ==== navtoggle state ====
  const [navToggle, setNavToggle] = useState<boolean>(false);

  const dispatch = useDispatch();
  const isLoginOpen = useSelector(selectIsLoginOpen);
  const isSignupOpen = useSelector(selectIsSignupOpen);
  const isForgetPasswordOpen = useSelector(selectIsForgetPasswordOpen);

  useEffect(() => {
    if (isLoginOpen || isSignupOpen || isForgetPasswordOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isLoginOpen, isSignupOpen, isForgetPasswordOpen]);

  const handleLogout = () =>{
    localStorage.removeItem("accessToken")
    window.location.replace("/")
  }

  return (
    <header>
      <nav className="max-w-[1400px] mx-auto flex justify-between items-center lg:px-8 md:px-6 px-4 py-4 border-b lg:border-none">
        <div className="lg:block flex justify-between lg:w-auto w-full">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={80}
              height={80}
              className="md:w-[80px] w-[60px]"
            />
          </Link>
          <button
            className="lg:hidden text-secondary hover:text-secondaryHov transition duration-300"
            onClick={() => setNavToggle(!navToggle)}
          >
            {navToggle ? (
              <MdOutlineClose className="text-2xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>
        <ul className="lg:flex hidden justify-center items-center gap-8">
          {navLinks.map((link, i) => (
            <li key={i}>
              <Link className="text-secondary font-medium" href={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="lg:flex hidden items-center gap-6 font-medium">
          {
            !user?.email && <button
            className="text-secondary outline-none"
            onClick={() => dispatch(openLogin())}
          >
            Login
          </button>
          }


          {
            user?.role === "owner" && <Link
            href="/add-property"
            className="bg-primary hover:bg-primaryHov transition duration-300 text-white px-6 py-2.5 rounded"
          >
            Add Property
          </Link>
          }

          {
          user?.email && <button
          onClick={handleLogout}
            className="text-secondary outline-none"
          >
            Logout
          </button>
          }
          {
            user?.profile && <img className="w-12 h-12 rounded-full ring-2" src={user?.profile} alt="profile" />
          }
          
          
        </div>
      </nav>
      {/* ==== Mobile View ==== */}
      <div
        className={`shadow-md px-2 pt-2 pb-8 absolute w-full left-0 right-0 top-22 lg:hidden transition duration-300 bg-white ${
          navToggle ? "left-0" : "left-[-100%]"
        }`}
      >
        <nav className="space-y-4">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  className="flex w-full md:px-4 px-2 py-1.5 text-secondary font-medium"
                  href={link.path}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-start gap-4 md:px-4 px-2">
            <button
              className="text-secondary"
              onClick={() => dispatch(openLogin())}
            >
              Login
            </button>
            <Link
              href="/add-property"
              className="bg-primary hover:bg-primaryHov transition duration-300 text-white px-6 py-2.5 rounded"
            >
              Add Property
            </Link>
          </div>
        </nav>
      </div>

      {isLoginOpen && <LoginModal />}

      {isSignupOpen && <SignupModal />}

      {isForgetPasswordOpen && <ForgetPasswordModal />}
    </header>
  );
};

export default Header;