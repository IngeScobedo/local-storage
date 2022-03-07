import { AiFillCloud } from 'react-icons/ai'
import MetamaskButton from './MetamaskButton'

const LoginForm = () => {
  return (
    <div className=" w-5/6 h-5/6">
      <div className="w-full flex justify-center">
        <AiFillCloud className="text-9xl" />
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-full text-center mb-6 text-4xl font-bold text-gray-400">
          <h1>Iniciar Sesión</h1>
        </div>
        <MetamaskButton />
        <div className="flex items-start mt-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="remember"
              className="font-medium text-gray-300  dark:text-gray-300"
            >
              Mantener sesión abierta
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
