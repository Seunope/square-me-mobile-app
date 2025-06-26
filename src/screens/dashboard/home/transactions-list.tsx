import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Transactions</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>

      {transactions.map((transaction) => (
        <View key={transaction.id} style={styles.transactionItem}>
          <View style={styles.iconContainer}>
            <Icon name="account-balance" size={20} color="#FF9500" />
          </View>

          <View style={styles.transactionInfo}>
            <Text style={styles.transactionType}>{transaction.type}</Text>
            <Text style={styles.transactionDate}>{transaction.date}</Text>
          </View>

          <View style={styles.amountContainer}>
            <Text
              style={[
                styles.amount,
                { color: transaction.isPositive ? "#34C759" : "#000" },
              ]}
            >
              {transaction.amount}
            </Text>
            <Text
              style={[
                styles.status,
                {
                  color:
                    transaction.status === "Successful" ? "#34C759" : "#FF3B30",
                },
              ]}
            >
              {transaction.status}
            </Text>
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.seeMoreButton}>
        <Text style={styles.seeMoreText}>See more</Text>
        <Icon name="keyboard-arrow-down" size={20} color="#007AFF" />
      </TouchableOpacity>
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
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  viewAll: {
    fontSize: 14,
    color: "#007AFF",
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFF3E0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionType: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: 14,
    color: "#666",
  },
  amountContainer: {
    alignItems: "flex-end",
  },
  amount: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  status: {
    fontSize: 12,
    fontWeight: "500",
  },
  seeMoreButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  seeMoreText: {
    fontSize: 14,
    color: "#007AFF",
    marginRight: 4,
  },
});
