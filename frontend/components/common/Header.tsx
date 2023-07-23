import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constants";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { openLogin } from "@/features/loginToggleSlice";

const Header: React.FC = () => {

  // ==== navtoggle state ====
  const [navToggle, setNavToggle] = useState<boolean>(false);

  // ==== Toggle Login Modal (Redux state managment) ====
  const dispatch = useDispatch();

  // ==== Open Login Modal ====
  const handleOpenLogin = (): void => {
    dispatch(openLogin());
  };

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
            {navToggle ? <MdOutlineClose className="text-2xl"/> : <FaBars className="text-xl" />}
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
          <button onClick={handleOpenLogin}>
            Login
          </button>
          <Link
            href="/"
            className="bg-primary hover:bg-primaryHov transition duration-300 text-white px-6 py-2.5 rounded"
          >
            Add Property
          </Link>
        </div>
      </nav>
      {/* ==== Mobile View ==== */}
      <div className={`shadow-md px-2 pt-2 pb-8 absolute w-full left-0 right-0 top-22 lg:hidden transition duration-300 bg-white ${navToggle ? "left-0" : "left-[-100%]"}`}>
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
            <Link href="/login">Login</Link>
            <Link
              className="bg-primary hover:bg-primaryHov transition duration-300 text-white px-6 py-2.5 rounded"
              href="/signup"
            >
              Sign up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
