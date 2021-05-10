import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Summary = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.singleItemContainer}>
        <Text style={styles.title}>This Month</Text>
        <Text style={styles.count}>0</Text>
      </View>
      <View style={styles.singleItemContainer}>
        <Text style={styles.title}>Upcoming</Text>
        <Text style={styles.count}>0</Text>
      </View>
      <View style={styles.singleItemContainer}>
        <Text style={styles.title}>Overdue</Text>
        <Text style={styles.count}>0</Text>
      </View>
      <View style={styles.singleItemContainer}>
        <Text style={styles.title}>paid</Text>
        <Text style={styles.count}>0</Text>
      </View>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#ddd",
    paddingVertical: 10,
    marginBottom: 10
  },
  singleItemContainer: {
    alignItems: "center"
  },
  title: {
    fontSize: 12,
    textTransform: "uppercase"
  },
  count: {
    fontSize: 14,
    fontWeight: "bold"
  }
});
