import { Navigate } from "react-router-dom";
import useAuth from "../context/useAuth.js";


export default function ProtectedRoute({ children }) {
    
    const { token } = useAuth();

    if(!token){
        return <Navigate to={"/auth/login"} replace/>
    }

    return children;
}