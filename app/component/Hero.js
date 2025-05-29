import Image from "next/image";
import { heromockup, logo, text } from "../asset/export";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="gradient  overflow-hidden lg:overflow-visible upper">
      <Navbar />
      <div className="w-full flex flex-col p-4 items-center ">
        <Image src={text} alt="" className="w-[1450px]" />
        <div className="w-full relative flex flex-col md:flex-row items-center justify-center gap-1 text-white pt-24 ">
          <p className="w-[300px] text-end text-[18px] text-[#C8C8C8] font-[400] md:block hidden">
            Join a community built for connection, creativity, and real- time
            interaction.
          </p>
          <div className="relative -top-20 -right-16 ">
            <Image src={heromockup} alt="" className="w-[600px] " />
          </div>
          <p className="text-center text-[18px] text-[#C8C8C8] font-[400] block md:hidden">
            Join a community built for connection, creativity, and real- <br />{" "}
            time interaction.
          </p>
          <button className="md:w-[208px] px-2 text-[16px] font-[600] h-[57px]  rounded-[500px] bg-gradient-to-r from-[#D0090B] to-[#0000FE] uppercase">
            App Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
}
