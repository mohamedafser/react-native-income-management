import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Logout from "../screens/Logout";
import Header from "../default/Header";
const LogoutScreen = {
  Logout: {
    screen: Logout,
    navigationOptions: ({ navigation }: any) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Logout" />
      };
    }
  }
};

const LogoutStuck = createStackNavigator(LogoutScreen, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#fff",
      height: 80
    },
    headerTitleAlign: "center"
  }
});

export default LogoutStuck;
