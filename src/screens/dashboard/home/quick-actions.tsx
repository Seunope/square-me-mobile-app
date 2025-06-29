import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { colors, fonts, sizes } from "../../../utils/theme";
import CardsIcon from "../../../assets/dashboard/quick-actions/cards";
import WithdrawIcon from "../../../assets/dashboard/quick-actions/withdraw";
import PayBillsIcon from "../../../assets/dashboard/quick-actions/pay-bills";
import FundWalletIcon from "../../../assets/dashboard/quick-actions/fund-wallet";
import SquareMePosIcon from "../../../assets/dashboard/quick-actions/square-me-pos";

const quickActions = [
  { id: 1, title: "Fund Wallet", icon: <FundWalletIcon /> },
  { id: 2, title: "Withdraw", icon: <WithdrawIcon /> },
  { id: 3, title: "Pay Bills", icon: <PayBillsIcon /> },
  { id: 4, title: "Cards", icon: <CardsIcon /> },
  { id: 5, title: "Squareme Pos", icon: <SquareMePosIcon /> },
];

export default function QuickActions() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Quick Actions</Text>
        <TouchableOpacity>
          <Text style={styles.seeMore}>See more</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.actionsContainer}
      >
        {quickActions.map((action) => (
          <TouchableOpacity key={action.id} style={styles.actionItem}>
            <View style={styles.iconContainer}>{action.icon}</View>
            <Text style={styles.actionText}>{action.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: sizes.md,
  },
  title: {
    fontSize: sizes.md,
    fontFamily: fonts.medium,
    color: colors.black[100],
  },
  seeMore: {
    fontSize: sizes.sm,
    fontFamily: fonts.regular,
    color: colors.purple[100],
  },
  actionsContainer: {
    flexDirection: "row",
  },
  actionItem: {
    alignItems: "center",
    marginRight: sizes.lg,
    width: sizes["4xl"],
    backgroundColor: colors.gray[70],
  },
  iconContainer: {
    width: sizes["3xl"],
    height: sizes["3xl"],
    borderRadius: sizes["2xs"],
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
  },
  actionText: {
    fontSize: sizes.xs,
    fontFamily: fonts.regular,
    textAlign: "center",
    color: colors.black[100],
    lineHeight: 16,
  },
});
