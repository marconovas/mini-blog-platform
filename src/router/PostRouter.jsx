import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage.jsx";
import AllPostsPage from "../pages/AllPostsPage.jsx";
import PostDetailPage from "../pages/PostDetailPage.jsx";
import CreatePostPage from "../pages/CreatePostPage.jsx";
import EditPostPage from "../pages/EditPostPage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

function PostRouter () {
    return(
        <Routes>
            <Route index element={<HomePage />}/>
            <Route path="posts" element={<AllPostsPage />}/>
            <Route path="posts/:id" element={<PostDetailPage />}/>

            {/* PROTECTED ROUTES */}
            <Route 
                path="posts/create" 
                element={
                    <ProtectedRoute>
                        <CreatePostPage />
                    </ProtectedRoute>
                }
            />
            <Route 
                path="posts/:id/modify"
                element={
                    <ProtectedRoute>
                        <EditPostPage/>
                    </ProtectedRoute>
                }
            />
        </Routes>
    )
}

export default PostRouter;