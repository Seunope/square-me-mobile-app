import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

interface Props {
  color: string;
  size: number;
}

const SvgComponent = (props: Props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size} //24
    height={props.size}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color}
      stroke={props.color}
      d="M9.096 3.315c1.254-.97 3.239-1.079 4.627-.286l.27.17 5.76 4.031c.47.328.913.867 1.24 1.494.328.627.517 1.3.517 1.876v6.78a4.122 4.122 0 0 1-4.12 4.12H6.61a4.13 4.13 0 0 1-4.12-4.13v-6.9l.008-.205c.036-.489.2-1.044.46-1.574.299-.605.703-1.134 1.13-1.467l5.008-3.91Z"
      opacity={0.4}
    />
    <Path
      fill="#292D32"
      stroke={props.color}
      d="M12 14.75c.134 0 .25.116.25.25v3c0 .134-.116.25-.25.25a.256.256 0 0 1-.25-.25v-3c0-.134.116-.25.25-.25Z"
    />
  </Svg>
);
export default SvgComponent;
