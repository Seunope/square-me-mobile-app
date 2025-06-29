import React from "react";
import Header from "./header";
import WalletCard from "./wallet-card";
import QuickActions from "./quick-actions";
import TransactionsList from "./transactions-list";
import SuggestedActions from "./suggested-actions";
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.content}>
        <Header />
        <WalletCard />
        <QuickActions />
        <TransactionsList />
        <SuggestedActions />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
