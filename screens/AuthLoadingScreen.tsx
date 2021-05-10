import React from "react";
import { View, ActivityIndicator, StatusBar, AsyncStorage } from "react-native";

type Iprops = {
  navigation: any;
};
const AuthLoadingScreen = (props: Iprops) => {
  const { navigation } = props;
  const checkAuthorized = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    navigation.navigate(userToken ? "App" : "Auth");
  };
  checkAuthorized();
  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};

export default AuthLoadingScreen;
