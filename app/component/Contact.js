import Image from "next/image";
import React from "react";
import { contact, aboutmockup, appstore } from "../asset/export";

export const Contact = () => {
  return (
    <div className="lg:py-28 p-4 ">
      <div className="w-full flex flex-col items-center  gap-8">
        <div className="w-[90%]  border-[1px] border-[#252530AB] rounded-[40px]  bg-gradient-to-br from-40% from-[#040818] via-80% via-[#0000FE] to-100% to-[#D0090B]  lg:h-[505px] flex  items-center justify-between px-6 ">
          <div className="flex flex-col gap-4 p-4">
            <h3 className="text-[31px]  w-full lg:w-[500px] lg:text-[51px] font-[600] text-[#FFFFFF] lg:leading-[66px] leading-[46px]">
              Got Questions? We’ve Got{" "}
              <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,rgba(208,9,11,0.5)_10%,#0000FE_65%)]">
                Answers!
              </span>
            </h3>
            <p className="text-[18px] font-[400] text-[#FFFFFF]">
              Still Have Questions? We’re Here to Help!
            </p>

            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="bg-transparent border text-[14px] border-white/30 text-white placeholder-[#FFFFFF] p-3 rounded-l-md outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="bg-transparent text-[14px] border border-white/30 text-white placeholder-[#FFFFFF] p-3 rounded-l-md outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="bg-transparent text-[14px] border border-white/30 text-white placeholder-[#FFFFFF] p-3 rounded-l-md outline-none"
                  />
                </div>
                <textarea
                  placeholder="Description"
                  className="h-full min-h-[130px] text-[14px] bg-transparent border border-white/30 text-white rounded-r-md placeholder-[#FFFFFF] p-3 outline-none"
                />
              </div>
            </div>

            <button className="w-full md:w-[300px] px-6 py-3 bg-gradient-to-r from-[#D0090B] to-[#0000FE] text-white rounded-full hover:opacity-90 transition">
              Contact Us
            </button>
          </div>

          <div className="relative -bottom-11 xl:bottom-14  lg:block hidden">
            {" "}
            <Image
              src={contact}
              alt="Phone Mockup"
              className="xl:w-[574px] w-[400px] h-[421px] xl:h-[621px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
