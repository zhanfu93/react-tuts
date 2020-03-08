import action from "./actionType"

export const increment = id => {
  console.log(id)

  return {
    type: action.CART_AMOUT_INCREMENT,
    payload: {
      id
    }
  }
}

export const decrement = id => {
  console.log(id)

  return {
    type: action.CART_AMOUT_DECREMENT,
    payload: {
      id
    }
  }
}
