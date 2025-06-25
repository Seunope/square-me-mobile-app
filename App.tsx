import { NewAppScreen } from "@react-native/new-app-screen";
import OnboardingSlider from "./src/screens/onboarding";
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import RootNavigation from "./src/route/root";
import AppStorage from "./src/utils/services/AppStorage";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store } from "./src/utils/redux/store";

function App() {
  const isDarkMode = useColorScheme() === "dark";
  const [isLogin, setIsLogin] = useState<boolean | null>(null);
  const [userRoute, setUserRoute] = useState(null);

  useEffect(() => {
    initBoot();
  }, []);

  const initBoot = async () => {
    const val = await AppStorage.getToken();
    const userRole = await AppStorage.getData("role");
    setIsLogin(false);
    // if (val) {
    //   setIsLogin(true);
    //   if (userRole) {
    //     if (userRole === "Sales Representative") {
    //       setUserRoute("DashboardCAA");
    //     } else if (userRole === "wholesaler") {
    //       setUserRoute("DashboardTabWholeSaler"); //DashboardTabWholeSale
    //     } else if (userRole === "retailer") {
    //       setUserRoute("DashboardTab");
    //     }
    //   } else {
    //     setUserRoute("AuthStack");
    //   }
    // } else {
    //   setIsLogin(false);
    // }
  };

  return (
    // <View style={styles.container}>
    //   <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
    //   {/* <NewAppScreen templateFileName="App.tsx" /> */}
    //   <OnboardingSlider />
    //   {/* Uncomment the line above to use the OnboardingSlider component */}
    // </View>
    <SafeAreaProvider>
      <Provider store={store}>
        {isLogin !== null ? (
          <RootNavigation isLogin={isLogin} userRoute={userRoute} />
        ) : (
          <Text>Error occurred....</Text>
        )}
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
