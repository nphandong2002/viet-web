export type SettingsValueProps = {
  widthNavbar: number;
  theme: {
    mode: "light" | "dark";
  };
};

export enum MinMaxWidthNavbar {
  MIN = 10,
  MAX = 30,
}

export type SettingsContextProps = SettingsValueProps & {
  // Update
  onUpdate: (name: string, value: any) => void;
  // Reset
  canReset: boolean;
  onReset: VoidFunction;
  // Drawer
  open: boolean;
  onToggle: VoidFunction;
  onClose: VoidFunction;
};
