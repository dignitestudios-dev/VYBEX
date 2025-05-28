import Image from "next/image";
import React from "react";
import { contact, aboutmockup, appstore } from "../asset/export";

export const Contact = () => {
  return (
    <div className="py-28 bg-black">
      <div className="w-full flex flex-col items-center pt-12 gap-8">
        <div className="w-[90%] rounded-[40px] bg-gradient-to-br from-30% from-[#040818] via-70% via-[#0000FE] to-100% to-[#D0090B] h-[490px] flex items-center justify- px-6 gap-24">
          <div className="flex flex-col gap-4 w-[50%] p-4">
            <h3 className="text-[51px] font-[600] text-[#FFFFFF] leading-[42px]">
              Got Questions? <br />
              We’ve Got{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5F6FFF] to-[#D609FE]">
                Answers!
              </span>
            </h3>
            <p className="text-[18px] font-[400] text-[#FFFFFF]">
              Still Have Questions? We’re Here to Help!
            </p>

            {/* Contact Form */}
            {/* Contact Form Container */}
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="bg-transparent border border-white/30 text-white placeholder-gray-400 p-3 rounded-l-md outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="bg-transparent border border-white/30 text-white placeholder-gray-400 p-3 rounded-l-md outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="bg-transparent border border-white/30 text-white placeholder-gray-400 p-3 rounded-l-md outline-none"
                  />
                </div>
                <textarea
                  placeholder="Description"
                  className="h-full min-h-[150px] bg-transparent border border-white/30 text-white rounded-r-md placeholder-gray-400 p-3 outline-none"
                />
              </div>
            </div>

            {/* Contact Button */}
            <button className="w-[300px] px-6 py-3 bg-gradient-to-r from-[#D0090B] to-[#0000FE] text-white rounded-full hover:opacity-90 transition">
              Contact Us
            </button>
          </div>

          {/* Right Side - Phone Image */}
          <div className="relative pb-23">
            {" "}
            {/* Added relative positioning */}
            <Image src={contact} alt="Phone Mockup" className="w-[540px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
