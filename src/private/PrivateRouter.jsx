import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { useNavigate } from "react-router-dom"

export default function PrivateRouter({children}) {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
  
    if(user) {
        return children
    }
    navigate('/login')
}
