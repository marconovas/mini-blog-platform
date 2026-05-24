import { useEffect, useState } from "react"
import { getPostById } from "../services/posts.service.js"
import { useParams } from "react-router-dom";

import Navigation from "../components/layout/navBar.jsx";
import Footer from "../components/layout/Footer.jsx";
import LoadingSpinner from "../components/ui/LoadingSpinner.jsx";
import PostDetail from "../components/posts/PostDetail.jsx";
import CommentsSection from "../components/comments/CommentsSection.jsx";

export default function PostDetailPage() {
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    //FETCH POST
    useEffect(() => {
        async function fetchPostById ()  {
            console.log(id);
            
            try {
                
                const data = await getPostById(id);
                
                setPost(data.post);

            } catch(error) {
                
                console.log(error);

            } finally {
                setIsLoading(false);
            }
        }

        fetchPostById();

    }, [id]);
    
    if(isLoading) {
        return <LoadingSpinner />
    }

    //POST NOT FOUND
    if (!post) {
        return (
            <section
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                textAlign: "center",
                background: "linear-gradient(to bottom, var(--bg-dark), var(--bg-secondary))"
            }}
            >
            <div style={{ maxWidth: "600px" }}>

                <span
                style={{
                    display: "inline-block",
                    marginBottom: "1.5rem",
                    padding: "0.5rem 1rem",
                    borderRadius: "999px",
                    background: "rgba(108,99,255,0.12)",
                    color: "var(--primary)",
                    fontWeight: "700",
                    letterSpacing: "1px"
                }}
                >
                404
                </span>

                <h1
                style={{
                    fontSize: "clamp(2.5rem, 7vw, 4rem)",
                    color: "var(--text-main)",
                    marginBottom: "1rem",
                    fontWeight: "800"
                }}
                >
                Post Not Found
                </h1>

                <p
                style={{
                    color: "var(--text-secondary)",
                    lineHeight: "1.7",
                    fontSize: "1.05rem"
                }}
                >
                The post you are looking for does not exist or may have been removed.
                </p>

            </div>
            </section>
        );
    }

    return(
        <>
            <Navigation />
            
            <PostDetail post={post} />

            <CommentsSection comments={post.comments} />
            
            <Footer />
        </>
    )
}