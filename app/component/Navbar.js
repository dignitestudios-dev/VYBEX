"use client";
import { useState } from "react";
import { logo, whitelogo } from "@/app/asset/export";
import Image from "next/image";
import Link from "next/link";
import { RiCloseFill } from "react-icons/ri";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const [active, setActive] = useState("home");

  const toggle = () => {
    setIsopen((prev) => !prev);
  };

  return (
    <div>
      <div className="px-7 lg:px-24 relative flex flex-col items-center z-10 uppercase">
        <nav className="w-full flex items-center justify-between py-4 lg:py-8">
          <div className="text-[13.89px] font-[600]">
            <Image src={whitelogo} alt="" className="w-[88px]" />
          </div>
          <div className="hidden lg:flex justify-center pl-12">
            <ul className="flex items-center space-x-10 font-medium text-[#FFFFFF]">
              <li
                className={`text-[13.89px] cursor-pointer font-[600] tracking-[2.5px] ${
                  active === "home"
                    ? "text-[#A3073F]  decoration-[#A3073F]"
                    : ""
                }`}
              >
                <Link
                  href={"/#home"}
                  onClick={() => {
                    setActive("home");
                  }}
                >
                  Home
                </Link>
              </li>
              <li
                className={`text-[13.89px] cursor-pointer font-[600] tracking-[2.5px] ${
                  active === "aboutus"
                    ? "text-[#A3073F]  decoration-[#A3073F]"
                    : ""
                }`}
              >
                <Link
                  href={"/#aboutus"}
                  onClick={() => {
                    setActive("aboutus");
                  }}
                >
                  About Us
                </Link>
              </li>
              <li
                className={`text-[13.89px] cursor-pointer font-[600] tracking-[2.5px] ${
                  active === "howitswork"
                    ? "text-[#A3073F]  decoration-[#A3073F]"
                    : ""
                }`}
              >
                <Link
                  href={"/#howitswork"}
                  onClick={() => {
                    setActive("howitswork");
                  }}
                >
                  Why Choose Us
                </Link>
              </li>
              <li
                className={`text-[13.89px] cursor-pointer font-[600] tracking-[2.5px] ${
                  active === "contactus"
                    ? "text-[#A3073F]  decoration-[#A3073F]"
                    : ""
                }`}
              >
                <Link
                  href={"/#contactus"}
                  onClick={() => {
                    setActive("contactus");
                  }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => toggle()}
              className="w-[154px] h-[57px] custom-inner-shadow inner-shadow fill-white drop-shadow-xl   bg-[#FFFFFF29] text-[#FFFFFF] text-[16px] font-[600] rounded-[500px] border-[1px] border-[#FFFFFF59] lg:block hidden uppercase"
            >
              Coming Soon
            </button>
            <button onClick={() => toggle()} className="text-white lg:hidden">
              <HiMenuAlt3 />
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`absolute h-screen right-0 top-0 z-50 w-60 max-w-sm lg:hidden overflow-hidden bg-[#050505] text-white transition-all duration-700 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-60"
          }`}
        >
          <div className="p-5 flex justify-between items-start w-full">
            <ul className="flex flex-col space-y-4 py-5 uppercase">
              <li
                onClick={toggle}
                className={`text-[13.89px] cursor-pointer font-[600] ${
                  active === "home"
                    ? "text-[#A3073F]  decoration-[#A3073F]"
                    : ""
                }`}
              >
                <Link href="#home" onClick={() => setActive("home")}>
                  Home
                </Link>
              </li>
              <li
                onClick={toggle}
                className={`text-[13.89px] cursor-pointer font-[600] ${
                  active === "aboutus"
                    ? "text-[#A3073F]  decoration-[#A3073F]"
                    : ""
                }`}
              >
                <Link href="#aboutus" onClick={() => setActive("aboutus")}>
                  About Us
                </Link>
              </li>
              <li
                onClick={toggle}
                className={`text-[13.89px] cursor-pointer font-[600] ${
                  active === "howitswork"
                    ? "text-[#A3073F]  decoration-[#A3073F]"
                    : ""
                }`}
              >
                <Link
                  href="#howitswork"
                  onClick={() => setActive("howitswork")}
                >
                  Why Choose Us
                </Link>
              </li>
              <li
                onClick={toggle}
                className={`text-[13.89px] cursor-pointer font-[600] ${
                  active === "contactus"
                    ? "text-[#A3073F]  decoration-[#A3073F]"
                    : ""
                }`}
              >
                <Link href="#contactus" onClick={() => setActive("contactus")}>
                  Contact Us
                </Link>
              </li>
            </ul>
            <button onClick={toggle} className="ml-auto">
              <RiCloseFill size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
