import {
  Routes,
  Route
} from 'react-router-dom'
import App from '../App'
import Login from '../components/login/Login'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<App />} />
      </Routes>
  )
}

export default AppRouter
