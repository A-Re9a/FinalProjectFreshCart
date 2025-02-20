import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthContext'
import { useContext } from 'react'

export default function ProtectAuthRoute({children}) {
    const {isLoggedin} =useContext(AuthContext)
    return isLoggedin ? <Navigate to="/"/> : children;
}
