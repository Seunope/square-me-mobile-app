import { Provider } from "react-redux";
import RootNavigation from "./src/route/root";
import { store } from "./src/utils/redux/store";
import React, { useEffect, useState } from "react";
import AppStorage from "./src/utils/services/AppStorage";
import { StyleSheet, Text, useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
  };

  return (
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
