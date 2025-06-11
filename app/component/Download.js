import Image from "next/image";
import { appstore, downloadmockup } from "../asset/export";

export default function Download() {
  return (
    <div className="  text-white px-4">
      <div className="w-[90%] mx-auto   py-14 lg:py-24 flex flex-col lg:flex-row items-center  relative justify-between">
        <div className="">
          <h2 className="text-[42px] lg:text-[51.35px] font-bold mb-6">
            Explore Feed
          </h2>
          <p className="text-[#FFFFFF] text-[18px]  mb-2">
            Discover new content, trending lives, and fresh creators every day.
            The Explore Feed is your window into the Vybex community — diverse,
            exciting, and always on.
          </p>
          <p className="text-white font-medium mb-2 text-[24px]">
            App Coming Soon
          </p>

          <div className="flex gap-4">
            <Image src={appstore} alt="App Store" className="w-auto h-auto" />
          </div>
        </div>

        <div className="relative lg:mt-36 ">
          <div className="absolute  inset-0 w-full h-full bg-gradient-to-br from-[#0000FE] via-[#4B0082] to-[#D0090B] opacity-40 blur-[100px] rounded-[50px] z-0" />

          <div className="relative border-[1px] border-[#252530AB] z-10 bg-gradient-to-br from-[#040818] via-[#0000FE] to-[#D0090B] rounded-[40px] px-8 py-12 w-full xl:w-[554px] h-[350px] lg:h-[500px] xl:h-[642px] flex items-center justify-center shadow-xl ">
            <Image
              src={downloadmockup}
              alt="App Preview"
              className="rounded-[30px] pb-20 lg:pb-62 w-[200px] lg:w-[300px] xl:w-[400px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
