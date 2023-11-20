import { useContext } from "react"
import { AuthContext } from "../../Provider/AuthProvider"
import useAdmin from "../../Hooks/useAdmin"
import { useNavigate } from "react-router-dom"

export default function AdminRoute({children}) {
const {user , loading} = useContext(AuthContext)
const [isAdmin, isAdminLoading] = useAdmin()
const Navigate = useNavigate()

if(loading || isAdminLoading){
    return <div className="h-screen w-full flex justify-center items-center">
    <span className="loading loading-ring loading-lg"></span>
  </div>
}

if(user && isAdmin){
  return children
} else if (!isAdmin){
    return(
    <div className="h-screen flex justify-center flex-col items-center w-full">
        <p>This Page Is only Accessable For our admin</p> <br />
        <button onClick={()=> Navigate(-1)} className="btn">Go back</button>
    </div>)
}
}
