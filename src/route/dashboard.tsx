import React from "react";
import { View, Text } from "react-native";
import HomeIcon from "../assets/dashboard/bottom/home";
import MoreIcon from "../assets/dashboard/bottom/more";
import ProfileIcon from "../assets/dashboard/bottom/profile";
import PaymentsIcon from "../assets/dashboard/bottom/payment";

import HomeScreen from "../screens/dashboard/home/home";
import Icon from "react-native-vector-icons/MaterialIcons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../utils/theme";

const Tab = createBottomTabNavigator();

// Placeholder screens for other tabs
const PaymentsScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Payments Screen</Text>
  </View>
);

const MoreScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>More Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Profile Screen</Text>
  </View>
);

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = <HomeIcon size={size} color={color} />;
          } else if (route.name === "Payments") {
            iconName = <PaymentsIcon size={size} color={color} />;
          } else if (route.name === "More") {
            iconName = <MoreIcon size={size} color={color} />;
          } else if (route.name === "Profile") {
            iconName = <ProfileIcon size={size} color={color} />;
          }

          return iconName;
        },
        tabBarActiveTintColor: colors.blue[100],
        tabBarInactiveTintColor: colors.gray[60],
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "#E5E5E7",
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Payments" component={PaymentsScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
