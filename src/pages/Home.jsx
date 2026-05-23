import { useEffect, useState } from "react";
import FeatureSection from "../components/Home/FeatureSection.jsx";
import HeroSection from "../components/Home/HeroSection.jsx";
import Navigation from "../components/layout/navBar.jsx";
import { getPosts } from "../services/posts.service.js";
import PostGrid from "../components/posts/PostGrid.jsx";
import LoadingSpinner from "../components/ui/LoadingSpinner.jsx";
import Footer from "../components/layout/Footer.jsx";

function Home () {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    
    useEffect(() => {
        try{
            async function fetchPosts() {
                const postsData = await getPosts();
                console.log(postsData);
                setPosts(postsData.posts);
            }
            
            fetchPosts();
        } catch(error) {
            console.error(error);
        } finally {
            setLoading(false);
        }

    }, []);

    return(
        <>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <Navigation/>
                        
                    <HeroSection/>
                        
                    <FeatureSection/>
                        
                    <PostGrid posts={posts} />

                    <Footer />
                </>                
            )}
        </>
    )
}

export default Home;