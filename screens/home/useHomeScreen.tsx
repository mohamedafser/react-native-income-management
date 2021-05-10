import React, { useReducer } from "react";
import { ExpensesInitialState, ExpensesAction } from "./type";
import { format } from "date-fns";
const initialState: ExpensesInitialState = {
  newExpenses: [
    {
      id: 1,
      amount: 15,
      dueDate: new Date(),
      description: "description",
      selectClient: "afser",
      incomeSource: "salary",
      repeat: null
    },
    {
      id: 2,
      amount: 15,
      dueDate: new Date(),
      description: "description",
      selectClient: "afser",
      incomeSource: "salary",
      repeat: null
    }
  ],
  paidExpenses: [
    {
      amount: 15,
      id: 1,
      dueDate: "22/03/2019",
      description: "description",
      selectClient: "afser",
      incomeSource: "salary"
    }
  ],
  client: [
    {
      id: 1,
      userName: " Hyser",
      email: "hyser@gmail.com",
      address: null,
      mobileNumber: null
    },
    {
      id: 2,
      userName: " Afser",
      email: "afser@gmail.com",
      address: null,
      mobileNumber: null
    }
  ],
  userInfo: {
    id: 1,
    name: null,
    currency: null,
    email: null,
    contactInfo: null
  },
  showNewExpenses: false,
  newExpenseDatePicker: {
    date: new Date(),
    mode: "date",
    show: false
  },
  newExpoenseSelectedClient: null,
  incomeSource: [
    { value: "salary", label: "Salary" },
    { value: "freelance", label: "Freelance" },
    { value: "intrest", label: "Intrest" }
  ],
  newExpensesErrorMessage: null
};
const reducer = (state: ExpensesInitialState, action: ExpensesAction) => {
  switch (action.type) {
    case "setNewExpenses":
      return {
        ...state,
        newExpenses: action.payload,
        newExpensesErrorMessage: null,
        showNewExpenses: !state.showNewExpenses
      };

    case "setShowNewExpenses":
      return { ...state, showNewExpenses: !state.showNewExpenses };

    case "setClient":
      return { ...state, ...action.payload };

    case "setPaidExpenses":
      return { ...state, ...action.payload };

    case "setUserInfo":
      return { ...state, ...action.payload };

    case "setNewexpenseDate":
      return { ...state, ...action.payload };

    case "setNewExpensesClient":
      return { ...state, newExpoenseSelectedClient: action.payload };
    case "setIncomeSource":
      return { ...state, incomeSource: action.payload };
    case "setNewExpensesErrorMessage":
      return { ...state, newExpensesErrorMessage: action.payload };
    default:
      return state;
  }
};
export const useHomeScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state from custom Hook", state);
  return { state, dispatch };
};
