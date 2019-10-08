import { ADD_ITEM, REMOVE_ITEM, CHECKOUT } from "../actions/types";

const initialState = {
  items: [
    {
      drink: "Latte",
      option: "Small",
      quantity: 2
    },
    {
      drink: "Espresso",
      option: "Large",
      quantity: 1
    }
  ]
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      let newItems;
      let check = state.items.findIndex(
        item =>
          item.drink == action.payload.drink &&
          item.option == action.payload.option
      );

      if (check == -1) {
        NewItems = [...state.items];
        NewItems.push({
          drink: action.payload.drink,
          option: action.payload.option,
          quantity: 1
        });
      } else {
        console.log("1 ", check);
        NewItems = [...state.items];
        NewItems[check].quantity += 1;
      }
      return { items: NewItems };
    }
    case REMOVE_ITEM: {
      console.log(action);
      let newItems;
      let check = state.items.findIndex(
        item =>
          item.drink == action.payload.drink &&
          item.option == action.payload.option
      );
      console.log("2", check);
      NewItems = [...state.items];
      NewItems.splice(check, 1);
      return { items: NewItems };
    }
    case CHECKOUT: {
      alert("bye");
      return { items: [] };
    }
    default:
      return state;
  }
};

export default cartReducer;