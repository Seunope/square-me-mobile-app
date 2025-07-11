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
      fill="#6368FF"
      d="m12.9 2.52-.03.07-2.9 6.73H7.12c-.68 0-1.32.13-1.92.39l1.75-4.18.04-.09.06-.16c.03-.07.05-.13.08-.18 1.31-3.03 2.79-3.72 5.77-2.58Z"
      opacity={0.8}
    />
    <Path
      fill="#6368FF"
      d="M18.29 9.52c-.45-.13-.92-.2-1.41-.2H9.97l2.9-6.73.03-.07c.14.05.29.12.44.17l2.21.93c1.23.51 2.09 1.04 2.62 1.68.09.12.17.23.25.36.09.14.16.28.2.43.04.09.07.17.09.26.26.85.1 1.88-.42 3.17Z"
    />
    <Path
      fill="#6368FF"
      d="M21.76 14.2v1.95c0 .2-.01.4-.02.59-.19 3.5-2.14 5.26-5.84 5.26H8.1c-.25 0-.48-.02-.71-.05-3.18-.21-4.88-1.91-5.1-5.09-.03-.24-.05-.47-.05-.71V14.2c0-2.01 1.22-3.74 2.96-4.49.6-.26 1.24-.39 1.92-.39h9.76c.49 0 .96.07 1.41.2a4.9 4.9 0 0 1 3.47 4.68Z"
      opacity={0.4}
    />
    <Path
      fill="#BDBFFB"
      d="M6.95 5.53 5.2 9.71a4.894 4.894 0 0 0-2.96 4.49v-2.93c0-2.84 2.02-5.21 4.71-5.74ZM21.76 11.27v2.93a4.9 4.9 0 0 0-3.47-4.68c.52-1.29.68-2.32.42-3.17-.02-.09-.05-.17-.09-.26a5.84 5.84 0 0 1 3.14 5.18Z"
      opacity={0.6}
    />
    <Path
      fill="#6368FF"
      d="M14.5 16.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
    />
  </Svg>
);
export default SvgComponent;
