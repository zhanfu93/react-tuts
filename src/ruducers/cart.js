// 导入action状态
import actionType from "../actions/actionType"
// 初始化state
const initState = [
  {
    id: 1,
    title: "apple",
    price: 1888.88,
    amount: 10
  },
  {
    id: 2,
    title: "banana",
    price: 3888.88,
    amount: 19
  }
]



export default (state = initState, action) => {
  switch (action.type) {
    case actionType.CART_AMOUT_INCREMENT:
      return state.map(item => {
        if (item.id === action.payload.id) {
          item.amount += 1
        }
        return item
      })
    case actionType.CART_AMOUT_DECREMENT:
      return state.map(item => {
        if (item.id === action.payload.id) {
          item.amount -= 1
        }
        return item
      })
    default:
      return state
  }
}
