import PhoneInput, {
  isValidPhoneNumber,
} from "react-native-international-phone-number";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";
import HelpCircleIcon from "../../assets/auth/help-circle";
import StarIcon from "../../assets/auth/star";
import { colors, fonts, sizes } from "../../utils/theme";
import InputBar from "../../components/InputBar";
import Button from "../../components/Button";

const SignUp = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("080 0000 000");
  const [referralCode, setReferralCode] = useState("");

  function handleInputValue(phoneNumber) {
    setInputValue(phoneNumber);
  }

  function handleSelectedCountry(country) {
    setSelectedCountry(country);
  }

  return (
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
          Enter your phone number and we'll send an SMS with a code to verify
          your phone number.
        </Text>

        <View style={styles.inputContainer}>
          {/* <PhoneInput
            value={inputValue}
            defaultValue="+234700000000"
            onChangePhoneNumber={handleInputValue}
            selectedCountry={selectedCountry}
            onChangeSelectedCountry={handleSelectedCountry}
          /> */}

          <Text style={styles.inputLabel}>Phone Number</Text>
          <View style={styles.phoneInputContainer}>
            <View style={styles.flagContainer}>
              <View style={[styles.flag, { backgroundColor: "#008751" }]} />
              <View style={[styles.flag, { backgroundColor: "#fff" }]} />
              <View style={[styles.flag, { backgroundColor: "#008751" }]} />
            </View>
            <TextInput
              style={styles.phoneInput}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <InputBar
            label="Referral Code (Optional)"
            placeholder="Enter referral code"
            value={referralCode}
            onChangeText={setReferralCode}
          />
        </View>

        <Text style={styles.termsText}>
          By signing up, you accept our{" "}
          <Text style={styles.termsLink}>Terms & Conditions</Text>
        </Text>
      </View>

      <View style={styles.footer}>
        <Button
          btnTxt="Next"
          onPress={() => console.log("Create account")}
        ></Button>

        <TouchableOpacity style={styles.loginLink}>
          <Text style={styles.loginText}>
            Already have an account?{" "}
            <Text style={styles.loginLinkText}>Login here</Text>
          </Text>
        </TouchableOpacity>

        <Text style={styles.versionText}>v2.5.501</Text>
      </View>
    </View>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: sizes["2xl"],
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
    fontSize: sizes.sm,
    textAlign: "center",
    fontFamily: fonts.regular,
    marginTop: sizes.md,
  },
  termsLink: {
    color: colors.purple[100],
  },
  footer: {
    paddingHorizontal: sizes.lg,
    paddingBottom: 40,
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
