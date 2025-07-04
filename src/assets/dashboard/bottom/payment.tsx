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
      d="M14.89 18.22H6.1c-.52 0-1.01-.05-1.45-.15-.23-.03-.51-.11-.8-.22-1.33-.5-2.9-1.73-2.9-4.79V7.91c0-3.27 1.88-5.15 5.15-5.15h8.79c2.76 0 4.54 1.32 5.02 3.72.09.44.13.91.13 1.43v5.15c0 3.29-1.87 5.16-5.15 5.16ZM6.11 4.28c-2.46 0-3.65 1.19-3.65 3.65v5.15c0 1.79.63 2.89 1.92 3.38.2.07.39.12.57.15.38.08.75.12 1.16.12h8.79c2.46 0 3.65-1.19 3.65-3.65V7.93c0-.42-.03-.79-.1-1.13-.34-1.7-1.5-2.52-3.55-2.52H6.11Z"
    />
    <Path
      fill={props.color}
      d="M17.89 21.22H9.1c-.85 0-1.61-.12-2.26-.37-1.47-.55-2.43-1.71-2.76-3.37a.74.74 0 0 1 .21-.68.73.73 0 0 1 .69-.19c.33.07.7.11 1.12.11h8.79c2.46 0 3.65-1.19 3.65-3.65V7.92c0-.42-.03-.79-.1-1.13-.05-.25.03-.5.2-.68.18-.18.43-.26.68-.2 2.4.49 3.72 2.27 3.72 5.01v5.15c0 3.28-1.87 5.15-5.15 5.15Zm-11.97-3c.32.58.8.99 1.46 1.23.48.18 1.06.27 1.73.27h8.79c2.46 0 3.65-1.19 3.65-3.65v-5.15c0-1.58-.49-2.63-1.5-3.18v5.33c0 3.27-1.88 5.15-5.15 5.15H5.92Z"
    />
    <Path
      fill={props.color}
      d="M10.5 13.89c-1.87 0-3.39-1.52-3.39-3.39s1.52-3.39 3.39-3.39 3.39 1.52 3.39 3.39-1.52 3.39-3.39 3.39Zm0-5.28c-1.04 0-1.89.85-1.89 1.89s.85 1.89 1.89 1.89 1.89-.85 1.89-1.89-.85-1.89-1.89-1.89ZM4.78 13.45c-.41 0-.75-.34-.75-.75V8.3c0-.41.34-.75.75-.75s.75.34.75.75v4.4c0 .41-.33.75-.75.75ZM16.21 13.45c-.41 0-.75-.34-.75-.75V8.3c0-.41.34-.75.75-.75s.75.34.75.75v4.4c0 .41-.33.75-.75.75Z"
    />
  </Svg>
);
export default SvgComponent;
