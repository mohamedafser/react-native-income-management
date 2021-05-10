import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button } from "react-native-elements";
import { globalStyles } from "../styles/globelStyles";
type InputState = {
  userDetails: string;
  password: string;
  errorMessage: string;
};
type Iprops = {
  navigation: any;
};
const userAccesDetails = [
  {
    userDetails: "Hyser",
    password: "12345"
  }
];
const Login = (props: Iprops) => {
  const { navigation } = props;
  // console.log(
  //   "navigation from login screen",
  //   navigation.state.params && navigation.state.params.userName
  // );
  useEffect(() => {
    const genetrateDatas = [
      ...userAccesDetails,
      {
        userDetails:
          navigation.state.params && navigation.state.params.userName,
        password: navigation.state.params && navigation.state.params.password
      }
    ];
    // console.log("genetrateDatas", genetrateDatas);
  }, [navigation.state]);
  const [state, setState] = useState<InputState>({
    userDetails: "",
    password: "",
    errorMessage: ""
  });
  const handleUserDetails = (value: any) => {
    setState((prevState: any) => {
      return { ...prevState, userDetails: value };
    });
  };
  const handlePassword = (value: any) => {
    setState((prevState: any) => {
      return { ...prevState, password: value };
    });
  };
  const handeleLogin = async () => {
    if (
      state.userDetails !== userAccesDetails[0].userDetails &&
      state.password !== userAccesDetails[0].password
    ) {
      setState((prevState: any) => {
        return { ...prevState, errorMessage: "please enter valid info" };
      });
    } else {
      await AsyncStorage.setItem("userToken", `${state}`);
      navigation.navigate("App");
    }
  };
  const handeleSignup = () => {
    navigation.navigate("Signup");
  };
  return (
    <View style={styles.loginRootContainer}>
      <View style={styles.loginContainer}>
        <View style={globalStyles.inputContainer}>
          <Input
            placeholder="Enter user details"
            leftIcon={<Icon name="user" size={24} color="black" />}
            onChangeText={handleUserDetails}
            inputStyle={globalStyles.inputInner}
          />
        </View>
        <View style={globalStyles.inputContainer}>
          <Input
            placeholder="Enter Password"
            leftIcon={<Icon name="lock" size={24} color="black" />}
            secureTextEntry={true}
            onChangeText={handlePassword}
            inputStyle={globalStyles.inputInner}
          />
        </View>
        <View>
          <Text>{state.errorMessage}</Text>
        </View>
        <View style={styles.submitButton}>
          <Button title="Submit" type="solid" onPress={handeleLogin} />
        </View>
        <TouchableOpacity onPress={handeleSignup}>
          <View style={styles.signupContainer}>
            <Text>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

export const styles = StyleSheet.create({
  loginRootContainer: {
    flex: 1,
    justifyContent: "center"
  },
  loginContainer: {
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    padding: 20,
    marginHorizontal: 15,
    borderRadius: 10
  },
  submitButton: {
    justifyContent: "space-around"
  },
  signupContainer: {
    alignItems: "center",
    marginTop: 20
  }
});
