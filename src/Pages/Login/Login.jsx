import { Link } from 'react-router-dom'
import loginImg from '../../assets/others/authentication2.png'
import './login.css'
import { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'




const Login = () => {

const {signIn} = useContext(AuthContext)

const handleLogin = e => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value
    const password = form.password.value
console.log(email, password)
signIn(email, password)
.then(result => {
  const user = result.user
  console.log(user);
})
}



  return (
<div className="hero min-h-screen login">
 <div className='flex flex-col justify-center items-center gap-4'>
 <h1 className="text-5xl font-bold text-orange-400">Login now!</h1>
 <div className="hero-content flex-col lg:gap-10 lg:justify-between md:flex-row justify-center items-center gap-2">
    <div className="text-center lg:text-left">
      <img src={loginImg} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparant">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        <div className="form-control">
        </div>
        </div>
         <input type="submit" className='btn bg-orange-400 text-white' value="Log in" />
         <p className='text-sm ms-1'>Already Have An Account? <Link className='text-purple-400' to={'/register'}>Register</Link></p>
      </form>
    </div>
  </div>
 </div>
</div>
  )
}

export default Login
