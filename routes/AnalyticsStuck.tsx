import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Analytics from "../screens/Analytics";
import Header from "../default/Header";
const AnlyticsScreen = {
  Analytics: {
    screen: Analytics,
    navigationOptions: ({ navigation }: any) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Analytics" />
      };
    }
  }
};

const AnalyticsStuck = createStackNavigator(AnlyticsScreen, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#fff",
      height: 80
    },
    headerTitleAlign: "center"
  }
});

export default AnalyticsStuck;
