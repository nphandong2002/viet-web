"use client";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { useConfigWeb } from "@/context/config";
import { MinMaxWidthNavbar } from "@/context/config/type";
import Navbar from "@/sections/navbar/navbar";
import { ReactNode } from "react";

function MainLayout({ children }: { children: ReactNode }) {
  const setting = useConfigWeb();
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel onResize={(e) => setting.onUpdate("widthNavbar", `${e}`)} minSize={MinMaxWidthNavbar.MIN} maxSize={MinMaxWidthNavbar.MAX} defaultSize={setting.widthNavbar}>
        <Navbar />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={100 - setting.widthNavbar}>{children}</ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default MainLayout;
