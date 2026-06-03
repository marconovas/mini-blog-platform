import { Route, Routes } from "react-router-dom";

import ProfilePage from "../pages/ProfilePage";

function UserRouter() {
    //MAKE EDIT PAGE ROUTE!!!
    
    return(
        <Routes>
            <Route path=":id" element={<ProfilePage />}/>
        </Routes>
    )
}

export default UserRouter;