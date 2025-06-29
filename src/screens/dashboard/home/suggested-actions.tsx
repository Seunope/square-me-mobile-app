import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import PigBankIcon from "../../../assets/dashboard/pig-bank";
import { colors, fonts, sizes } from "../../../utils/theme";
import { moderateScale } from "../../../utils/scaling";

export default function SuggestedActions() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suggested actions</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.cardsContainer}
      >
        <TouchableOpacity style={[styles.card, styles.savingsCard]}>
          <Text style={styles.cardTitle}>
            Earn up to 14% interest{"\n"}on your locked funds
          </Text>
          <PigBankIcon />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, styles.paymentsCard]}>
          <Text style={styles.cardTitle}>Speed up your{"\n"}payments</Text>
          <PigBankIcon />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: sizes["2xl"],
  },
  title: {
    fontSize: sizes.md,
    fontFamily: fonts.medium,
    color: colors.black[100],
    marginBottom: sizes.md,
  },
  cardsContainer: {
    flexDirection: "row",
  },
  card: {
    width: moderateScale(200),
    height: "auto",
    borderRadius: sizes.md,
    padding: sizes.md,
    marginRight: sizes.md,
    justifyContent: "space-between",
  },
  savingsCard: {
    backgroundColor: "#F5F5F5",
  },
  paymentsCard: {
    backgroundColor: "#E3F2FD",
  },
  cardTitle: {
    fontSize: sizes.sm,
    fontFamily: fonts.medium,
    color: colors.blue[100],
    lineHeight: 20,
  },
  piggyBank: {
    alignSelf: "flex-end",
    alignItems: "center",
  },
  coin: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#FFD700",
    marginBottom: 4,
  },
  piggy: {
    width: 40,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#FF69B4",
  },
  coinStack: {
    alignSelf: "flex-end",
    alignItems: "center",
  },
  stackCoin: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginBottom: 4,
  },
});
