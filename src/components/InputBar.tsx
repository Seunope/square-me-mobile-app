import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import EyeIcon from "../assets/auth/eye";
import { colors, fonts, sizes } from "../utils/theme";

interface Props {
  name?: string;
  label?: string;
  value?: string;
  error?: string;
  isValid?: boolean;
  multiline?: boolean;
  password?: boolean;
  minLength?: number;
  maxLength?: number;
  placeholder: string;
  important?: boolean;
  isDisabled?: boolean;
  numberOfLines?: number;
  keyboardType?: string | any;
  passwordShow?: boolean;
  onChangeText: (text: string) => void;
  icon?: boolean;
  // ref?: LegacyRef<HTMLInputElement> | undefined | any;
}

const InputBar: React.FC<Props> = (props) => {
  const [passwordShow, setPasswordShow] = useState(false);
  const isValid = props.error && props.error.length > 0 ? true : false;
  const doShowPassword = () => {
    setPasswordShow(!passwordShow);
  };

  return (
    <>
      <Text style={styles.txtLabel}>
        {props.label}{" "}
        {props.important ? <Text style={{ color: "red" }}>*</Text> : null}
      </Text>
      {props.password ? (
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputStyle2}
            autoCorrect={false}
            secureTextEntry={!passwordShow}
            placeholder="Password"
            {...props}
            placeholderTextColor={colors.gray[100]}
            onChangeText={props.onChangeText}
          />
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => doShowPassword()}
          >
            <EyeIcon isVisible={passwordShow} />
          </TouchableOpacity>
        </View>
      ) : props.isDisabled ? (
        <TextInput editable={true} style={styles.inputStyle} />
      ) : (
        <TextInput
          {...props}
          placeholderTextColor={colors.gray[100]}
          style={styles.inputStyle}
          onChangeText={props.onChangeText}
        />
      )}
    </>
  );
};
export default InputBar;

const styles = StyleSheet.create({
  inputStyle: {
    padding: sizes.sm,
    marginBottom: sizes.lg,
    fontFamily: fonts.regular,

    backgroundColor: colors.gray[80],
    borderRadius: sizes.sm,
    paddingHorizontal: sizes.md,
    paddingVertical: sizes.md,
    fontSize: sizes.md,
    // color: "#333",
    // backgroundColor: colors.green[60],
  },
  txtLabel: {
    fontFamily: fonts.regular,
    fontSize: sizes.md,
    marginBottom: sizes.sm,
  },

  passwordContainer: {
    padding: sizes.sm,
    flexDirection: "row",
    marginBottom: sizes.md,
    borderRadius: sizes.xs,
    // backgroundColor: colors.green[60],
  },
  inputStyle2: {
    flex: 1,
    fontFamily: fonts.semiBold,
  },
});
