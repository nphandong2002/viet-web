import { forwardRef } from "react";
// icons
import { Icon, IconProps } from "@iconify/react";
//
import { IconifyProps } from "./types";

// ----------------------------------------------------------------------

interface Props extends IconProps {
  icon: IconifyProps;
}

const Iconify = forwardRef<SVGElement, Props>(({ icon, width = 20, style, ...other }, ref) => <Icon className="component-iconify" icon={icon} style={{ width, height: width, ...style }} {...other} />);

export default Iconify;
