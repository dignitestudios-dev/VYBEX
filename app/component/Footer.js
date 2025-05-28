import React from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import { logo, appstore, playstore, appstoreicon } from "../asset/export"; // adjust paths accordingly

const Footer = () => {
  return (
    <footer className="bg-[#05020E] py-12 px-4">
      <div className="max-w-[1400px] mx-auto bg-gradient-to-br from-[#0A0A24] via-[#0C0582] to-[#D0090B] rounded-[30px] p-8 md:p-12 text-white">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Left: Logo + Social Links */}
          <div className="flex flex-col gap-4 w-full lg:w-1/4">
            <Image src={logo} alt="Vybex Logo" width={127} height={109} />
            <h4 className="font-semibold text-white">Social Links</h4>
            <div className="flex gap-3">
              {[
                FaFacebookF,
                FaInstagram,
                FaXTwitter,
                FaLinkedinIn,
                FaTiktok,
              ].map((Icon, idx) => (
                <div
                  key={idx}
                  className="bg-white p-2 rounded-full text-[#53006A] hover:scale-105 transition-transform"
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>

          {/* Middle: Quick Links and Contact */}
          <div className="flex flex-col sm:flex-row justify-between gap-10 w-full lg:w-2/4">
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold mb-2">Quick Links</h4>
              {["Home", "About", "Features", "Contact"].map((link, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-sm text-white/80 hover:text-white transition"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold mb-2">Contact</h4>
              <p className="text-sm text-white/80">support@vybexapp.com</p>
              <p className="text-sm text-white/80">+1 (123) 456-7890</p>
              <p className="text-sm text-white/80">
                123 Vybex Lane, Suite 100,
                <br />
                City, State, ZIP
              </p>
            </div>
          </div>

          {/* Right: App Store Buttons */}
          <div className="flex flex-col gap-4 w-full lg:w-1/3">
            <h4 className="font-semibold">App Coming Soon</h4>
            <p className="text-sm text-white/80">
              Get Vybex On Your Device Today For Easy Connection, Stories, And
              Much More!
            </p>
            <div className="flex flex-col gap-2">
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

        {/* Bottom: Legal */}
        <div className="border-t border-white/20 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>© 2025 Vybex App. All Rights Reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
