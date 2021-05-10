import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import Card from "../../default/Card";
// import { Card, ListItem, Button, Icon } from "react-native-elements";
import { format } from "date-fns";
type Iprops = {
  navigation: any;
};
const UpcomingExpenses = ({ navigation }: any) => {
  const { state: navigationData } = navigation;
  // const { navigation } = props;
  console.log("navigation current datas", navigationData.params);
  return (
    <View>
      <Text>Upcoming Expenses</Text>
      <Card>
        <View>
          <View>
            <Text>Delete Btn</Text>
          </View>
          <View>
            <Text>{navigationData.params.amount}</Text>
          </View>
          <View>
            <Text>Edit Btn</Text>
          </View>
          <View>
            <View>
              <Text>Icon</Text>
              <Text>
                {format(
                  new Date(navigationData.params.dueDate),
                  "MMMM dd, yyyy "
                )}
              </Text>
              <Text>Repeat</Text>
            </View>
            <View>
              <Text>Icon</Text>
              <Text>{navigationData.params.description}</Text>
            </View>
            <View>
              <Text>Icon</Text>
              <Text>{navigationData.params.selectClient}</Text>
            </View>
            <View>
              <Text>Icon</Text>
              <Text>{navigationData.params.incomeSource}</Text>
            </View>
          </View>
        </View>
        <View>
          <Text>Make it paid</Text>
        </View>
      </Card>
    </View>
  );
};

export default UpcomingExpenses;
