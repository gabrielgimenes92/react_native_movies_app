import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, VStack, Text, Box } from "native-base";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Header />
        <Main />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
