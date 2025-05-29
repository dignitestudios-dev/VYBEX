import React from "react";
import { aboutmockup, appstore, livemockup } from "../asset/export";
import Image from "next/image";

export const Live = () => {
  return (
    <div className="flex items-center justify-center p-4 md:py-24">
      <div className="lg:w-[95%]  border-[1px] border-[#252530AB]   rounded-[30px] bg-gradient-to-br from-40% from-[#040818]  via-75% via-[#0000FE] to-100% to-[#D0090B] md:h-[420px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center p-4  md:px-8  md:gap-20  ">
        <div className="flex flex-col  lg:pt-24 ">
          <h3 className="text-[38px] md:text-[46px] font-[600] text-[#FFFFFF] md:leading-[53px] leading-[43px] ">
            Live Streaming Broadcast And Interact In <br />
            <span className="bg-gradient-to-r from-[#D0090B]  to-[#0000FE] text-transparent bg-clip-text">
              Real-time
            </span>
          </h3>
        </div>
        <div className="relative -top-28 lg:block hidden">
          <Image src={livemockup} alt="" className="h-[680px]" />
        </div>
        <div className="lg:pt-24">
          <p className="text-[18px] font-[400] text-[#FFFFFF] pt-8">
            Go live and share your moments in real time with your followers, or
            explore others’ streams in our dynamic Live Feed. You can also host
            exclusive streams with paid or invite-only options.
          </p>
        </div>
      </div>
    </div>
  );
};
