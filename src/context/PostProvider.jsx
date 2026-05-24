import { useEffect, useState } from "react";
import { getPosts } from "../services/posts.service";
import { PostsContext } from "./PostContext";


export function PostsProvider({ children }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadPosts() {
            const postsData = await getPosts();
            setPosts(postsData.posts);
            setLoading(false);
        }

        loadPosts();

    }, []);


    return(
        <PostsContext.Provider value={{ 
            posts, 
            setPosts, 
            loading 
        }}>
            {children}
        </PostsContext.Provider>
    );
}
