import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

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
          <View style={styles.piggyBank}>
            <View style={styles.coin} />
            <View style={styles.piggy} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, styles.paymentsCard]}>
          <Text style={styles.cardTitle}>Speed up your{"\n"}payments</Text>
          <View style={styles.coinStack}>
            <View style={[styles.stackCoin, { backgroundColor: "#FF9500" }]} />
            <View style={[styles.stackCoin, { backgroundColor: "#34C759" }]} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginBottom: 16,
  },
  cardsContainer: {
    flexDirection: "row",
  },
  card: {
    width: 200,
    height: 120,
    borderRadius: 16,
    padding: 16,
    marginRight: 16,
    justifyContent: "space-between",
  },
  savingsCard: {
    backgroundColor: "#F5F5F5",
  },
  paymentsCard: {
    backgroundColor: "#E3F2FD",
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
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
