import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const quickActions = [
  { id: 1, title: "Fund Wallet", icon: "account-balance-wallet" },
  { id: 2, title: "Withdraw", icon: "trending-up" },
  { id: 3, title: "Pay Bills", icon: "receipt" },
  { id: 4, title: "Cards", icon: "credit-card" },
  { id: 5, title: "Squareme Pos", icon: "point-of-sale" },
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
            <View style={styles.iconContainer}>
              <Icon name={action.icon} size={24} color="#007AFF" />
            </View>
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
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  seeMore: {
    fontSize: 14,
    color: "#007AFF",
  },
  actionsContainer: {
    flexDirection: "row",
  },
  actionItem: {
    alignItems: "center",
    marginRight: 20,
    width: 70,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  actionText: {
    fontSize: 12,
    textAlign: "center",
    color: "#000",
    lineHeight: 16,
  },
});
