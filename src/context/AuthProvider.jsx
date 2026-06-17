import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { jwtDecode } from "jwt-decode";

export function AuthProvider({ children }) {
    const [token, setToken] = useState(
        localStorage.getItem("token")
    );

    if(token && isTokenExpired(token)){
        logout();
    }

    //CHANGE THIS LATER
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user"))
    );

    //TOKEN EXPIRED
    function isTokenExpired(token) {
        try{
            const decoded = jwtDecode(token);

            return decoded.exp * 1000 < Date.now();
        } catch {
            return true;
        }
    }

    function login(newToken, user) {
        localStorage.setItem("token", newToken);
        
        //CHANGE THIS LATER
        localStorage.setItem("user", 
            JSON.stringify(user)
        );
        
        setToken(newToken);
        setUser(user);
    }

    function logout(){
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        
        setToken(null);
        setUser(null);
    }

    return(
        <AuthContext.Provider
            value={{
                token,
                user,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}