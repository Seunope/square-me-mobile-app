import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import EyeIcon from "../../../assets/dashboard/eye";
import CopyIcon from "../../../assets/dashboard/copy";
import { colors, fonts, sizes } from "../../../utils/theme";
import ArrowRightIcon from "../../../assets/dashboard/arrow-head-right";
import Utility from "../../../utils/utils";

export default function WalletCard() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <ImageBackground
      source={require("../../../assets/dashboard/wallet-bg.png")}
      style={styles.container}
      imageStyle={{ borderRadius: 16 }}
    >
      <View style={styles.header}>
        <Text style={styles.label}></Text>
        <TouchableOpacity>
          <Text style={styles.historyLink}>
            Transaction History <ArrowRightIcon />
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label} onPress={() => toggleVisibility()}>
        Wallet Balance <EyeIcon />
      </Text>
      <Text style={styles.balance}>
        {" "}
        {Utility.formatAmount(5000000, true, 2, !isVisible)}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.squaremeTag}>Squareme tag: @davidoloye22</Text>
        <TouchableOpacity>
          <CopyIcon />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue[100],
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  label: {
    color: colors.white[100],
    fontSize: sizes.sm,
    textAlign: "center",
    marginBottom: sizes.xs,
    fontFamily: fonts.regular,
    opacity: 0.8,
  },
  historyLink: {
    color: colors.white[100],
    fontSize: sizes.sm,
    borderRadius: sizes.md,
    backgroundColor: colors.blue[90],
    padding: sizes["2xs"],
    fontFamily: fonts.regular,
    paddingHorizontal: sizes.xs,
  },
  balance: {
    color: colors.white[100],
    fontSize: sizes.xl,
    textAlign: "center",
    fontFamily: fonts.medium,
    marginBottom: sizes.lg,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue[90],
  },
  squaremeTag: {
    color: colors.white[100],
    fontSize: sizes.sm,
    paddingRight: sizes.sm,
    fontFamily: fonts.regular,
    opacity: 0.8,
  },
});
