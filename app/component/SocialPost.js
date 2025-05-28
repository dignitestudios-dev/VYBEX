import React from "react";
import { aboutmockup, poll, social, socialmob } from "../asset/export";
import Image from "next/image";

export const SocialPost = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[90%] overflow-hidden rounded-[40px] bg-gradient-to-br from-30% from-[#040818]  via-70% via-[#0000FE] to-100% to-[#D0090B] h-[425px] flex items-center justify-between px-24   ">
        <div className="py-20 flex gap-6 ">
          <Image src={social} alt="" className="w-[80px] h-[80px]" />
          <p className="text-[31.99px] font-[600] flex flex-col gap-2 text-[#FFFFFF]">
            Social Post{" "}
            <span className="text-[18px] text-[#FFFFFF] font-[400]">
              Share photos, videos, and updates with your <br /> followers.
              Whether it's a daily vibe or a moment <br /> worth remembering,
              your feed is your canvas.
            </span>
          </p>
        </div>
        <div className=" ">
          <Image src={socialmob} alt="" className="w-[440px]" />
        </div>
      </div>
    </div>
  );
};
