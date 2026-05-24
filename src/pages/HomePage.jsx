import FeatureSection from "../components/Home/FeatureSection.jsx";
import HeroSection from "../components/Home/HeroSection.jsx";
import Navigation from "../components/layout/navBar.jsx";
import PostGrid from "../components/posts/PostGrid.jsx";
import LoadingSpinner from "../components/ui/LoadingSpinner.jsx";
import Footer from "../components/layout/Footer.jsx";
import { usePosts } from "../context/PostContext.jsx";

function HomePage () {

    const {posts, loading} = usePosts();
    
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

export default HomePage;