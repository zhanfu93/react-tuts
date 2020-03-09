import React, { Component } from "react"
// 导入connect方法
import { connect } from 'react-redux'
import { decrement, increment } from "../../actions/cart"

 class CartList extends Component {
  // constructor() {
  //   super()

  //   this.state = {
  //     cartList: []
  //   }
  // }

  // getState = () => {
  //   this.setState({
  //     // 从仓库中取值
  //     cartList: this.props.store.getState().cart
  //   })
  // }

  // componentDidMount() {
  //   this.getState()
  //   this.props.store.subscribe(this.getState)
  // }
  render() {
    
    console.log(this.props);
    
    const { cartList } = this.props
    return (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>名称</th>
            <th>价格</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    onClick={()=>{
                      this.props.decrement(item.id)
                    }}
                  >-</button>
                  <span>{item.amount}</span> 
                  <button
                    onClick={()=>{
                      this.props.increment(item.id)
                    }}
                  >+</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

// 这里的state实际上就是store.getState()的值
const mapStateToProps = (state) => {
  // 这里return的值，在组件中就可以通过this.props来获取
  return {
    cartList: state.cart
  }
}

// mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return {
    add: id => dispatch(increment(id)),
    reduce: id => dispatch(decrement(id)),
  }
}

/**
 * connect方法有四个参数，常用的就是前面两个
 * 第一个参数是mapStateToProps，作用就是从store里面把state注入到当前组件的props上
 * 第二个参数是mapDispatchToProps，这个的主要作用是把action生成的方法注入到当前组件的props上，一般也没必要这样用
 */
// export default connect(mapStateToProps,{decrement, increment})(CartList)
//直接第二个参数传递一个对象，这里面的对象就是actionCreators，只要传入了actionCrators，在组件内就通过this.props.actionCreator来调用，调用之后，那个actionCreator就会自动帮你把它内部的action dispatch出去
export default connect(state=>{return {cartList: state.cart}},{decrement, increment})(CartList)