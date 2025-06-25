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
  Keyboard,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";
import HelpCircleIcon from "../../../assets/auth/help-circle";
import StarIcon from "../../../assets/auth/star";
import { colors, fonts, sizes } from "../../../utils/theme";
import InputBar from "../../../components/InputBar";
import Button from "../../../components/Button";
import BackArrowIcon from "../../../assets/common/back-arrow";
import KiteIcon from "../../../assets/auth/kite";
import { useNavigation } from "@react-navigation/native";
import SmoothPinCodeInput from "@zfloc/react-native-smooth-pincode-input";
import { moderateScale } from "../../../utils/scaling";

export const PhoneVerificationScreen = () => {
  const navigation = useNavigation<any>();
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(30);
  const [isFilled, setIsFilled] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const renderCodeInputs = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <View
        key={i}
        style={[styles.codeInput, code.length > i && styles.codeInputFilled]}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.pop(1)}
        >
          <BackArrowIcon />
        </TouchableOpacity>
        <Text style={styles.title}>Verify your email address</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.subtitle}>
          Please input the five (5) digit code that was sent to your email
          address below
        </Text>

        <View style={styles.containerOTP}>
          <SmoothPinCodeInput
            cellStyle={styles.pinCode}
            cellStyleFocused={styles.pinCodeFocus}
            mask="*"
            codeLength={4}
            password={true}
            value={code}
            keyboardType={"default"}
            onTextChange={(value: any) => setCode(value)}
            onFulfill={() => (setIsFilled(true), Keyboard.dismiss())}
            onBackspace={() => setIsFilled(false)}
          />
        </View>

        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>{formatTime(timer)}</Text>
          <TouchableOpacity disabled={timer > 0}>
            <Text
              style={[
                styles.resendText,
                timer > 0 && styles.resendTextDisabled,
              ]}
            >
              Resend code
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Button
          btnTxt="Verify"
          onPress={() =>
            navigation.navigate("AuthStack", {
              screen: "SuccessScreen",
              params: {
                details: {
                  nextScreen: "",
                  message: "Your email address has been added successfully.",
                  title: "Email added successfully!",
                },
              },
            })
          }
        ></Button>
      </View>
    </View>
  );
};
export default PhoneVerificationScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: sizes.md,
    paddingVertical: sizes.md,
    // justifyContent: "space-between",
  },
  backButton: {
    padding: sizes.xs,
    paddingLeft: 0,
    marginRight: sizes.md,
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
    // marginBottom: sizes.xs,
    // flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: sizes["2xl"],
  },
  footer: {
    paddingHorizontal: sizes.lg,
    paddingBottom: sizes["3xl"],
  },

  subtitle: {
    fontSize: sizes.md,
    fontFamily: fonts.regular,
    color: colors.blue["90"],
    lineHeight: 24,
    textAlign: "center",
    marginBottom: sizes["2xl"],
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

  pinCodeFocus: {
    borderWidth: 1,
    borderColor: colors.blue[100],
  },
  // Verification  Styles
  illustrationContainer: {
    alignItems: "center",
    marginBottom: sizes["3xl"],
    height: 100,
  },

  verificationTitle: {
    fontSize: sizes.md,
    fontFamily: fonts.medium,
    color: colors.blue[90],
    textAlign: "center",
    marginBottom: sizes.sm,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
  },
  codeInput: {
    width: 50,
    height: 50,
    backgroundColor: "#f3f4f6",
    borderRadius: 12,
    marginHorizontal: 6,
  },
  codeInputFilled: {
    backgroundColor: "#e5e7eb",
  },
  timerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timerText: {
    fontSize: sizes.md,
    fontFamily: fonts.medium,
    color: colors.purple[100],
  },
  resendText: {
    fontSize: sizes.md,
    fontFamily: fonts.medium,
    color: colors.purple[100],
  },
  resendTextDisabled: {
    color: "#9ca3af",
  },
  verifyButton: {
    backgroundColor: "#1e293b",
    borderRadius: 12,
    paddingVertical: 16,
    marginHorizontal: 20,
    marginBottom: 40,
    alignItems: "center",
  },
  verifyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
