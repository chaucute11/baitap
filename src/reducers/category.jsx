const categoryReducer = (state = [], action) => {
    let newState = [...state];
    if (action.type === "ADD_TO_CART")
      return [
        ...state,
        {
          id: action.id,
          info: action.info,
          quantity: 1
        }
      ];
    else if (action.type === "UPDATE_CART") {
      const itemUpdate = newState.find(item => item.id === action.id);
      itemUpdate.quantity = itemUpdate.quantity + action.quantity;
      return newState;
    }
    else if (action.type === "DELETE_ITEM"){
      return newState.filter(item => item.id !== action.id);
    }
    else if (action.type === "DELETE_ALL"){
      newState = [];
      return newState;
    }
    else {
      return state;
    }
  }
  export default categoryReducer; 