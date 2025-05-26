import { useState } from "react";
import { Outlet } from "react-router";
import { AuthContext } from "./AuthContext";
import NavBar from "../components/navbar";

export default function AuthProvider() {
    const [ isAuthenticated, setIsAuthenticated ] = useState<boolean>(!!localStorage.getItem("token"))

    const [ email, setEmail ] = useState<string>(JSON.parse(localStorage.getItem("email") ?? "{}"))

    function login(token: string, userEmail: String) {
        localStorage.setItem("token", token)
        localStorage.setItem("email", JSON.stringify(userEmail))
        setIsAuthenticated(true)
    }

    function logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("email")
        setEmail("")
        setIsAuthenticated(false)
    }

    const auth = {
        login,
        logout,
        isAuthenticated,
        email
    }

    return (
        <AuthContext.Provider value={auth}>
            <NavBar />
            <Outlet />
        </AuthContext.Provider>
    )
}