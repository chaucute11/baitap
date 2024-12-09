
  export const updateCart = (id, quantity = 1) => {
    return{
      type:"UPDATE_CART",
      id: id,
      quantity: quantity
    }
  }
  
