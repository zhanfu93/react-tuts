// 为了避免actionType重复，所以一般统一会把actionTypoe放在一个文件中进行管理，也可以避免写错actionType
import actionType from "../actions/actionType"

// 购物车的初始状态
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


// 创建购物车的reducer，reducer的固定写法是两个参数，第一个就是state并有一个初始值，第二个是action
export default (state = initState, action) => {

  console.log(action);

  // 根据不同的action.type,做不同的处理，每次返回一个新的state，返回的类型要一样
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
      // 一定要有default，当actionType不对的时候，就会返回一个初始值
    default:
      return state
  }
}
