import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#F04438"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.5 17 5-5m0 0-5-5m5 5h-12m0-9H8.3c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3.5 5.28 3.5 6.12 3.5 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.78 21 6.62 21 8.3 21h1.2"
    />
  </Svg>
);
export default SvgComponent;
