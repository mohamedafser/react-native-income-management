import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import format from "date-fns/format";
import Card from "../../default/Card";
import { HomeContext } from "./Home";
const UpcomingExpensesSummary = ({ navigation }: any) => {
  const { state, dispatch }: any = useContext(HomeContext);

  return (
    <View>
      <FlatList
        keyExtractor={(item: any) => item.id.toString()}
        data={state.newExpenses}
        renderItem={({ item }: any) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("UpcomingExpenses", item)}
            >
              <Card>
                <View>
                  <View>
                    <Text>{format(new Date(item.dueDate), "dd")}</Text>
                    <Text>{format(new Date(item.dueDate), "MMM")}</Text>
                  </View>
                  <View>
                    <Text>{item.description}</Text>
                    <Text>{item.selectClient}</Text>
                  </View>
                  <View>
                    <Text>{item.amount}</Text>
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
export default UpcomingExpensesSummary;
