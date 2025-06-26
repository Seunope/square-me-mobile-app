import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    fill="none"
    {...props}
  >
    <Circle
      cx={30}
      cy={30}
      r={29.25}
      fill="#F9F9F9"
      stroke="#F5F5F5"
      strokeWidth={1.5}
    />
    <Path
      stroke="#23262F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M24.15 43.831a18.238 18.238 0 0 1-3.311-10.503c0-5.062 4.1-9.164 9.16-9.164 5.058 0 9.159 4.102 9.159 9.164"
    />
    <Path
      stroke="#000A4A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M24.15 43.831a18.238 18.238 0 0 1-3.311-10.503c0-5.062 4.1-9.164 9.16-9.164 5.058 0 9.159 4.102 9.159 9.164"
    />
    <Path
      stroke="#23262F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M39.654 42.468c-.165.009-.327.024-.493.024-5.059 0-9.16-4.102-9.16-9.164"
    />
    <Path
      stroke="#000A4A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M39.654 42.468c-.165.009-.327.024-.493.024-5.059 0-9.16-4.102-9.16-9.164"
    />
    <Path
      stroke="#23262F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M31.904 45c-3.892-2.427-6.483-6.746-6.483-11.672a4.581 4.581 0 1 1 9.16 0 4.581 4.581 0 1 0 9.161 0c0-7.592-6.152-13.746-13.74-13.746-7.587 0-13.74 6.154-13.74 13.746 0 1.692.19 3.34.538 4.929"
    />
    <Path
      stroke="#000A4A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M31.904 45c-3.892-2.427-6.483-6.746-6.483-11.672a4.581 4.581 0 1 1 9.16 0 4.581 4.581 0 1 0 9.161 0c0-7.592-6.152-13.746-13.74-13.746-7.587 0-13.74 6.154-13.74 13.746 0 1.692.19 3.34.538 4.929"
    />
    <Path
      stroke="#23262F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M42.789 20.795C39.665 17.247 35.099 15 30 15c-5.098 0-9.665 2.247-12.788 5.795"
    />
    <Path
      stroke="#000A4A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M42.789 20.795C39.665 17.247 35.099 15 30 15c-5.098 0-9.665 2.247-12.788 5.795"
    />
  </Svg>
);
export default SvgComponent;
