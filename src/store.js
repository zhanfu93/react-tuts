// createStore是redux提供的一个用于创建store的方法，
import { createStore } from 'redux'

// 引用合并后的reducer
import rootReducer from './ruducers'


// createStore的第一个参数必须是一个reducer，如果是多个，使用combineReducers方法合并后再作为参数导入
export default  createStore(rootReducer)