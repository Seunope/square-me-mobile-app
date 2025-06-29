import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import Button from "../../components/Button";
import KiteIcon from "../../assets/auth/kite";
import { moderateScale } from "../../utils/scaling";
import { colors, fonts, sizes } from "../../utils/theme";
import { useNavigation } from "@react-navigation/native";
import BackArrowIcon from "../../assets/common/back-arrow";
import SmoothPinCodeInput from "@zfloc/react-native-smooth-pincode-input";

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

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.pop(1)}
          >
            <BackArrowIcon />
          </TouchableOpacity>
          <Text style={styles.title}>Verify phone number</Text>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.content}>
            <View style={styles.illustrationContainer}>
              <KiteIcon />
            </View>

            <Text style={styles.verificationTitle}>Check your WhatsApp</Text>
            <Text style={styles.subtitle}>
              Please input the five (5) digit code that was sent to your
              Whatsapp below
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
        </ScrollView>

        <View style={styles.footer}>
          <Button
            btnTxt="Verify"
            onPress={() =>
              navigation.navigate("AuthStack", {
                screen: "SuccessScreen",
                params: {
                  details: {
                    nextScreen: "AddPin",
                    message:
                      "Your phone number has been verified successfully.",
                    title: "Verification Successful!",
                  },
                },
              })
            }
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PhoneVerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: sizes.md,
    backgroundColor: "#fff",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: sizes.md,
    paddingVertical: sizes.md,
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
  },
  content: {
    flex: 1,
    paddingHorizontal: sizes.lg,
    paddingTop: sizes["2xl"],
    justifyContent: "center",
    minHeight: 400,
  },
  footer: {
    paddingHorizontal: sizes.lg,
    paddingBottom: sizes["3xl"],
    paddingTop: sizes.md,
    backgroundColor: colors.white[100],
    borderTopWidth: 1,
    borderTopColor: "transparent",
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
  // Verification Styles
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
