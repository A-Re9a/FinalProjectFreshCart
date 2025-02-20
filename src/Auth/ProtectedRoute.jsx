
import { AuthContext } from '../Contexts/AuthContext'
import { useContext } from 'react'
import Login from '../pages/Login/Login'


export default function ProtectedRoute({children}) {
const {isLoggedin} =useContext(AuthContext)
    return (
        <>
        {isLoggedin ? children : <Login/>}
        </>
        
    )
}
