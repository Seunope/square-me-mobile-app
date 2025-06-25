import * as React from "react";
import Svg, {
  SvgProps,
  ForeignObject,
  Circle,
  Path,
  Defs,
  ClipPath,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: div */
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={184}
    height={184}
    fill="none"
    {...props}
  >
    <ForeignObject
      width={220.8}
      height={220.8}
      x={-18.4}
      y={-18.4}
    ></ForeignObject>
    <Circle
      cx={92}
      cy={92}
      r={92}
      fill="#D0FBE1"
      data-figma-bg-blur-radius={18.4}
    />
    <ForeignObject
      width={185.752}
      height={185.752}
      x={-0.479}
      y={-0.48}
    ></ForeignObject>
    <Circle
      cx={92.397}
      cy={92.397}
      r={77.397}
      fill="#A6F4C5"
      data-figma-bg-blur-radius={15.479}
    />
    <ForeignObject
      width={142.527}
      height={142.527}
      x={21.123}
      y={20.123}
    ></ForeignObject>
    <Circle
      cx={92.386}
      cy={91.386}
      r={59.386}
      fill="#32D583"
      data-figma-bg-blur-radius={11.877}
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={10.833}
      d="M114.166 75.25 84.374 105.04 70.833 91.5"
    />
    <Defs>
      <ClipPath id="a" transform="translate(18.4 18.4)">
        <Circle cx={92} cy={92} r={92} />
      </ClipPath>
      <ClipPath id="b" transform="translate(.48 .48)">
        <Circle cx={92.397} cy={92.397} r={77.397} />
      </ClipPath>
      <ClipPath id="c" transform="translate(-21.123 -20.123)">
        <Circle cx={92.386} cy={91.386} r={59.386} />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
