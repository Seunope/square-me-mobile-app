import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      stroke="#9F56D4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.5 10.083 1.667 1.667L12.917 8m3.75 2.5c0 4.09-4.462 7.065-6.085 8.012-.185.108-.277.162-.407.19a.946.946 0 0 1-.35 0c-.13-.028-.222-.082-.406-.19-1.624-.947-6.086-3.922-6.086-8.012V6.515c0-.667 0-1 .11-1.286.096-.253.252-.479.455-.658.23-.202.542-.32 1.166-.553l4.468-1.676c.173-.065.26-.097.349-.11a.832.832 0 0 1 .238 0c.09.013.176.045.35.11l4.468 1.676c.623.234.935.35 1.165.553.203.18.36.405.456.658.109.286.109.62.109 1.286V10.5Z"
    />
  </Svg>
);
export default SvgComponent;
