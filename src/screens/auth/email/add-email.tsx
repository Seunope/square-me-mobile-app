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
import InputBar from "../../../components/InputBar";

export const AddEmailScreen = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState("");
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
        <Text style={styles.title}>Enter your email address</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.subtitle}>Please enter your email address</Text>
        <View style={styles.inputContainer}>
          <InputBar
            label="Email address"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Button
          btnTxt="Next"
          onPress={() =>
            navigation.navigate("AuthStack", {
              screen: "VerifyEmail",
            })
          }
        ></Button>
      </View>
    </View>
  );
};
export default AddEmailScreen;
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
});
