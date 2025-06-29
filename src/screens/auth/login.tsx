import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Keyboard,
} from "react-native";
import { Formik } from "formik";
import React, { useState } from "react";
import StarIcon from "../../assets/auth/star";
import { LogInSchema } from "../../utils/schema";
import Button from "../../components/DynamicButton";
import { moderateScale } from "../../utils/scaling";
import BiometricIcon from "../../assets/auth/biometric";
import { colors, fonts, sizes } from "../../utils/theme";
import { useNavigation } from "@react-navigation/native";
import HelpCircleIcon from "../../assets/auth/help-circle";
import SmoothPinCodeInput from "@zfloc/react-native-smooth-pincode-input";

const LogIn = () => {
  const navigation = useNavigation<any>();
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Formik
      initialValues={{ code: "" }}
      validationSchema={LogInSchema}
      onSubmit={(values) => {
        navigation.navigate("DashboardTab");
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
      }) => (
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          <View style={styles.header}>
            <Text style={styles.brandName}>
              squareme <StarIcon />
            </Text>
            <TouchableOpacity style={styles.helpButton}>
              <HelpCircleIcon />
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>Welcome back John</Text>
            <Text style={styles.subtitle}>
              Enter your PIN to access your Squareme account
            </Text>

            <View style={styles.containerOTP}>
              <SmoothPinCodeInput
                cellStyle={[
                  styles.pinCode,
                  touched.code && errors.code ? styles.inputError : null,
                ]}
                cellStyleFocused={styles.pinCodeFocus}
                mask="*"
                codeLength={4}
                password={true}
                value={values.code}
                keyboardType={"default"}
                onTextChange={handleChange("code")}
                onFulfill={() => Keyboard.dismiss()}
                onBackspace={() => {}}
              />
              {touched.code && errors.code && (
                <Text style={styles.errorText}>{errors.code}</Text>
              )}
            </View>

            <Text style={styles.termsText}>
              <Text style={styles.termsLink}>Forgot PIN?</Text>
            </Text>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.loginLink}>
              <BiometricIcon />
              <Text style={styles.loginText}>Biometrics</Text>
            </TouchableOpacity>

            <Button
              btnTxt="Next"
              loading={loading}
              onPress={handleSubmit}
              // fieldStatus={false}
              fieldStatus={values.code.length == 4}
            />

            <TouchableOpacity
              style={styles.loginLink}
              onPress={() =>
                navigation.navigate("AuthStack", {
                  screen: "SignUp",
                })
              }
            >
              <Text style={styles.loginText}>
                Not John?
                <Text style={styles.loginLinkText}> Sign Up</Text>
              </Text>
            </TouchableOpacity>

            <Text style={styles.versionText}>v2.5.501</Text>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default LogIn;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: sizes.md,
    backgroundColor: colors.white[100],
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: sizes.lg,
    paddingVertical: sizes.md,
    justifyContent: "space-between",
  },
  backButton: {
    padding: 8,
  },
  helpButton: {
    padding: 8,
  },
  brandName: {
    fontSize: 24,
    fontFamily: fonts.semiBold,
    color: colors.blue[100],
    flex: 1,
    textAlign: "left",
  },
  title: {
    fontSize: sizes.lg,
    fontFamily: fonts.medium,
    color: colors.blue["90"],
    marginBottom: sizes.xs,
    // flex: 1,
  },
  content: {
    flex: 1.5,
    paddingHorizontal: 20,
    paddingTop: sizes["2xl"],
  },
  footer: {
    flex: 1,
    // justifyContent: "flex-end",
    // backgroundColor: "red",
    paddingHorizontal: sizes.lg,
    paddingBottom: sizes.lg,
  },
  subtitle: {
    fontSize: sizes.md,
    fontFamily: fonts.regular,
    color: colors.blue["90"],
    lineHeight: 24,
    marginBottom: sizes.xl,
  },

  // Account Creation Styles
  inputContainer: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: sizes.md,
    color: "#333",
    marginBottom: 8,
    fontFamily: fonts.regular,
  },
  //PIN
  containerOTP: {
    marginVertical: sizes.lg,
    alignItems: "center",
  },
  pinCode: {
    // padding: sizes.lg,
    height: moderateScale(60),
    width: moderateScale(60),
    marginRight: sizes.md,
    borderRadius: moderateScale(8),
    backgroundColor: colors.gray[80],
  },
  inputError: {
    borderColor: colors.red[100],
    borderWidth: 1,
  },
  errorText: {
    color: colors.red[100],
    fontSize: sizes.sm,
    fontFamily: fonts.regular,
    marginTop: sizes["2sm"],
  },
  pinCodeFocus: {
    borderWidth: 1,
    borderColor: colors.blue[100],
  },
  termsText: {
    color: "#666",
    fontSize: sizes.sm,
    textAlign: "center",
    fontFamily: fonts.regular,
    marginTop: sizes.md,
  },
  termsLink: {
    color: colors.purple[100],
  },

  loginLink: {
    alignItems: "center",
    marginTop: sizes.md,
    marginBottom: sizes.lg,
  },
  loginText: {
    color: "#666",
    fontSize: sizes.sm,
    fontFamily: fonts.regular,
  },
  loginLinkText: {
    color: colors.purple[100],
  },
  versionText: {
    fontSize: 12,
    color: "#9ca3af",
    textAlign: "center",
  },
});
