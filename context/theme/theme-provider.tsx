"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { useConfigWeb } from "../config";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const setting = useConfigWeb();
  return (
    <NextUIProvider>
      <NextThemesProvider defaultTheme={setting.theme.mode} {...props}>
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
