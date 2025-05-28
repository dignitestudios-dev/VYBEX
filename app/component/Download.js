import Image from "next/image";
import { appstore, downloadmockup } from "../asset/export";

export default function Download() {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-24 flex flex-col lg:flex-row items-center justify-between relative gap-16">
        {/* Left Section */}
        <div className="lg:max-w-[550px] z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Explore Feed</h2>
          <p className="text-[#C8C8C8] text-base leading-relaxed mb-2">
            Discover new content, trending lives, and fresh creators every day.
            The Explore Feed is your window into the Vybex community — diverse,
            exciting, and always on.
          </p>
          <p className="text-white font-medium mb-2 text-[24px]">
            App Coming Soon
          </p>

          {/* App Store Button */}
          <div className="flex gap-4">
            <Image src={appstore} alt="App Store" className="w-auto h-auto" />
          </div>
        </div>

        {/* Right Section - Gradient Background & Image */}
        <div className="relative mt-36">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0000FE] via-[#4B0082] to-[#D0090B] opacity-40 blur-[100px] rounded-[50px] z-0" />

          <div className="relative z-10 bg-gradient-to-br from-[#040818] via-[#0000FE] to-[#D0090B] rounded-[40px] px-8 py-12 w-[554px] h-[642px] flex items-center justify-center shadow-xl ">
            <Image
              src={downloadmockup}
              alt="App Preview"
              width={359}
              height={680}
              className="rounded-[30px] pb-62 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
