import * as React from "react";
import Svg, { SvgProps, Path, Circle } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#23262F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.795 17.5a3.32 3.32 0 0 0 2.205.833 3.32 3.32 0 0 0 2.205-.833M15 6.666a5 5 0 0 0-10 0c0 2.576-.65 4.339-1.375 5.505-.612.984-.918 1.476-.907 1.613.012.152.044.21.167.3.11.082.609.082 1.606.082h11.018c.997 0 1.496 0 1.606-.082.123-.09.155-.148.167-.3.011-.137-.295-.63-.907-1.613C15.65 11.005 15 9.241 15 6.667Z"
    />
    <Circle cx={14} cy={3} r={3} fill="#F04438" />
  </Svg>
);
export default SvgComponent;
