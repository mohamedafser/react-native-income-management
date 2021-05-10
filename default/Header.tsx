import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Iprops = {
  navigation: any;
  title: string;
};
const Header = (props: Iprops) => {
  const { navigation, title } = props;
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    // <ImageBackground
    //   source={require("../assets/game_bg.png")}
    //   style={styles.header}
    // >
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        {/* <Image
          source={require("../assets/heart_logo.png")}
          style={styles.headerImage}
        /> */}
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
    // </ImageBackground>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  icon: {
    position: "absolute",
    left: -70
  },
  headerImage: {
    width: 25,
    height: 25,
    marginHorizontal: 15
  },
  headerTitle: {
    flexDirection: "row"
  }
});
