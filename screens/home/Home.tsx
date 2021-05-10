import React, { useState, createContext, useMemo } from "react";
import { StyleSheet, Text, View, AsyncStorage, Button } from "react-native";
import Summary from "./Summary";
import UpcomingExpensesSummary from "./UpcomingExpensesSummary";
import NewExpenses from "./NewExpenses";
import { useHomeScreen } from "./useHomeScreen";
import {} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import NoRecordFound from "../../default/NoRecordFound";

type Iprops = {
  navigation: any;
};

export const HomeContext = createContext({});
const Home = (props: Iprops) => {
  const { navigation } = props;
  const { state, dispatch } = useHomeScreen();
  const initialContextValue = useMemo(() => ({ state, dispatch }), [
    state,
    dispatch
  ]);
  const handleShowNewExpenses = () => {
    dispatch({ type: "setShowNewExpenses" });
  };
  const handeleLogout = async () => {
    await AsyncStorage.clear();
    navigation.navigate("Auth");
  };
  return (
    <HomeContext.Provider value={initialContextValue}>
      <View>
        <Summary />
        <View style={styles.newExpensesBtn}>
          <Button
            // icon={
            //   <Icon
            //     name="plus"
            //     size={15}
            //     color="white"
            //     style={styles.newExpensesBtnIcon}
            //   />
            // }
            title="New Expenses"
            onPress={handleShowNewExpenses}
          />
        </View>
        {state.newExpenses.length > 0 ? (
          <UpcomingExpensesSummary navigation={navigation} />
        ) : (
          <NoRecordFound />
        )}
        <Text>Home Screen</Text>
      </View>
      <NewExpenses />
    </HomeContext.Provider>
  );
};

export default Home;

const styles = StyleSheet.create({
  newExpensesBtn: {
    alignItems: "flex-end",
    paddingHorizontal: 15
  },
  newExpensesBtnIcon: {
    paddingRight: 10
  }
});
