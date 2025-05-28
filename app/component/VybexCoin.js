import Image from "next/image";
import React from "react";
import { poll, pollmob, vybex, vybexcard, vybexmob } from "../asset/export";

export const VybexCoin = () => {
  return (
    <div className="p-24 ">
      <div className="w-full flex items-center  justify-center gap-14">
        <div className="w-[620px] h-[743px] flex flex-col coins-gradient rounded-[30px]">
          <div className="py-20 flex gap-6 px-12">
            <Image src={poll} alt="" className="w-[80px] h-[80px]" />
            <p className="text-[31.99px] font-[600] flex flex-col gap-2 text-[#FFFFFF]">
              Vybex Coins{" "}
              <span className="text-[18px] text-[#FFFFFF] font-[400]">
                Our in-app currency lets you access paid live events, tip your
                favorite creators, or unlock special features — making your
                interactions more meaningful and rewarding.
              </span>
            </p>
          </div>
          <div className="flex items-end justify-center relative">
            <Image src={vybexmob} alt="" className="w-[350px]" />
            <Image src={vybexcard} alt="" className="absolute bottom-1" />
          </div>
        </div>
        <div className="w-[620px] h-[743px] flex flex-col coins-gradient rounded-[30px]">
          <div className="py-20 flex gap-6 px-12">
            <Image src={vybex} alt="" className="w-[80px] h-[80px]" />
            <p className="text-[31.99px] font-[600] flex flex-col gap-2 text-[#FFFFFF]">
              Poll Post{" "}
              <span className="text-[18px] text-[#FFFFFF] font-[400]">
                Ask questions, spark opinions, and let your followers vote. Poll
                posts are a fun and interactive way to get instant feedback and
                drive engagement.
              </span>
            </p>
          </div>
          <div className="flex items-end justify-center">
            <Image src={pollmob} alt="" className="w-[450px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
