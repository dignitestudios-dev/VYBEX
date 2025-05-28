import Image from "next/image";
import React from "react";
import { aboutmockup, appstore } from "../asset/export";

export const About = () => {
  return (
    <div className="py-16 lg:py-28">
      <div className="w-full flex flex-col items-center pt-12 gap-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-thin text-[#FFFFFF] text-center">
          About Us
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-[400] text-[#FFFFFF] w-full sm:w-10/12 md:w-8/12 text-center">
          On Vybex, it’s all about vibe. Post what you want. Go live when it
          matters. Share moments that actually feel like you. Whether it’s
          everyday stuff or exclusive events, we’re here for the raw, the real,
          and everything in between.
        </p>
        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[90%] overflow-hidden rounded-[40px] bg-gradient-to-br from-30% from-[#040818] via-70% via-[#0000FE] to-100% to-[#D0090B] h-[490px] lg:h-[490px] flex flex-col lg:flex-row items-center justify-center px-6 gap-8 sm:gap-12">
          <div className="flex flex-col gap-4 w-full sm:w-10/12 md:w-1/2 p-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-[600] text-[#FFFFFF] leading-[42px]">
              What we Provide
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-thin text-[#FFFFFF]">
              Vybex lets you share your world your way — from photos and videos
              to polls, stories, and live streams. You can go live anytime or
              explore a feed full of other creators in real time. Want to host
              something exclusive? Try a paid live with Vybex Coins or an
              invite-only session for your inner circle. Whether you're posting
              everyday moments or planning something big, Vybex gives you the
              tools to keep it real and connect on your terms.
            </p>
            <p className="text-lg sm:text-xl font-[400] text-[#FFFFFF] leading-[42px]">
              App Coming Soon
            </p>
            <div className="w-full max-w-[400px]">
              <Image src={appstore} alt="App Store" className="w-full" />
            </div>
          </div>
          <div className="relative top-8 sm:top-0 w-full flex justify-center lg:w-1/2">
            <Image
              src={aboutmockup}
              alt="App Mockup"
              className="w-full max-w-[540px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
