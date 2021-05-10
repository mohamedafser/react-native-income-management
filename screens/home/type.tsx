type NewExpenses = {
  id: number;
  amount: number | null;
  dueDate: Date | string | null;
  description: string | null;
  selectClient: string | null;
  incomeSource: string | null;
  repeat?: "weekly" | "monthly" | "yearly" | null;
};
type Client = {
  id: number;
  userName: string | null;
  email: string | null;
  address: string | null;
  mobileNumber: number | null;
};
type UserInfo = {
  id: number;
  name: string | null;
  currency: string | null;
  email: string | null;
  contactInfo: string | null;
};
type DatePicker = {
  date: Date | string;
  mode: "date" | "time";
  show: boolean;
};
type OptionType = {
  value: string;
  label: string;
};
export type ExpensesInitialState = {
  newExpenses: NewExpenses[];
  showNewExpenses: boolean;
  paidExpenses: NewExpenses[];
  client: Client[];
  userInfo: UserInfo;
  newExpenseDatePicker: DatePicker;
  newExpoenseSelectedClient: string | null;
  incomeSource: OptionType[] | null;
  newExpensesErrorMessage: string | null;
};

export type ExpensesAction =
  | {
      type: "setNewExpenses";
      payload: { newExpenses: NewExpenses[]; newExpensesErrorMessage: null };
    }
  | { type: "setShowNewExpenses" }
  | { type: "setPaidExpenses"; payload: { paidExpenses: NewExpenses[] } }
  | {
      type: "setNewExpensesClient";
      payload: { newExpoenseSelectedClient: string };
    }
  | { type: "setClient"; payload: { client: Client[] } }
  | { type: "setUserInfo"; payload: { userInfo: UserInfo[] } }
  | {
      type: "setNewexpenseDate";
      payload: { newExpenseDatePicker: DatePicker };
    }
  | {
      type: "setIncomeSource";
      payload: { incomeSource: OptionType[] };
    }
  | {
      type: "setNewExpensesErrorMessage";
      payload: { newExpensesErrorMessage: string };
    };
