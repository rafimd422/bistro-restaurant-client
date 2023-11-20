import { useContext } from "react"
import { AuthContext } from "../../Provider/AuthProvider"
import useAdmin from "../../Hooks/useAdmin"
import { Navigate } from "react-router-dom"

export default function AdminRoute({children}) {
const {user , loading} = useContext(AuthContext)
const [isAdmin, isAdminLoading] = useAdmin()
if(loading || isAdminLoading){
    return <div className="h-screen w-full flex justify-center items-center">
    <span className="loading loading-ring loading-lg"></span>
  </div>
}

if(user && isAdmin){
  return children
} else{
    <div className="h-screen">
        <p>This Page Is only Accessable For our admin</p>
        <button className="btn"><Navigate to={-1}>Go back</Navigate></button>
    </div>
}
}
