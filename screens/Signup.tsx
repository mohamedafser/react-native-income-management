import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button } from "react-native-elements";
import { styles } from "./Login";
type Iprops = {
  navigation: any;
};
type InitialState = {
  userName: string;
  password: string;
  confirmPassword: string;
  errorMessage: string;
};
const Signup = (props: Iprops) => {
  const { navigation } = props;
  const [state, setstate] = useState<InitialState>({
    userName: "",
    password: "",
    confirmPassword: "",
    errorMessage: ""
  });
  // console.log("navigation", userAccesDetails);
  const handleUserName = (value: any) => {
    setstate((prevState: any) => {
      return { ...prevState, userName: value };
    });
  };
  const handlePassword = (value: any) => {
    setstate((prevState: any) => {
      return { ...prevState, password: value };
    });
  };
  const handleConfirmPassword = (value: any) => {
    setstate((prevState: any) => {
      return { ...prevState, confirmPassword: value };
    });
  };
  const handeleLogin = () => {
    if (
      state.userName !== "" &&
      state.password !== "" &&
      state.confirmPassword !== ""
    ) {
      setstate((prevState: any) => {
        return { ...prevState, errorMessage: "" };
      });
      navigation.navigate("Login", state);
    } else {
      setstate((prevState: any) => {
        return { ...prevState, errorMessage: "Please enter required Fields" };
      });
    }
  };
  const handeleSignup = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.loginRootContainer}>
      <View style={styles.loginContainer}>
        <View style={styles.inputContainer}>
          <Input
            placeholder="Enter user name"
            leftIcon={<Icon name="user" size={24} color="black" />}
            onChangeText={handleUserName}
            inputStyle={styles.inputInner}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            placeholder="Enter Password"
            leftIcon={<Icon name="lock" size={24} color="black" />}
            secureTextEntry={true}
            onChangeText={handlePassword}
            inputStyle={styles.inputInner}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            placeholder="Confirm Password"
            leftIcon={<Icon name="lock" size={24} color="black" />}
            secureTextEntry={true}
            onChangeText={handleConfirmPassword}
            inputStyle={styles.inputInner}
          />
        </View>
        <View>
          <Text>{state.errorMessage}</Text>
        </View>
        <View style={styles.submitButton}>
          <Button title="Sign up" type="solid" onPress={handeleLogin} />
        </View>
        <TouchableOpacity onPress={handeleSignup}>
          <View style={styles.signupContainer}>
            <Text>Login Up</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
