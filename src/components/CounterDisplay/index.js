import React, { Component } from 'react'

// import { observer } from 'mobx-react'

// @observer
class CounterDisplay extends Component {
    
    render() {
        return (
            <div>
                原值：{this.props.count} <br />
                2倍值：{this.props.doubleCount}
            </div>
        )
    }
}
export default CounterDisplay