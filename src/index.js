import React from "react"
import { render } from "react-dom"
import App from "./App"

import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider } from 'antd'

/**
 * immutable 不可变对象
 * Immutable Data 就是一旦创建，就不能再被更改的数据。对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象。
 */
// import { Map, List, fromJS } from 'immutable'
// //用来创建一个新的List/Map对象 
// const course = Map({
//     name: 'UI',
//     time: 180,
//     desc: {
//         id: 1,
//     }
// })

// // 构建immutable 数组类型数据
// const arr = List(
//     [1,2,3,4]
// )

// // 设置值用set，返回一个新的Map类型数据
// const course1 = course.set('name', 'python')
// const course2 = course.setIn(['desc', 'id'], 2)
// const course2 = course.setIn(['desc', 'id'], 2)
// // 获取值用get
// // console.log(course.get('name'));
// // console.log(course1.get('name'));

// // 转化为js对象 toJS()
// console.log(course1.toJS());
// console.log(course2.get('desc'));






render(
    <ConfigProvider locale={zhCN}>
        <App />
    </ConfigProvider>
    ,
    document.querySelector("#root")
)
