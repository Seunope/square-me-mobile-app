import { moderateScale } from "./scaling";

export const colors = {
  white: {
    100: "#FFFFFF",
    90: "#F2F2F2",
  },

  black: {
    100: "#0D2008",
  },

  //   gray: {
  //     100: "#808080",
  //   },

  gray: {
    100: "#4C525E",
    90: "#DEDEDE",
    80: "#F3F4F7",
  },

  blue: {
    100: "#000A4A",
    90: "#120542",
  },

  purple: {
    100: "#9F56D4",
  },

  yellow: {
    100: "#FFAB00",
    90: "#FFEBD1",
  },
  green: {
    100: "#347822",
    // 90: "#38cb89",
    // 80: "#D6E4D3",
    // 70: "#EBF1E9",
    // 60: "rgba(235, 241, 233, 0.5)",
    // 50: "#F5F8F4",
  },

  red: {
    100: "#FF3C10",
    // 90: "#F3ABA7",
    // 80: "#C65652",
    // 70: "#FF6A55",
  },
};

export const sizes = {
  "3xs": moderateScale(4),
  "2xs": moderateScale(6),
  xs: moderateScale(10),
  sm: moderateScale(12),
  "2sm": moderateScale(14),
  md: moderateScale(16),
  lg: moderateScale(20),
  xl: moderateScale(24),
  "2xl": moderateScale(32),
  "3xl": moderateScale(48),
  "4xl": moderateScale(64),
};

export const fonts = {
  bold: "ClashGrotesk-Bold",
  light: "ClashGrotesk-Light",
  medium: "ClashGrotesk-Medium",
  regular: "ClashGrotesk-Regular",
  semiBold: "ClashGrotesk-Semibold",
};
