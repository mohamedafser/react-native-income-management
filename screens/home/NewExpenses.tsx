import React, { useState, useContext, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  Picker,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { HomeContext } from "./Home";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { globalStyles } from "../../styles/globelStyles";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import {
  StyledButton,
  StyledButtonText,
  StyledModelContainer,
  StyledModel,
  StyledDropdown
} from "../../styles/globelStyles";
const NewExpenses = React.memo(() => {
  const { state, dispatch }: any = useContext(HomeContext);
  const [expenses, setExpenses] = useState({
    amount: null,
    desc: null,
    client: null,
    incomeSource: null
  });
  const handleCloseModel = useCallback(() => {
    dispatch({ type: "setShowNewExpenses" });
  }, [state.showNewExpenses]);

  const handleChangeDate = useCallback(
    (event: any, date: any) => {
      if (date) {
        dispatch({
          type: "setNewexpenseDate",
          payload: {
            newExpenseDatePicker: {
              ...state.newExpenseDatePicker,
              date: date,
              show: !state.newExpenseDatePicker.show
            }
          }
        });
      }
    },
    [state.newExpenseDatePicker]
  );
  const handleShowDate = useCallback(() => {
    dispatch({
      type: "setNewexpenseDate",
      payload: {
        newExpenseDatePicker: {
          ...state.newExpenseDatePicker,
          show: !state.newExpenseDatePicker.show
        }
      }
    });
  }, [state.newExpenseDatePicker]);

  const handleChangeClientValue = useCallback(
    (value: string, index: number) => {
      setExpenses((prevState: any) => {
        return { ...prevState, client: value };
      });
    },
    [expenses.client]
  );
  const handleAmount = useCallback(
    (value: any) => {
      setExpenses((prevState: any) => {
        return { ...prevState, amount: value };
      });
    },
    [expenses.amount]
  );
  const handleDescription = useCallback(
    (value: any) => {
      setExpenses((prevState: any) => {
        return { ...prevState, desc: value };
      });
    },
    [expenses.desc]
  );
  const handleChangeIncomSourceValue = useCallback(
    (value: string, index: number) => {
      setExpenses((prevState: any) => {
        return { ...prevState, incomeSource: value };
      });
    },
    [expenses.incomeSource]
  );

  const handleSave = () => {
    if (
      expenses.amount &&
      expenses.client &&
      expenses.desc &&
      expenses.incomeSource
    ) {
      dispatch({
        type: "setNewExpenses",
        payload: [
          {
            id: Math.random().toString(),
            amount: expenses.amount,
            dueDate: state.newExpenseDatePicker.date,
            description: expenses.desc,
            selectClient: expenses.client,
            incomeSource: expenses.incomeSource,
            repeat: null
          },
          ...state.newExpenses
        ]
      });
    } else {
      dispatch({
        type: "setNewExpensesErrorMessage",
        payload: "Please fill all valid datas"
      });
    }
  };
  const handleCloseKeyboard = () => {
    Keyboard.dismiss();
  };
  console.log("expenses", expenses, "state newExpenses", state.newExpenses);
  return (
    <Modal
      visible={state.showNewExpenses}
      animationType="slide"
      // transparent={true}
    >
      <TouchableWithoutFeedback onPress={handleCloseKeyboard}>
        <StyledModelContainer>
          <StyledModel>
            <TouchableOpacity onPress={handleCloseModel}>
              <StyledButton bg="blue" alignBtn="flex-end">
                <StyledButtonText color="#fff">Close</StyledButtonText>
              </StyledButton>
            </TouchableOpacity>
            <View>
              <View style={globalStyles.inputContainer}>
                <Input
                  placeholder="Enter amount"
                  keyboardType="numeric"
                  leftIcon={<Icon name="user" size={24} color="black" />}
                  onChangeText={handleAmount}
                  inputStyle={globalStyles.inputInner}
                />
              </View>
              <View style={globalStyles.inputContainer}>
                <Button title="Select due date" onPress={handleShowDate} />
                {state.newExpenseDatePicker.show && (
                  <DateTimePicker
                    value={state.newExpenseDatePicker.date}
                    mode={state.mode}
                    is24Hour={true}
                    display="default"
                    minimumDate={new Date()}
                    onChange={handleChangeDate}
                  />
                )}
              </View>
              <View style={globalStyles.inputContainer}>
                <Text>Select client</Text>
                <Picker
                  selectedValue={state.newExpoenseSelectedClient}
                  // style={{ borderWidth: 1, borderColor: "red" }}
                  onValueChange={handleChangeClientValue}
                >
                  {state.client.map((data: any) => {
                    return (
                      <Picker.Item
                        label={data.userName}
                        value={data.userName}
                        key={data.id}
                      />
                    );
                  })}
                </Picker>
              </View>
              <View style={globalStyles.inputContainer}>
                <Text>Select income source</Text>
                <Picker
                  selectedValue={state.newExpoenseSelectedClient}
                  // style={{ height: 50, width: 100 }}
                  onValueChange={handleChangeIncomSourceValue}
                >
                  {state.incomeSource.map((data: any, index: any) => {
                    return (
                      <Picker.Item
                        label={data.label}
                        value={data.value}
                        key={index}
                      />
                    );
                  })}
                </Picker>
              </View>
              <View style={globalStyles.inputContainer}>
                <Input
                  placeholder="Enter description"
                  multiline
                  leftIcon={<Icon name="user" size={24} color="black" />}
                  onChangeText={handleDescription}
                  inputStyle={globalStyles.inputInner}
                />
              </View>
              <View>
                <Text>{state.newExpensesErrorMessage}</Text>
              </View>
              <View>
                <Button title="Save" onPress={handleSave} />
              </View>
            </View>
          </StyledModel>
        </StyledModelContainer>
      </TouchableWithoutFeedback>
    </Modal>
  );
});

export default NewExpenses;
