import Image from "next/image";
import { logo } from "../asset/export";

export default function Hero() {
  return (
    <div className="bg-black flex justify-center  flex-col items-center justify-items-center min-h-screen px-8 pb-20 gap-16 sm:px-20 font-[family-name:var(--font-geist-sans)] ">
      <Image src={logo} alt="Logo" width={120} height={120} className="mt-8" />

      <h1 className="text-center text-4xl sm:text-6xl font-bold leading-snug">
        <span className="bg-gradient-to-r to-[#c91214]  from-[#0d00c4] text-transparent bg-clip-text">
          Landing Page
        </span>
        <br />
        <span className="bg-gradient-to-r from-[#c91214]  to-[#0d00c4] text-transparent bg-clip-text animate-pulse">
          Coming Soon
        </span>
      </h1>
    </div>
  );
}
