import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, VStack, Text, Box } from "native-base";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./components/layout/Header";
import MainStack from "./components/layout/MainStack";

export default function App() {
  return (
    <NativeBaseProvider>
      <Header />
      <MainStack />
    </NativeBaseProvider>
  );
}
