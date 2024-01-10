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
    <div className="flex flex-row justify-center items-center h-[10%]">
      <div>
        <Image alt="logo" src="/logo.png" width="16" height="16" />
      </div>
      <div className="" style={ProcionoStyle.style}>
        {NAME_LOGO}
      </div>
    </div>
  );
}

export default Logo;
