import { observable, computed, action } from 'mobx'

class Counter {
    name= 'Counter App'
    @observable count = 100
    // @computed doubleCount = this.count * 2
    @computed get doubleCount() {
        return this.count * 2
    }

    @action.bound increment() {
        
        this.count++
    }

    @action.bound decrement() {
        
        this.count--
    }
}

const counterStore = new Counter()

export default counterStore