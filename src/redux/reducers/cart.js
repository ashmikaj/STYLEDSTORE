const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state = defaultCartState, action) => {
  switch (action.type) {
    case "ADD": {
      console.log("clicked");
      const updatedTotalAmount =
        state.totalAmount + action.payload.item.price * 1;

      const existingCartItemIndex = state.items.findIndex(
        item => item.id === action.payload.item.id
      );

      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload.item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }

    case "REMOVE": {
      const existingCartItemIndex = state.items.findIndex(
        item => item.id === action.payload.id
      );
      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter(
          item => item.id !== action.payload.id
        );
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }

    case "RESET": {
      return defaultCartState;
    }

    default:
      return state;
  }
};

export default cartReducer;
