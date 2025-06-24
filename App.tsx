/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from "@react-native/new-app-screen";
import OnboardingSlider from "./src/screens/onboarding";
import { StatusBar, StyleSheet, useColorScheme, View } from "react-native";

function App() {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      {/* <NewAppScreen templateFileName="App.tsx" /> */}
      <OnboardingSlider />
      {/* Uncomment the line above to use the OnboardingSlider component */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
