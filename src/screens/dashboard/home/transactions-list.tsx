import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors, fonts, sizes } from "../../../utils/theme";
import TransactionIcon from "../../../assets/dashboard/transaction";
import ArrowDownIcon from "../../../assets/dashboard/arrow-head-down";
import { moderateScale } from "../../../utils/scaling";

const transactions = [
  {
    id: 1,
    type: "Withdrawal to bank",
    date: "August 07, 06:03 AM",
    amount: "NGN 5000",
    status: "Successful",
    isPositive: false,
  },
  {
    id: 2,
    type: "Withdrawal to bank",
    date: "August 07, 06:03 AM",
    amount: "+ NGN 5000",
    status: "Failed",
    isPositive: true,
  },
];

export default function TransactionsList() {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Transactions</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.shadowContainer}>
          {transactions.map((transaction) => (
            <View key={transaction.id} style={styles.transactionItem}>
              <View style={styles.iconContainer}>
                <TransactionIcon />
              </View>

              <View style={styles.transactionInfo}>
                <Text style={styles.transactionType}>{transaction.type}</Text>
                <Text style={styles.transactionDate}>{transaction.date}</Text>
              </View>

              <View style={styles.amountContainer}>
                <Text
                  style={[
                    styles.amount,
                    {
                      color: transaction.isPositive
                        ? colors.green[100]
                        : colors.black[100],
                    },
                  ]}
                >
                  {transaction.amount}
                </Text>
                <Text
                  style={[
                    styles.status,
                    {
                      color:
                        transaction.status === "Successful"
                          ? colors.green[100]
                          : colors.red[100],
                    },
                  ]}
                >
                  {transaction.status}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.seeMoreButton}>
          <Text style={styles.seeMoreText}>
            See more <ArrowDownIcon />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowContainer: {
    marginBottom: sizes.xl,
    paddingBottom: sizes["4xl"],
    // iOS shadow - bottom only
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.08,
        shadowRadius: 12,
      },
      android: {
        // shadowOpacity: 0.02,
        // Create bottom shadow using border and background
        backgroundColor: "rgba(0, 0, 0, 0.09)",
        borderRadius: 32,
        paddingBottom: 2,
        elevation: 2,
      },
    }),
    overflow: "visible",
  },
  container: {
    marginBottom: 24,
    //
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: sizes.md,
    fontFamily: fonts.medium,
    color: colors.black[100],
  },
  viewAll: {
    fontSize: sizes.sm,
    fontFamily: fonts.regular,
    color: colors.purple[100],
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: sizes.md,
    paddingVertical: sizes.md,
    paddingHorizontal: sizes.md,
    backgroundColor: "white",
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#FFF3E0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionType: {
    fontSize: sizes.md,
    fontFamily: fonts.regular,
    color: colors.black[100],
    marginBottom: sizes["2xs"],
  },
  transactionDate: {
    fontSize: sizes.sm,
    fontFamily: fonts.regular,
    color: colors.gray[60],
  },
  amountContainer: {
    alignItems: "flex-end",
  },
  amount: {
    fontSize: sizes.md,
    fontFamily: fonts.regular,
    marginBottom: sizes["2xs"],
  },
  status: {
    fontSize: sizes.sm,
    fontFamily: fonts.regular,
  },
  seeMoreButton: {
    alignItems: "center",
  },
  seeMoreText: {
    fontSize: sizes.sm,
    fontFamily: fonts.medium,
    color: colors.purple[100],
    marginRight: 4,
    borderRadius: sizes.md,
    padding: sizes["2xs"],
    paddingHorizontal: sizes.xs,
    backgroundColor: colors.white[100],
    textAlign: "center",
    borderWidth: 1,
    borderColor: colors.gray[90],
    marginTop: moderateScale(-40),
  },
});
