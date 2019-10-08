import { createStackNavigator, createAppContainer } from "react-navigation";

import Cart from "../Components/CoffeeCart";
import OrderHistory from "../Components/OrderHistory";
import List from "../Components/CoffeeList";
import Detail from "../Components/CoffeeDetail";
import Login from "../Components/Login";
import Home from "../Components/HomePage";

const OrderStack = createStackNavigator(
  {
    CoffeeCart: Cart,
    OrderHistory: OrderHistory
  },
  {
    initialRouteName: "CoffeeCart",
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

export default OrderStack;