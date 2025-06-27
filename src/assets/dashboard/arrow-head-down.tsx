import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={4}
    fill="none"
    {...props}
  >
    <Path
      stroke="#9F56D4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M.5.75 3 3.25 5.5.75"
    />
  </Svg>
);
export default SvgComponent;
