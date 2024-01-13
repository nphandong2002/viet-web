import { ReactNode } from "react";

export type NavbarMenuType = {
  title: ReactNode;
  icon?: ReactNode | ReactNode[];
  disable?: boolean;
  show?: boolean;
  path: string;
};
