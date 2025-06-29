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
      fill="#A057FF"
      d="M22.5 9v7.46c0 2.29-1.86 4.14-4.15 4.14H6.65c-2.29 0-4.15-1.85-4.15-4.14V9h20Z"
      opacity={0.4}
    />
    <Path
      fill="#A057FF"
      d="M22.5 7.54V9h-20V7.54c0-2.29 1.86-4.14 4.15-4.14h11.7c2.29 0 4.15 1.85 4.15 4.14ZM8.5 17.25h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM15 17.25h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z"
    />
  </Svg>
);
export default SvgComponent;
