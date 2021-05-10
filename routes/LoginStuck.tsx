import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Login from "../screens/Login";
import Logout from "../screens/Logout";
import Home from "../screens/home/Home";
import UpcomingExpenses from "../screens/home/UpcomingExpenses";
import PaidExpenses from "../screens/home/PaidExpenses";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import Header from "../default/Header";
const HomeScreens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }: any) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Home" />
      };
    }
  },
  UpcomingExpenses: {
    screen: UpcomingExpenses
  },
  PaidExpenses: {
    screen: PaidExpenses
  }
};
const LoginScreen = {
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  }
};
const AppStack = createStackNavigator(HomeScreens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#fff",
      height: 80
    },
    headerTitleAlign: "center"
  }
});
const AuthStack = createStackNavigator(LoginScreen);
const LoginStuck = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
export default LoginStuck;
