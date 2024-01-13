export type SettingsValueProps = {
  widthNavbar: number;
  theme: {
    mode: "light" | "dark";
  };
};

export type SettingsContextProps = SettingsValueProps & {
  // Update
  onUpdate: (name: string, value: string | boolean) => void;
  // Reset
  canReset: boolean;
  onReset: VoidFunction;
  // Drawer
  open: boolean;
  onToggle: VoidFunction;
  onClose: VoidFunction;
};
