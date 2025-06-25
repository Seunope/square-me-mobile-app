import * as React from "react";
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg";
import { colors } from "../../utils/theme";
interface Props {
  //color: string;
  isVisible: boolean;
}
const SvgComponent = (props: Props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={17}
      height={17}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M.701.947h16.122v16H.701z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill={props.isVisible ? colors.black[100] : "#B1B8C7"}
        fillRule="evenodd"
        d="M15.772 8.726c.057.14.057.3 0 .44-1.471 3.618-4.091 5.778-7.008 5.78h-.005c-2.917-.002-5.536-2.162-7.008-5.78a.589.589 0 0 1 0-.44c1.472-3.617 4.092-5.777 7.008-5.78h.005c2.917.003 5.536 2.163 7.008 5.78Zm-12.956.22c1.312 3.062 3.521 4.882 5.946 4.883 2.424 0 4.633-1.821 5.945-4.883-1.312-3.06-3.521-4.881-5.945-4.882-2.424 0-4.634 1.821-5.946 4.882Zm8.704 0c0 1.607-1.237 2.914-2.759 2.914-1.521 0-2.758-1.307-2.758-2.913 0-1.607 1.237-2.915 2.758-2.915 1.522 0 2.76 1.308 2.76 2.915Zm-4.46 0c0 .991.763 1.796 1.701 1.796.938 0 1.702-.805 1.702-1.795 0-.991-.764-1.797-1.702-1.797s-1.7.806-1.7 1.797Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default SvgComponent;
