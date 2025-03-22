import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { Navigate, useLocation} from "react-router-dom"

export default function PrivateRouter({children}) {
    const {user} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location)
  
    if(!user) {
        return <Navigate state={{from: location.pathname}} to={'/login'}></Navigate>
    }
    
    return children
}
