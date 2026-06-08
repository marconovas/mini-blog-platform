import { useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {
    const [token, setToken] = useState(
        localStorage.getItem("token")
    );

    //CHANGE THIS LATER
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user"))
    );

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