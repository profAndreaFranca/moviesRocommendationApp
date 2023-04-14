import React from "react";
import PopularScreen from "../screens/Popular";
import RecommendationScreen from "../screens/Recommendation";
import LikedScreen from "../screens/Liked";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Popular" component={PopularScreen} />
      <Tab.Screen name="Recommended" component={RecommendationScreen} />
      <Tab.Screen name="Liked" component={LikedScreen} />
    </Tab.Navigator>
  );
}