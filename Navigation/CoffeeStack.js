import { createStackNavigator } from "react-navigation";

import Cart from "../Components/CoffeeCart";
import List from "../Components/CoffeeList";
import Detail from "../Components/CoffeeDetail";
import Login from "../Components/Login";
import Home from "../Components/HomePage";

const CoffeeStack = createStackNavigator(
  {
    CoffeeList: List,
    CoffeeDetail: Detail
  },
  {
    initialRouteName: "CoffeeList",
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTintColor: "white"
    }
  }
);

export default CoffeeStack;