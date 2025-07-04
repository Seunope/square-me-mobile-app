import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={43}
    height={45}
    fill="none"
    {...props}
  >
    <Rect width={42.419} height={45} x={0.312} fill="#FFF4EB" rx={10} />
    <Path
      fill="#F99F4D"
      d="M26.278 17.92v5.15c0 3.08-1.76 4.4-4.4 4.4h-8.79c-.45 0-.88-.04-1.28-.13-.25-.04-.49-.11-.71-.19-1.5-.56-2.41-1.86-2.41-4.08v-5.15c0-3.08 1.76-4.4 4.4-4.4h8.79c2.24 0 3.85.95 4.28 3.12.07.4.12.81.12 1.28Z"
      opacity={0.4}
    />
    <Path
      fill="#F99F4D"
      d="M29.278 20.92v5.15c0 3.08-1.76 4.4-4.4 4.4h-8.79c-.74 0-1.41-.1-1.99-.32-1.19-.44-2-1.35-2.29-2.81.4.09.83.13 1.28.13h8.79c2.64 0 4.4-1.32 4.4-4.4v-5.15c0-.47-.04-.89-.12-1.28 1.9.4 3.12 1.74 3.12 4.28Z"
    />
    <Path
      fill="#F99F4D"
      d="M17.478 23.14a2.64 2.64 0 1 0 0-5.28 2.64 2.64 0 0 0 0 5.28ZM11.758 18.25c-.41 0-.75.34-.75.75v3c0 .41.34.75.75.75s.75-.34.75-.75v-3c0-.41-.33-.75-.75-.75ZM23.188 18.25c-.41 0-.75.34-.75.75v3c0 .41.34.75.75.75s.75-.34.75-.75v-3c0-.41-.33-.75-.75-.75Z"
    />
  </Svg>
);
export default SvgComponent;
