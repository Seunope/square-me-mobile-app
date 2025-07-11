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
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
    />
    <Path
      fill={props.color}
      d="M12 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1ZM16 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1ZM8 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1Z"
    />
  </Svg>
);
export default SvgComponent;
