import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Support from "../screens/Support";
import Header from "../default/Header";
const SupportScreen = {
  Support: {
    screen: Support,
    navigationOptions: ({ navigation }: any) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Support" />
      };
    }
  }
};

const SupportStuck = createStackNavigator(SupportScreen, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#fff",
      height: 80
    },
    headerTitleAlign: "center"
  }
});

export default SupportStuck;
