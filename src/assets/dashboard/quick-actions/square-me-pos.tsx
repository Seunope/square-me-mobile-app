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
      fill="#6368FF"
      d="M16.69 2.5H8.32c-3.64 0-5.81 2.17-5.81 5.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V8.31c0-3.64-2.17-5.81-5.81-5.81Z"
      opacity={0.4}
    />
    <Path
      fill="#6368FF"
      d="M16.5 9.74h2c.55 0 1-.45 1-1V8.5c0-1.66-1.34-3-3-3h-8c-1.66 0-3 1.34-3 3V9c0 .55.45 1 1 1h1.34c1.31 0 2.5.94 2.63 2.25a2.5 2.5 0 0 1-2.49 2.76H6.5c-.55 0-1 .45-1 1v.5c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3v-.25c0-.55-.45-1-1-1h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.55 0 1-.45 1-1v-.51c0-.55-.45-1-1-1h-2c-.41 0-.75-.33-.75-.75s.34-.76.75-.76Z"
    />
    <Path
      fill="#6368FF"
      d="M7.5 13.5h-1c-.55 0-1-.45-1-1s.45-1 1-1h1c.55 0 1 .45 1 1s-.45 1-1 1Z"
    />
  </Svg>
);
export default SvgComponent;
