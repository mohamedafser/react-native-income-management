import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Settings from "../screens/Settings";
import Header from "../default/Header";
const SettingsScreen = {
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }: any) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Settings" />
      };
    }
  }
};

const SettingsStuck = createStackNavigator(SettingsScreen, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#fff",
      height: 80
    },
    headerTitleAlign: "center"
  }
});

export default SettingsStuck;
