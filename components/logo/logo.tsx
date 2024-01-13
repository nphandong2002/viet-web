"use client";

import { NAME_LOGO } from "@/config/site";
import Image from "next/image";
import { Lemon } from "next/font/google";

const ProcionoStyle = Lemon({
  weight: "400",
  subsets: ["latin"],
});

function Logo() {
  return (
    <div className="hover:opacity-75 transition items-center gap-x-2 flex ">
      <div className=" rounded-full border-2">
        <Image alt="logo" src="/logo.png" height={50} width={50} />
      </div>

      <div className="hidden md:flex" style={ProcionoStyle.style}>
        {NAME_LOGO}
      </div>
    </div>
  );
}

export default Logo;
