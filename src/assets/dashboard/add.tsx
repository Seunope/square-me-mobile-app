import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Rect width={24} height={24} fill="#00C6FB" rx={12} />
    <Path
      fill="#fff"
      d="M15.833 12.438h-7A.44.44 0 0 1 8.396 12a.44.44 0 0 1 .437-.438h7a.44.44 0 0 1 .438.438.44.44 0 0 1-.438.438Z"
    />
    <Path
      fill="#fff"
      d="M12.333 15.938a.44.44 0 0 1-.437-.438v-7a.44.44 0 0 1 .437-.438.44.44 0 0 1 .438.438v7a.44.44 0 0 1-.438.438Z"
    />
  </Svg>
);
export default SvgComponent;
