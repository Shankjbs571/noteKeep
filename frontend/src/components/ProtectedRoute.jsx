import api from "../api";
import { ACCESS_TOKEN,REFRESH_TOKEN } from "../constants";
import {Navigate} from "react-router-dom"
import {jwtDecode} from "jwt-decode"
import { useState, useEffect } from "react";

export default function ProtectedRoute({children}){
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    useEffect( () => {
        auth().catch(() => setIsAuthenticated(false))
    }, []
    )

    const refreshToken = async() => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN)
        try{
            const response = await api.post("api/token/refresh/", {
                refresh : refreshToken,
            });

            if (response.status == 200){
                localStorage.setItem(ACCESS_TOKEN,response.data.access);
                setIsAuthenticated(true);
            } else{
                setIsAuthenticated(false);
            }


        } catch(error){
            console.log(error)
            setIsAuthenticated(false)

        }

    }

    const auth = async() => {
        const token = localStorage.getItem(ACCESS_TOKEN)

        if (!token){
            setIsAuthenticated(false)
        }

        const decoded_token = jwtDecode(token)
        const now = Date.now() / 1000

        if (decoded_token.exp < now){
            await refreshToken()
        } else {
            setIsAuthenticated(true) 
        }

    }

    if (isAuthenticated == null){
        return <div>Loading...</div>
    }

    return isAuthenticated? children : <Navigate to="/login" />

}