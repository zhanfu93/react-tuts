// 合并reducer的方法
import { combineReducers } from 'redux'

import cart from './cart'

// 导出一个reducer对象
export default combineReducers({
    cart
})