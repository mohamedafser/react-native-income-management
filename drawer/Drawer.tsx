import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import LoginStuck from "../routes/LoginStuck";
import AnalyticsStuck from "../routes/AnalyticsStuck";
import ClientsStuck from "../routes/ClientsStuck";
import SettingsStuck from "../routes/SettingsStuck";
import SupportStuck from "../routes/SupportStuck";
import LogoutStuck from "../routes/LogoutStuck";
import SignupStuck from "../routes/SignupStuck";
const screens = {
  Home: {
    screen: LoginStuck
  },
  Analytics: {
    screen: AnalyticsStuck
  },
  Clients: {
    screen: ClientsStuck
  },
  Settings: {
    screen: SettingsStuck
  },
  Support: {
    screen: SupportStuck
  },
  Logout: {
    screen: LogoutStuck
  },
  Signup: {
    screen: SignupStuck
  }
};
const RootDrawerNavigator = createDrawerNavigator(screens);
export default createAppContainer(RootDrawerNavigator);
