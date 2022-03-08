import ReactDOM from 'react-dom'
import React from 'react'
import {
  BrowserRouter
} from 'react-router-dom'
import { getLibrary } from './config/web3/index'
import { Web3ReactProvider } from '@web3-react/core'
import './index.css'
import AppRouter from './routes/AppRouter'

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
  </Web3ReactProvider>,
  document.getElementById('root')
)
