import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
// import { Ionicons } from "@expo/vector-icons";
import AccountIcon from "../../../assets/profile/account";
import BankIcon from "../../../assets/profile/bank";
import StatementIcon from "../../../assets/profile/statement";
import RewardIcon from "../../../assets/profile/reward";
import SecurityIcon from "../../../assets/profile/security";
import BadgesIcon from "../../../assets/profile/badges";
import HelpIcon from "../../../assets/profile/help";
import LogoOutIcon from "../../../assets/profile/logout";
import ChevronIcon from "../../../assets/profile/chevron-right";
import ChevronIcon2 from "../../../assets/profile/chevron-right2";
import { colors, fonts, sizes } from "../../../utils/theme";

const ProfileScreen = () => {
  const menuItems = [
    {
      id: 1,
      title: "Bank Account",
      icon: <AccountIcon />,
    },
    {
      id: 2,
      title: "Account Management",
      icon: <BankIcon />,
    },
    {
      id: 3,
      title: "Account Statement",
      icon: <StatementIcon />,
    },
    {
      id: 4,
      title: "Rewards",
      icon: <RewardIcon />,
    },
    {
      id: 5,
      title: "Badges",
      icon: <BadgesIcon />,
    },
    {
      id: 6,
      title: "Security",
      icon: <SecurityIcon />,
    },
    {
      id: 7,
      title: "Help & Support",
      icon: <HelpIcon />,
    },
  ];

  const handleMenuPress = (item) => {
    console.log(`Pressed ${item.title}`);
    // Handle navigation or action here
  };

  const handleLogout = () => {
    console.log("Logout pressed");
    // Handle logout logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Text style={styles.header}>Profile</Text>

        {/* User Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>David Oloye</Text>
            <Text style={styles.phoneNumber}>+2348088976</Text>
          </View>
          <View style={styles.tierBadge}>
            <Text style={styles.tierText}>TIER 2</Text>
          </View>
          <TouchableOpacity style={styles.chevronButton}>
            <ChevronIcon2 />
          </TouchableOpacity>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuItem}
              onPress={() => handleMenuPress(item)}
              activeOpacity={0.7}
            >
              <View style={styles.iconContainer}>{item.icon}</View>
              <Text style={styles.menuTitle}>{item.title}</Text>
              <ChevronIcon />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <LogoOutIcon />
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: sizes.lg,
    fontFamily: fonts.medium,
    color: "#1F2937",
    marginTop: sizes.xl,
    marginBottom: sizes.sm,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: sizes.lg,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[80],
    marginBottom: sizes.lg,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 2,
  },
  phoneNumber: {
    fontSize: 14,
    color: "#6B7280",
  },
  tierBadge: {
    backgroundColor: colors.gray[80],
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 10,
  },
  tierText: {
    fontSize: sizes.xs,
    fontFamily: fonts.regular,
    color: colors.green[90],
  },
  chevronButton: {
    padding: 5,
  },
  menuContainer: {
    gap: 5,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: sizes.sm,
    paddingHorizontal: sizes["3xs"],
    borderBottomWidth: 0.5,
    borderBottomColor: "#F3F4F6",
  },
  iconContainer: {
    // width: 40,
    // height: 40,
    // borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: sizes.md,
  },
  menuTitle: {
    flex: 1,
    fontSize: sizes.md,
    fontFamily: fonts.regular,
    color: "#1F2937",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    marginTop: 30,
    marginBottom: 40,
  },
  logoutText: {
    fontSize: sizes.md,
    fontFamily: fonts.medium,
    // fontWeight: "500",
    color: colors.red[100],
    marginLeft: 8,
  },
});

export default ProfileScreen;
