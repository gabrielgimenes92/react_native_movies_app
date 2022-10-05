import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./Main.js";
import ShowCardDetail from "./ShowCardDetail.js";

/* function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
} */

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Main}
          options={{
            headerShown: false,
          }}
          /* navigation={navigation} */
        />
        <Stack.Screen name="Details" component={ShowCardDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;
