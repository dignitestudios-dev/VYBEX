import React from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import {
  logo,
  appstore,
  playstore,
  appstoreicon,
  facebook,
  tiktok,
  instagram,
  linkdin,
  twitter,
  footerlogo,
} from "../asset/export"; // adjust paths accordingly

const Footer = () => {
  return (
    <footer className=" py-12 p-2 ">
      <div className="w-[90%] py-20 xl:h-[463px] flex flex-col  border-[1px] border-[#252530AB] mx-auto bg-gradient-to-br from-30% from-[#040818]  via-70% via-[#0000FE] to-100% to-[#D0090B] rounded-[50px] px-4 lg:px-24  text-white">
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 space-y-11 ">
          {/* Left: Logo + Social Links */}
          <div className="flex flex-col gap-4 w-full col-span-2">
            <Image src={footerlogo} alt="Vybex Logo" width={127} height={109} />
            <h4 className="text-[22px] font-[400] text-white">Social Links</h4>
            <div className="flex gap-3">
              <Image src={facebook} alt="" />
              <Image src={tiktok} alt="" />
              <Image src={instagram} alt="" />
              <Image src={linkdin} alt="" />
              <Image src={twitter} alt="" />
            </div>
          </div>

          {/* Middle: Quick Links and Contact */}
          <div className="flex  gap-10 w-full ">
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold mb-2">Quick Links</h4>
              {["Home", "About", "Features", "Contact"].map((link, idx) => (
                <a key={idx} href="#" className="text-sm text-white ">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold mb-2">Contact</h4>
            <p className="text-sm text-white">support@vybexapp.com</p>
            <p className="text-sm text-white">+1 (123) 456-7890</p>
            <p className="text-sm text-white">
              123 Vybex Lane, Suite 100,
              <br />
              City, State, ZIP
            </p>
          </div>

          {/* Right: App Store Buttons */}
          <div className="flex flex-col gap-4 w-full ">
            <h4 className="font-semibold">App Coming Soon</h4>
            <p className="text-sm text-white">
              Get Vybex On Your Device Today For Easy Connection, Stories, And
              Much More!
            </p>
            <div className="flex xl:flex-col gap-2">
              <Image
                src={playstore}
                alt="Google Play"
                width={140}
                height={40}
                className="cursor-pointer"
              />
              <Image
                src={appstoreicon}
                alt="App Store"
                width={140}
                height={40}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-white">
          <p>© 2025 Vybex App. All Rights Reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="">
              Privacy Policy
            </a>
            <a href="#" className="">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
