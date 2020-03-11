import React, { Component } from 'react'

import { Button, Pagination } from 'antd'

export default class App extends Component {
    render() {
        return (
            <div>
                <Button loading type="primary">测试</Button>
                <Pagination
                    showSizeChanger
                    
                    defaultCurrent={3}
                    total={500}
                />
            </div>
        )
    }
}

