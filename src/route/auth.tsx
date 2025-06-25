import React from "react";
import SignUp from "../screens/auth/signup";
// import OtpVerify from "../screens/auth/register/verify-otp";
// import ShopImage from "../screens/auth/register/shop-image";
// import DataPolicy from "../screens/auth/register/data-policy";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../utils/theme";
// import Acquisition from "../screens/auth/register/user-acquisition-biz";
// import ResetPassword from "../screens/auth/reset-password/reset-password";
// import ForgotPassword from "../screens/auth/reset-password/forgot-password";
// // import VerifyPasswordRequest from "../screens/auth/reset-password/verify-reset-request";
// import AcquisitionPersonal from "../screens/auth/register/user-acquisition-personal";

// import ForgotPassword from '../screens/auth/forget-password/forgot-pwd';

export type AuthStackParams = {
  LogIn: undefined;
  SignUp: undefined;
  OtpVerify: undefined;
  ShopImage: undefined;
  DataPolicy: undefined;
  Acquisition: undefined;
  SuccessScreen: undefined;
  ResetPassword: undefined;
  ForgotPassword: undefined;
  AcquisitionPersonal: undefined;
  // VerifyPasswordRequest: undefined;
};
const AuthStack = createNativeStackNavigator<AuthStackParams>();
export default () => (
  <AuthStack.Navigator
    // initialRouteName="Acquisition"
    initialRouteName="SignUp"
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
      //   cardOverlayEnabled: true,
      //   cardStyle: { backgroundColor: "transparent" },
    }}
  >
    <AuthStack.Screen
      name={"SignUp"}
      component={SignUp}
      options={{
        headerTitle: "",
        headerTransparent: true,
        headerTintColor: colors.black[100],
      }}
    />

    {/* <AuthStack.Screen
      name="DataPolicy"
      component={DataPolicy}
      options={{
        headerTitle: "",
        headerTransparent: true,
        headerTintColor: colors.black[100],
      }}
    />

    <AuthStack.Screen
      name="ShopImage"
      component={ShopImage}
      options={{
        headerTitle: "",
        headerTransparent: true,
        headerTintColor: colors.black[100],
      }}
    />

    <AuthStack.Screen
      name="Acquisition"
      component={Acquisition}
      options={{
        headerTitle: "",
        headerTransparent: true,
        headerTintColor: colors.black[100],
      }}
    />

    <AuthStack.Screen
      name="AcquisitionPersonal"
      component={AcquisitionPersonal}
      options={{
        headerTitle: "",
        headerTransparent: true,
        headerTintColor: colors.black[100],
      }}
    />

    <AuthStack.Screen
      name="OtpVerify"
      component={OtpVerify}
      options={{
        headerTitle: "",
        headerTransparent: true,
        headerTintColor: colors.black[100],
      }}
    />

    <AuthStack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
      options={{
        headerTitle: "",
        headerTransparent: true,
        headerTintColor: colors.black[100],
      }}
    />

    {/* <AuthStack.Screen
      name="VerifyPasswordRequest"
      component={VerifyPasswordRequest}
      options={{
        headerTitle: "",
        headerTransparent: true,
        headerTintColor: colors.black[100],
      }}
    /> */}
  </AuthStack.Navigator>
);
