"use client";

import { useConfigWeb } from "@/context/config";

function Navbar() {
  const configWeb = useConfigWeb();
  return (
    <nav
      className="h-screen"
      style={{
        width: configWeb.widthNavbar,
      }}
    ></nav>
  );
}

export default Navbar;
