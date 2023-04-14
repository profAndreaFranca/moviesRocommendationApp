import React from "react";
import HomeScreen from "../screens/Home";
import TabNavigator from "./TabNavigator";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Movies" component={TabNavigator} />
    </Stack.Navigator>
  );
}