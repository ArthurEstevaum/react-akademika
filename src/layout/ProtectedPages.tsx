import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router";

export default function ProtectedPages() {
  const auth = useContext(AuthContext)

  return (
    auth?.isAuthenticated? <Outlet /> : <Navigate to={"/login"} />
  )
}