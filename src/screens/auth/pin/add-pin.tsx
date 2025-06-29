import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Keyboard,
} from "react-native";
import Button from "../../../components/Button";
import KiteIcon from "../../../assets/auth/kite";
import React, { useState, useEffect } from "react";
import { moderateScale } from "../../../utils/scaling";
import { useNavigation } from "@react-navigation/native";
import { colors, fonts, sizes } from "../../../utils/theme";
import BackArrowIcon from "../../../assets/common/back-arrow";
import SmoothPinCodeInput from "@zfloc/react-native-smooth-pincode-input";

export const AddPinScreen = () => {
  const navigation = useNavigation<any>();
  const [code, setCode] = useState("");
  const [isFilled, setIsFilled] = useState<boolean>(false);

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
        <Text style={styles.title}>Set your Security PIN</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.subtitle}>
          Please input the five (5) digit code that was sent to your Whatsapp
          below
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
      </View>
      <View style={styles.footer}>
        <Button
          btnTxt="Next"
          onPress={() =>
            navigation.navigate("AuthStack", {
              screen: "ConfirmPin",
            })
          }
        ></Button>
      </View>
    </View>
  );
};
export default AddPinScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: sizes.md,
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
