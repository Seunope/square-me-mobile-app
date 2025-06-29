import * as React from "react";
import Svg, {
  SvgProps,
  Rect,
  G,
  Path,
  Circle,
  Defs,
  ClipPath,
} from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Rect width={24} height={24} fill="#00C6FB" rx={12} />
    <G
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.667}
      clipPath="url(#a)"
    >
      <Path d="M7 10.333a.555.555 0 0 1 .555-.555h8.89a.556.556 0 0 1 .555.555v1.111a.555.555 0 0 1-.556.556H7.555A.556.556 0 0 1 7 11.444v-1.11ZM12 9.778V17" />
      <Path d="M15.889 12v3.889A1.111 1.111 0 0 1 14.778 17H9.222a1.111 1.111 0 0 1-1.11-1.111V12M9.5 9.778A1.389 1.389 0 1 1 9.5 7c.536-.01 1.061.25 1.507.746.446.496.792 1.204.993 2.032.201-.828.547-1.536.993-2.032.446-.495.971-.755 1.507-.746a1.389 1.389 0 1 1 0 2.778" />
    </G>
    <Circle cx={21} cy={4} r={4} fill="#F04438" />
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M5.333 5.333h13.333v13.333H5.333z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
