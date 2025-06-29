import React from "react";
import BVN from "../screens/auth/bvn";
import LogIn from "../screens/auth/login";
import SignUp from "../screens/auth/signup";
import EmailOptIn from "../screens/auth/email/opt-in";
import AddPin from "../screens/auth/pin/add-pin";
import ConfirmPin from "../screens/auth/pin/confirm-pin";
import VerifyPhone from "../screens/auth/verify-phone";
import SuccessScreen from "../screens/auth/success-screen";
import AddEmail from "../screens/auth/email/add-email";
import VerifyEmail from "../screens/auth/email/verify-email";
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
  VerifyPhone: undefined;
  SuccessScreen: undefined;
  AddPin: undefined;
  ConfirmPin: undefined;
  BVN: undefined;
  EmailOptIn: undefined;
  AddEmail: undefined;
  VerifyEmail: undefined;
};
const AuthStack = createNativeStackNavigator<AuthStackParams>();
export default () => (
  <AuthStack.Navigator
    // initialRouteName="Acquisition"
    initialRouteName="LogIn"
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
      //   cardOverlayEnabled: true,
      //   cardStyle: { backgroundColor: "transparent" },
    }}
  >
    <AuthStack.Screen
      name={"LogIn"}
      component={LogIn}
      options={{
        headerTitle: "",
        headerTransparent: true,
        headerTintColor: colors.black[100],
      }}
    />
    <AuthStack.Screen
      name={"SignUp"}
      component={SignUp}
      options={{
        headerTitle: "",
        headerTransparent: true,
        headerTintColor: colors.black[100],
      }}
    />

    <AuthStack.Screen
      name={"VerifyPhone"}
      component={VerifyPhone}
      options={{
        headerTitle: "",
        headerTransparent: true,
        headerTintColor: colors.black[100],
      }}
    />

    <AuthStack.Screen
      name={"SuccessScreen"}
      component={SuccessScreen}
      options={{
        headerTitle: "",
        headerTransparent: true,
        headerTintColor: colors.black[100],
      }}
    />

    <AuthStack.Screen
      name="AddPin"
      component={AddPin}
      options={{
        headerTitle: "",
        headerTransparent: true,
        headerTintColor: colors.black[100],
      }}
    />

    <AuthStack.Screen
      name="ConfirmPin"
      component={ConfirmPin}
      options={{
        headerTitle: "",
        headerTransparent: true,
        headerTintColor: colors.black[100],
      }}
    />

    <AuthStack.Screen
      name="BVN"
      component={BVN}
      options={{
        headerTitle: "",
        headerTransparent: true,
        headerTintColor: colors.black[100],
      }}
    />
    <AuthStack.Screen
      name="EmailOptIn"
      component={EmailOptIn}
      options={{
        headerTitle: "",
        headerTransparent: true,
        headerTintColor: colors.black[100],
      }}
    />

    <AuthStack.Screen
      name="AddEmail"
      component={AddEmail}
      options={{
        headerTitle: "",
        headerTransparent: true,
        headerTintColor: colors.black[100],
      }}
    />
    <AuthStack.Screen
      name="VerifyEmail"
      component={VerifyEmail}
      options={{
        headerTitle: "",
        headerTransparent: true,
        headerTintColor: colors.black[100],
      }}
    />

    {/* <AuthStack.Screen
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
