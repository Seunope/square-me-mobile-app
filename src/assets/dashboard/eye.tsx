import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={10}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.7}
      d="M5.371 1.546c.204-.03.413-.046.63-.046 2.552 0 4.227 2.252 4.79 3.143a.749.749 0 0 1 .12.245.585.585 0 0 1 0 .224.753.753 0 0 1-.121.246 8.74 8.74 0 0 1-.682.932M3.362 2.358c-1.08.733-1.815 1.752-2.151 2.285-.069.108-.103.162-.122.245a.586.586 0 0 0 0 .224c.019.083.053.137.121.245C1.773 6.247 3.448 8.5 6 8.5c1.03 0 1.916-.366 2.644-.862M1.5.5l9 9M4.94 3.94A1.5 1.5 0 1 0 7.06 6.06"
    />
  </Svg>
);
export default SvgComponent;
