"use client";

import { createContext, useContext } from "react";
import { SettingsContextProps } from "./type";

export const ConfigWebContext = createContext({} as SettingsContextProps);
export const useConfigWeb = () => {
  const context = useContext(ConfigWebContext);

  if (!context) throw new Error("useSettingsContext must be use inside SettingsProvider");

  return context;
};
