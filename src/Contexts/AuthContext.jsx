import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react"

export const AuthContext = createContext();
export default function AuthContextProvider({ children }) {
    const [isLoading, setIsLoading] = useState(true)
    const [isLoggedin, setisLoggedin] = useState(localStorage.getItem('token') != null);
    const [userId, setuserId] = useState("")
    const [Name, setName] = useState("")
    useEffect(() => {
        verifyToken();
    }, [])
    function verifyToken() {
        setIsLoading(true)
        axios.get('https://ecommerce.routemisr.com/api/v1/auth/verifyToken',
            {
                headers: {
                    token: localStorage.getItem('token')
                }
            }
        )
            .then(({ data }) => {
                console.log(data);
                setisLoggedin(true);
                setuserId(data.decoded.id);
                setName(data.decoded.name);

            }).catch(() => {
                localStorage.removeItem('token');
                setisLoggedin(false);
            }).finally(() => {
                setIsLoading(false)
            })
    }
    return (
        <>
            <AuthContext.Provider value={{ isLoggedin, setisLoggedin, isLoading, userId, Name, setName }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}
