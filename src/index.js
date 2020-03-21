import React from "react"
import { render } from "react-dom"
import App from "./App"

import counterStore from './store'

import { Provider } from 'mobx-react'


render(
    <Provider counter={counterStore} >
         <App />
    </Provider>
       
    ,
    document.querySelector("#root")
)
