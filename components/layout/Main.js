import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View } from "react-native";
import Movies from "./Movies";
import Search from "./Search";
import TV from "./TV";

const Tab = createMaterialTopTabNavigator();

function MoviesScreen(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Movies />
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Search />
    </View>
  );
}

function TVScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TV />
    </View>
  );
}

const Main = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Movies"
        component={MoviesScreen}
        /* movies={props.movies} */
      />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="TV" component={TVScreen} />
    </Tab.Navigator>
  );
};

export default Main;
