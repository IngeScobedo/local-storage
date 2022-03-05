import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const handlelogin = (e) => {
    e.preventDefault()
    const username = e.target.username.value
    localStorage.setItem('token', JSON.stringify(username))
    navigate('/home')
  }
  return (
        <form onSubmit={handlelogin} >
            <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                htmlFor="username"
            />
            <input
                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="username"
                id="username"
                type="text"
                placeholder="Username"
            />
            <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                htmlFor="password"
            />
            <input
                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="password"
                id="password"
                type="password"
                placeholder="Password"
            />
            <button>Login</button>
        </form>
  )
}

export default Login
