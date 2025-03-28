import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { Navigate, useLocation} from "react-router-dom"

export default function PrivateRouter({children}) {
    const {user, loader} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location)

    if(loader) {
        return <div className="min-h-[calc(100vh-64px)] flex justify-center items-center"><span className="loading loading-spinner text-error"></span></div>
    }
  
    if(!user) {
        return <Navigate state={{from: location.pathname}} to={'/login'}></Navigate>
    }
    
    return children
}
