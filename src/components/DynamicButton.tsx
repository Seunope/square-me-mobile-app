import React from "react";
import {
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { colors, fonts, sizes } from "../utils/theme";

interface Props {
  btnTxt: string;
  loading: boolean;
  // marginTop?: string;
  onPress: () => void;
  fieldStatus: boolean;
}

const ButtonOR: React.FC<Props> = (props) => {
  return props.loading ? (
    <TouchableOpacity
      style={[
        styles.button,
        props.fieldStatus ? null : { backgroundColor: colors.gray[100] },
      ]}
    >
      <ActivityIndicator size="small" color={colors.blue[100]} />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={[
        styles.button,
        props.fieldStatus ? null : { backgroundColor: colors.gray[100] },
      ]}
      onPress={props.fieldStatus ? props.onPress : null}
    >
      <Text style={styles.text}>{props.btnTxt}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: sizes.lg,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: sizes.md,
    paddingHorizontal: sizes.lg,
    // elevation: 3,
    borderRadius: sizes.xs,
    backgroundColor: colors.blue[100],
  },
  text: {
    fontSize: sizes.sm,
    lineHeight: sizes.lg,
    // fontWeight: "bold",
    fontFamily: fonts.bold,
    letterSpacing: 0.25,
    color: "white",
  },
});
export default ButtonOR;
