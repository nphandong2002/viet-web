"use client";

import Logo from "@/components/logo";
import { useConfigWeb } from "@/context/config";

function Navbar() {
  const configWeb = useConfigWeb();
  return (
    <nav
      className="h-screen"
      style={{
        width: configWeb.widthNavbar,
      }}
    >
      <Logo />
    </nav>
  );
}

export default Navbar;
