import { useContext, useEffect } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

export default function Logout() {
  const auth = useContext(AuthContext)
  //logout when access the page
  useEffect(() => {
    auth?.logout()
  }, [])

  return <Navigate to={"/"} />
}