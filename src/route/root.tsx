import React from "react";
import AuthStack from "./auth";
import DashboardTab from "./dashboard";
import Onboarding from "../screens/onboarding";
import { NavigationContainer } from "@react-navigation/native";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppStateProvider } from "../utils/context/app_state";

type RootStackParamList = {
  AuthStack: undefined;
  MoreStack: undefined;
  Onboarding: undefined;
  DashboardTab: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const RootStackScreen = ({ ...props }) => {
  // console.log("props", props);
  return (
    <RootStack.Navigator
      initialRouteName="Onboarding"
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
      <RootStack.Screen
        name="DashboardTab"
        component={DashboardTab}
        options={{
          headerShown: false,
        }}
      />
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
