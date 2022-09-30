import Header from "./components/layout/Header";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, VStack, Text, Box } from "native-base";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <NativeBaseProvider>
      <Header />
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}
