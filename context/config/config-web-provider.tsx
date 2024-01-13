"use client";

import { ConfigWebContext } from "./config-web-context";
import { isEqual } from "lodash";
import { useEffect, useMemo, useCallback, useState } from "react";
import { SettingsValueProps } from "./type";
import { useTheme } from "next-themes";

// ----------------------------------------------------------------------

type SettingsProviderProps = {
  children: React.ReactNode;
  defaultSettings: SettingsValueProps;
};

export function ConfigWebProvider({ children, defaultSettings }: SettingsProviderProps) {
  const [state, setState] = useState(defaultSettings);
  const { setTheme } = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);
  const update = (name: string, value: any) => {
    setState((prevValue: any) => {
      window.localStorage.setItem(
        "tesst",
        JSON.stringify({
          ...prevValue,
          [name]: value,
        })
      );
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const reset = () => {};

  // Drawer
  const onToggleDrawer = useCallback(() => {
    setOpenDrawer((prev) => !prev);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setOpenDrawer(false);
  }, []);
  useEffect(() => {
    setTheme(defaultSettings.theme.mode);
  }, [defaultSettings, setTheme]);
  const canReset = !isEqual(state, defaultSettings);

  const memoizedValue = useMemo(
    () => ({
      ...state,
      onUpdate: update,
      // Reset
      canReset,
      onReset: reset,
      // Drawer
      open: openDrawer,
      onToggle: onToggleDrawer,
      onClose: onCloseDrawer,
    }),
    [reset, update, state, canReset, openDrawer, onCloseDrawer, onToggleDrawer]
  );

  return <ConfigWebContext.Provider value={memoizedValue}>{children}</ConfigWebContext.Provider>;
}
