import { Paths } from "@/config/router";
import { NavbarMenuType } from "./type";
import Icon from "@/components/icon";

export const LIST_NARBAR: NavbarMenuType[] = [
  {
    title: Paths.newfeed.title,
    path: Paths.newfeed.path,
    icon: [<Icon name="home" />],
  },
];
