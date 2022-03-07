import LoginForm from './LoginForm'

const Login = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col bg-slate-900">
        <div className="w-full h-14 bg-gradient-to-b from-black to-slate-900 "></div>
        <div className=" w-full h-full flex flex-col justify-center items-center">
            <LoginForm />
        </div>
      </div>
    </>
  )
}

export default Login
