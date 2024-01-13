"use client";

import Each from "@/components/each";
import Logo from "@/components/logo";
import { LIST_NARBAR } from "./listnavbar";
import Link from "next/link";

function Navbar() {
  const NavbarContent = () => {
    return (
      <Each
        of={LIST_NARBAR}
        render={(item) => (
          <Link href={item.path} className="w-[100%] ho">
            <li className="px-1 py-2">{item.title}</li>
          </Link>
        )}
      />
    );
  };
  return (
    <nav className="px-2 h-screen hidden sm:flex flex-col border-r-2 ">
      <div className="flex justify-center my-2">
        <Logo />
      </div>
      <div className="grow">
        <ul>
          <NavbarContent />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
