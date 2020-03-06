// 这是React 16.8版本以后出现的一个新的特性，可以在使用非class情况下使用state以及其他React特性

// 两个常见的api， useState 、useEffect
import React, { useState, useEffect } from "react"
import { render } from "react-dom"

const Counter = () => {
  // useState 是一个方法，这个方法的参数就是一个默认值，结果是一个数组，数组的第一个就是state，第二个相当于setState
  // 结构出来数组中的两个值
  const [count, setCount] = useState(0)

  // useEffect的参数是一个回调，不管是组件挂载还是更新，都会触发这个回调方法，类似于ComponentDidMount和componentDidUpdate的结合
  useEffect(() => {
      console.log('渲染了');
      document.title = `当前count值为${count}`
      
  })

  return (
    <div>
        {/* useState方法生成的第一个值 */}
      <p>当前的数为{count}</p>
      {/* 这里的setCount就是useState所生成的方法（第二个），注意和setState不同之处在于参数，这里的参数是一个新值即可 */}
      <button onClick={() => setCount(count - 1)}>-</button>
      <strong>{count}</strong>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

render(<Counter />, document.querySelector("#root"))
