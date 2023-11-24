import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


export const ProtectedRoute=()=>{
    let token=useSelector(store=>store.token)
    return token?<Outlet/>:<Navigate to='/'/>
}