import { Route, Routes } from "react-router-dom";

import RegisterPage from "../pages/RegisterPage";
import LogInPage from "../pages/LogInPage";


function AuthRouter() {
    return(
        <Routes>
            <Route path="register" element={<RegisterPage />}/>
            <Route path="login" element={<LogInPage />}/>
        </Routes>
    )
}

export default AuthRouter;