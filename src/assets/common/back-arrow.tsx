import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9.57 5.93 3.5 12l6.07 6.07M20.5 12H3.67"
    />
  </Svg>
);
export default SvgComponent;
