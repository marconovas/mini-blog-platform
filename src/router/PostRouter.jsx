import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage.jsx";
import AllPostsPage from "../pages/AllPostsPage.jsx";
import PostDetailPage from "../pages/PostDetailPage.jsx";
import CreatePostPage from "../pages/CreatePostPage.jsx";

function PostRouter () {
    return(
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/posts" element={<AllPostsPage />}/>
            <Route path="/posts/:id" element={<PostDetailPage />}/>
            <Route path="/posts/create" element={<CreatePostPage />}/>
        </Routes>
    )
}

export default PostRouter;