import React from "react"
import { render } from "react-dom"
import App from "./App"

// Provider是react-redux提供的一个组件
import { Provider } from 'react-redux'

// 导入store
import store from './store'



render(
    // Provider组件放在最顶层，这个组件必须有一个store属性，这个store属性的值就是我们创建的store
    // 最外层Provider，那么它所有后代组件都可以使用Redux.connect
    <Provider store={store} >
        <App />
    </Provider>
    ,
    document.querySelector("#root")
)
