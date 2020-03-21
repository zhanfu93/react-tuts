import React, { Component } from 'react'

import { CounterBtn, CounterDisplay } from './components'

import { observer, inject } from 'mobx-react'


/**
 * https://www.npmjs.com/package/mobx-react
 */
// @inject('counter')
@inject((store) => {
    return {
        count: store.counter.count,
        doubleCount: store.counter.doubleCount, 
        increment: store.counter.increment, 
        decrement: store.counter.decrement 
    }
})
@observer

class App extends Component {

    

    render() {
        const { count, doubleCount, increment, decrement } = this.props
        return (
            <div>
                <CounterBtn onClick={decrement}>-</CounterBtn>
                <CounterDisplay count={count} doubleCount={doubleCount}/>
                <CounterBtn onClick={increment}>+</CounterBtn>
            </div>
        )
    }
}

export default App