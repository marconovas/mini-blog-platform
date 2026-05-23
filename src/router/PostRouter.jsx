import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home.jsx";
import AllPosts from "../pages/AllPosts.jsx";

function PostRouter () {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/posts" element={<AllPosts/>}/>
        </Routes>
    )
}

export default PostRouter;