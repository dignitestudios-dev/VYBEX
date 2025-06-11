import Image from "next/image";
import React from "react";
import { poll, pollmob, vybex, vybexcard, vybexmob } from "../asset/export";

export const VybexCoin = () => {
  return (
    <div className=" lg:py-24 flex justify-center p-4">
      <div className="w-[90%]  flex flex-col lg:flex-row items-center  justify-center gap-20">
        <div className=" lg:w-[630px] lg:h-[743px] flex flex-col coins-gradient border-[1px] border-[#252530AB] rounded-[30px] overflow-hidden">
          <div className="py-10 lg:py-20 flex gap-6 lg:px-12 px-4">
            <Image
              src={poll}
              alt=""
              className="w-[60px] lg:w-[80px] h-[60px] lg:h-[80px]"
            />
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
            <Image
              src={vybexmob}
              alt=""
              className="w-[250px] lg:w-[300px] xl:w-[350px]"
            />
            <Image
              src={vybexcard}
              alt=""
              className="absolute bottom-1 w-[400px] xl:w-[600px]"
            />
          </div>
        </div>
        <div className="lg:w-[630px] lg:h-[743px] flex flex-col coins-gradient border-[1px] border-[#252530AB] rounded-[30px]">
          <div className="py-10 lg:py-20 flex gap-6 lg:px-12 px-4">
            <Image
              src={vybex}
              alt=""
              className="w-[60px] lg:w-[80px] h-[60px] lg:h-[80px]"
            />
            <p className="text-[31.99px] font-[600] flex flex-col gap-2 text-[#FFFFFF]">
              Poll Post{" "}
              <span className="text-[18px] text-[#FFFFFF] font-[400]">
                Ask questions, spark opinions, and let your followers vote. Poll
                posts are a fun and interactive way to get instant feedback and
                drive engagement.
              </span>
            </p>
          </div>
          <div className="flex items-end justify-center pb-5">
            <Image
              src={pollmob}
              alt=""
              className="w-[280px] lg:w-[360px]   xl:w-[450px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
