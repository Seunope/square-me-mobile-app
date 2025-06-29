import { View, Text, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import React from "react";
import Button from "../../../components/Button";
import EmailIcon from "../../../assets/auth/email";
import { colors, fonts, sizes } from "../../../utils/theme";
import { useNavigation, useRoute } from "@react-navigation/native";

export const SuccessScreen = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const details = route.params?.details;

  const doSubmit = async () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "AuthStack" }],
    });
    navigation.navigate("AuthStack", {
      screen: details.nextScreen,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.successContent}>
        {/* <View style={styles.successIcon}> */}
        <EmailIcon />
        {/* </View> */}

        <Text style={styles.successTitle}>Stay in the Loop!</Text>
        <Text style={styles.successSubtitle}>
          Get ready to be the first to know about all the cool stuff happening
          at Squareme! From new features and product updates to exclusive offers
          and insider tips, we’ll make sure you’re always ahead of the curve.
          Excited to stay connected? Just hit the button below and let us keep
          you in the know!
        </Text>
      </View>

      <View style={styles.footer}>
        <Button
          btnTxt="Yes, please"
          onPress={() =>
            navigation.navigate("AuthStack", {
              screen: "AddEmail",
            })
          }
        />
        <Text style={[styles.successSubtitle, { marginTop: sizes.md }]}>
          No, thank you
        </Text>
      </View>
    </View>
  );
};
export default SuccessScreen;
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

  // Success Screen Styles
  successContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  successIcon: {
    marginBottom: 40,
  },
  successCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  successTitle: {
    fontSize: sizes.lg,
    fontFamily: fonts.semiBold,
    color: colors.blue[90],
    marginBottom: sizes.sm,
    textAlign: "center",
  },
  successSubtitle: {
    fontSize: sizes.md,
    fontFamily: fonts.regular,
    color: colors.gray[100],
    textAlign: "center",
    lineHeight: 24,
  },
  continueButton: {
    backgroundColor: colors.blue[90],
    borderRadius: sizes.sm,
    paddingVertical: sizes.md,
    marginHorizontal: sizes.lg,
    marginBottom: sizes["3xl"],
    alignItems: "center",
  },
  continueButtonText: {
    color: colors.white[100],
    fontSize: sizes.md,
    fontWeight: "600",
  },
  footer: {
    paddingHorizontal: sizes.lg,
    paddingBottom: sizes["3xl"],
  },
});
