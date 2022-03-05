import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import './index.css'
import Login from './components/login/Login'

ReactDOM.render(
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<App />} />
    </Routes>
   </BrowserRouter>,
   document.getElementById('root')
)
