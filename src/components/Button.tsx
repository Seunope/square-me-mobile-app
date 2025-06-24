import React from "react";
import { Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { colors, fonts, sizes } from "../utils/theme";

interface Props {
  btnTxt: string;
  variant?: string;
  bgColor?: string;
  outline?: boolean;
  marginTop?: string;
  outlineColor?: string;
  onPress: () => void; // or onPress(): void;
}

const Button: React.FC<Props> = ({
  btnTxt,
  bgColor,
  outline,
  onPress,
  marginTop = 10,
  variant = "primary",
}) => {
  const btnBackground =
    variant === "primary"
      ? colors.blue[100]
      : variant === "warning"
      ? colors.red[100]
      : bgColor;

  return !outline ? (
    <TouchableOpacity
      activeOpacity={0.4}
      style={[
        styles.button,
        {
          backgroundColor: btnBackground,
          //  marginTop: marginTop
        },
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{btnTxt}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      activeOpacity={0.4}
      style={[
        styles.button,
        {
          // marginTop: marginTop,
          backgroundColor: colors.white[100],
          borderWidth: 1,
          borderColor:
            variant == "warning" ? colors.red[100] : colors.green[100],
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          { color: variant == "warning" ? colors.red[100] : colors.green[100] },
        ]}
      >
        {btnTxt}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    marginTop: sizes.md,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: sizes.md,
    paddingHorizontal: sizes.lg,
    // elevation: 3,
    borderRadius: sizes.xs,
    backgroundColor: colors.green[100],
  },
  text: {
    fontSize: sizes.md,
    lineHeight: sizes.lg,
    letterSpacing: 0.25,
    // fontWeight: "bold",
    color: colors.white[100],
    fontFamily: fonts.bold,
  },
});
