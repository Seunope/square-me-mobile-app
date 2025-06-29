import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fill="#4285F4"
      d="M6.98 20.534c.82-.88 2.07-.81 2.79.15l1.01 1.35c.81 1.07 2.12 1.07 2.93 0l1.01-1.35c.72-.96 1.97-1.03 2.79-.15 1.78 1.9 3.23 1.27 3.23-1.39V7.873c.01-4.03-.93-5.04-4.71-5.04H8.47c-3.78 0-4.72 1.01-4.72 5.04v11.26c0 2.67 1.46 3.29 3.23 1.4Z"
      opacity={0.4}
    />
    <Path
      fill="#4285F4"
      d="M16.25 8.584h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75ZM15.25 12.584h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z"
    />
  </Svg>
);
export default SvgComponent;
