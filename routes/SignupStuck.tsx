import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createSwitchNavigator } from "react-navigation";
import Signup from "../screens/Signup";
import Header from "../default/Header";
const SignupScreen = {
  Signup: {
    screen: Signup,
    navigationOptions: ({ navigation }: any) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Signup" />,
        drawerLabel: () => null
      };
    }
  }
};

const SignupStuck = createSwitchNavigator(SignupScreen, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#fff",
      height: 80
    },
    headerTitleAlign: "center"
  }
});

export default SignupStuck;
