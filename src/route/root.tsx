import React from "react";
import AuthStack from "./auth";
import Onboarding from "../screens/onboarding";
// import MoreStack from "./more";
// import OrderStack from "./retail/order";
// import DashboardTab from "./retail/dashboard";
// import Welcome from "../screens/auth/welcome";
// import DashboardDiver from "./driver/dashboard";
// import DashboardCAA from "../screens/caa/dashboard";
// import WholeSaleOrderStack from "./wholesale/order";
// import DriverOrderStack from "./driver/order";
// import DashboardTabWholeSaler from "./wholesale/dashboard";
import { NavigationContainer } from "@react-navigation/native";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppStateProvider } from "../utils/context/app_state";

type RootStackParamList = {
  AuthStack: undefined;
  MoreStack: undefined;
  Onboarding: undefined;
  OrderStack: undefined;
  DashboardTab: undefined;
  DashboardCAA: undefined;
  DashboardDiver: undefined;
  DriverOrderStack: undefined;
  WholeSaleOrderStack: undefined;
  DashboardTabWholeSaler: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const RootStackScreen = ({ ...props }) => {
  // console.log("props", props);
  return (
    <RootStack.Navigator
      initialRouteName="AuthStack"
      // initialRouteName={props.isLogin ? props.userRoute : "Onboarding"}
    >
      <RootStack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="AuthStack"
        component={AuthStack}
        options={{
          headerShown: false,
        }}
      />
      {/* <RootStack.Screen
        name="MoreStack"
        component={MoreStack}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="OrderStack"
        component={OrderStack}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="DashboardTab"
        component={DashboardTab}
        options={{
          headerShown: false,
        }}
      />

      <RootStack.Screen
        name="DashboardTabWholeSaler"
        component={DashboardTabWholeSaler}
        options={{
          headerShown: false,
        }}
      />

      <RootStack.Screen
        name="WholeSaleOrderStack"
        component={WholeSaleOrderStack}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="DriverOrderStack"
        component={DriverOrderStack}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="DashboardCAA"
        component={DashboardCAA}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="DashboardDiver"
        component={DashboardDiver}
        options={{
          headerShown: false,
        }}
      /> */}
    </RootStack.Navigator>
  );
};

// const Navigation = createStaticNavigation(RootStackScreen);
export default ({ ...props }) => {
  return (
    <AppStateProvider>
      <NavigationContainer>
        <RootStackScreen isLogin={props.isLogin} userRoute={props.userRoute} />
      </NavigationContainer>
    </AppStateProvider>
  );
};
