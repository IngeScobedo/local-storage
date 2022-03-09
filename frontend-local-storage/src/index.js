import ReactDOM from 'react-dom'
import React from 'react'
import {
  BrowserRouter
} from 'react-router-dom'
import { getLibrary } from './config/web3/index'
import { Web3ReactProvider } from '@web3-react/core'
import './index.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import loginReducer from './reducers/loginReducer'
import AppRouter from './routes/AppRouter'

const store = createStore(loginReducer)

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  </Web3ReactProvider>,
  document.getElementById('root')
)
