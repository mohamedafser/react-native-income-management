import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Clients from "../screens/Clients";
import Header from "../default/Header";
const ClientsScreen = {
  Clients: {
    screen: Clients,
    navigationOptions: ({ navigation }: any) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Clients" />
      };
    }
  }
};

const ClientsStuck = createStackNavigator(ClientsScreen, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#fff",
      height: 80
    },
    headerTitleAlign: "center"
  }
});

export default ClientsStuck;
