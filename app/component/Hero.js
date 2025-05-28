import Image from "next/image";
import { heromockup, logo, text } from "../asset/export";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="gradient overflow-hidden lg:overflow-visible upper">
      <Navbar />
      <div className="w-full flex flex-col py-4 items-center ">
        <Image src={text} alt="" className="w-[1450px]" />
        <div className="w-full relative flex items-center justify-center gap-10 text-white ">
          <p className="text-end text-[18px] text-[#C8C8C8] font-[400]">
            Join a community built for <br /> connection, creativity, and real-{" "}
            <br /> time interaction.
          </p>
          <div className="relative -top-20 -right-16">
            <Image src={heromockup} alt="" className="w-[600px] " />
          </div>
          <button className="w-[208px] text-[16px] font-[600] h-[57px] rounded-[500px] bg-gradient-to-r from-[#D0090B] to-[#0000FE] uppercase">
            App Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
}
