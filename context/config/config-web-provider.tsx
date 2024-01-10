"use client";

import { ConfigWebContext } from "./config-web-context";
import { isEqual } from "lodash";
import { useEffect, useMemo, useCallback, useState } from "react";
import { SettingsValueProps } from "./type";

// ----------------------------------------------------------------------

type SettingsProviderProps = {
  children: React.ReactNode;
  defaultSettings: SettingsValueProps;
};

export function ConfigWebProvider({ children, defaultSettings }: SettingsProviderProps) {
  const state = defaultSettings;

  const [openDrawer, setOpenDrawer] = useState(false);
  const update = () => {};
  const reset = () => {};

  // Drawer
  const onToggleDrawer = useCallback(() => {
    setOpenDrawer((prev) => !prev);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setOpenDrawer(false);
  }, []);

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
