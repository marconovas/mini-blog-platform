import PostGrid from "../components/posts/PostGrid.jsx";
import PostsHeader from "../components/posts/PostHeader.jsx";
import NavBar from "../components/layout/NavBar.jsx";
import { usePosts } from "../context/PostContext.jsx";
import Footer from "../components/layout/Footer.jsx";

export default function AllPostsPage() {
    const { posts } = usePosts();

    return(
        <>
            <NavBar/>

            <PostsHeader/>

            <PostGrid posts={posts}/>

            <Footer />
        </>
    )
}