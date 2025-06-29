import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import Button from "../../components/Button";
import StarIcon from "../../assets/auth/star";
import InputBar from "../../components/InputBar";
import { SignUpSchema } from "../../utils/schema";
import { colors, fonts, sizes } from "../../utils/theme";
import HelpCircleIcon from "../../assets/auth/help-circle";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation<any>();

  return (
    <Formik
      initialValues={{ phoneNumber: "0800000000", referralCode: "" }}
      validationSchema={SignUpSchema}
      onSubmit={(values) => {
        navigation.navigate("AuthStack", {
          screen: "VerifyPhone",
          params: { phoneNumber: values.phoneNumber },
        });
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
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
            <Text style={styles.title}>Create an account</Text>
            <Text style={styles.subtitle}>
              Enter your phone number and we'll send an SMS with a code to
              verify your phone number.
            </Text>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Phone Number</Text>
              <View style={styles.phoneInputContainer}>
                <View style={styles.flagContainer}>
                  <View style={[styles.flag, { backgroundColor: "#008751" }]} />
                  <View style={[styles.flag, { backgroundColor: "#fff" }]} />
                  <View style={[styles.flag, { backgroundColor: "#008751" }]} />
                </View>
                <TextInput
                  style={[
                    styles.phoneInput,
                    touched.phoneNumber && errors.phoneNumber
                      ? styles.inputError
                      : null,
                  ]}
                  value={values.phoneNumber}
                  onChangeText={handleChange("phoneNumber")}
                  onBlur={handleBlur("phoneNumber")}
                  keyboardType="phone-pad"
                  placeholder="0800000000"
                />
              </View>
              {touched.phoneNumber && errors.phoneNumber && (
                <Text style={styles.errorText}>{errors.phoneNumber}</Text>
              )}
            </View>

            <View style={styles.inputContainer}>
              <InputBar
                label="Referral Code (Optional)"
                placeholder="Enter referral code"
                value={values.referralCode}
                onChangeText={handleChange("referralCode")}
                // onBlur={handleBlur("referralCode")}
              />
              {touched.referralCode && errors.referralCode && (
                <Text style={styles.errorText}>{errors.referralCode}</Text>
              )}
            </View>

            <Text style={styles.termsText}>
              By signing up, you accept our{" "}
              <Text style={styles.termsLink}>Terms & Conditions</Text>
            </Text>
          </View>

          <View style={styles.footer}>
            <Button btnTxt="Next" onPress={handleSubmit} />
            <TouchableOpacity
              style={styles.loginLink}
              onPress={() =>
                navigation.navigate("AuthStack", { screen: "LogIn" })
              }
            >
              <Text style={styles.loginText}>
                Already have an account?{" "}
                <Text style={styles.loginLinkText}>Login here</Text>
              </Text>
            </TouchableOpacity>

            <Text style={styles.versionText}>v2.5.501</Text>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: sizes.md,
    backgroundColor: "#fff",
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
  content: {
    flex: 3,
    paddingHorizontal: sizes.lg,
    paddingTop: sizes["2xl"],
  },
  footer: {
    flex: 0.5,
    // justifyContent: "flex-end",
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
    marginBottom: sizes.sm,
  },
  inputLabel: {
    fontSize: sizes.md,
    color: "#333",
    marginBottom: 8,
    fontFamily: fonts.regular,
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.gray[80],
    borderRadius: sizes.md,
    paddingHorizontal: sizes.md,
    paddingVertical: sizes["2xs"],
  },
  flagContainer: {
    flexDirection: "row",
    marginRight: 12,
  },
  flag: {
    width: 6,
    height: 20,
    marginRight: 2,
  },
  phoneInput: {
    flex: 1,
    fontSize: sizes.md,
    color: "#333",
  },
  textInput: {
    backgroundColor: "#f9fafb",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: sizes.md,
    color: "#333",
  },
  termsText: {
    color: "#666",
    fontSize: sizes.xs,
    textAlign: "center",
    fontFamily: fonts.regular,
    marginTop: sizes.sm,
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
