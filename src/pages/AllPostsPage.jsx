import PostGrid from "../components/posts/PostGrid.jsx";
import PageHeader from "../components/layout/PageHeader.jsx";
import Navigation from "../components/layout/Navigation.jsx";
import { usePosts } from "../context/PostContext.jsx";
import Footer from "../components/layout/Footer.jsx";

export default function AllPostsPage() {
    const { posts } = usePosts();

    return(
        <>
            <Navigation/>

            <PageHeader
                title="All Posts"
                description="Explore ideas, tutorials and thoughts about you and others."
            />

            <PostGrid posts={posts}/>

            <Footer />
        </>
    )
}