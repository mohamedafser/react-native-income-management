import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { globalStyles } from "./styles/globelStyles";
import Navigator from "./drawer/Drawer";
import { useHomeScreen } from "./screens/home/useHomeScreen";

export default function App() {
  const handleCloseKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleCloseKeyboard}>
      <View style={globalStyles.middleContent}>
        <Navigator />
      </View>
    </TouchableWithoutFeedback>
  );
}
