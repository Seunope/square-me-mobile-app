import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function WalletCard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>Wallet Balance</Text>
        <TouchableOpacity>
          <Text style={styles.historyLink}>Transaction History</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.balance}>NGN 500,000.00</Text>

      <View style={styles.footer}>
        <Text style={styles.squaremeTag}>Squareme tag: @davidoloye22</Text>
        <TouchableOpacity>
          <Icon name="content-copy" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1a237e",
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
    color: "white",
    fontSize: 14,
    opacity: 0.8,
  },
  historyLink: {
    color: "white",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  balance: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  squaremeTag: {
    color: "white",
    fontSize: 14,
    opacity: 0.8,
  },
});
