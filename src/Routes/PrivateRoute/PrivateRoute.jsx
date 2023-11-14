import { useContext } from "react"
import { AuthContext } from "../../Provider/AuthProvider"
import Login from './../../Pages/Login/Login';


const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext)

if(loading){
  return <div className="h-screen w-full flex justify-center items-center">
    <span className="loading loading-ring loading-lg"></span>
  </div>
}

  if(user !== null){
    return children
  }
  return <Login/>
}

export default PrivateRoute
