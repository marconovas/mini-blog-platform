import { Route, Routes } from "react-router-dom";

import ProfilePage from "../pages/ProfilePage";
import EditProfilePage from "../pages/EditProfilePage";
import ProtectedRoute from "./ProtectedRoute";

function UserRouter() {
    //MAKE EDIT PAGE ROUTE!!!
    
    return(
        <Routes>
            <Route path=":id" element={<ProfilePage />}/>
            <Route path=":id/edit" element={
                <ProtectedRoute>
                    <EditProfilePage />
                </ProtectedRoute>
            }/>
        </Routes>
    )
}

export default UserRouter;