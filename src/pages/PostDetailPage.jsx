import { useEffect, useState } from "react"
import { deletePost, getPostById, postComment } from "../services/posts.service.js"
import { Link, useNavigate, useParams } from "react-router-dom";

import Navigation from "../components/layout/Navigation.jsx";
import Footer from "../components/layout/Footer.jsx";
import LoadingSpinner from "../components/ui/LoadingSpinner.jsx";
import PostDetail from "../components/posts/PostDetail.jsx";
import CommentsSection from "../components/comments/CommentsSection.jsx";
import useAuth from "../context/useAuth.js";
import { usePosts } from "../context/PostContext.jsx";
import CommentForm from "../components/comments/CommentForm.jsx";

//STYLES
import "./PostDetailPage.css";

export default function PostDetailPage() {
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    //COMMENT
    const [comment, setComment] = useState("");

    const { id } = useParams();
    const { user, token } = useAuth();
    const { removePost } = usePosts();

    const navigate = useNavigate();
    
    //CHECK OWNERSHIP
    const isOwner = post?.user?.id === user?.id;

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

    async function handleDelete() {

        console.log("DELETE ID:", id);

        const confirmed = window.confirm(
            "Are you sure you want to delete the post?"
        );

        if(!confirmed) return;

        try{
            await deletePost(id, token);

            removePost(Number(id));

            navigate("/posts");

        } catch(error) {
            console.error(error);
        }
    }

    async function handleComment(e) {
        e.preventDefault();

        try{
            await postComment(id, comment, token);

            const data = await getPostById(id);

            setPost(data.post);

            setComment("");
        } catch(error) {
            console.error(error);
        }
    } 

    
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

            <main className="post-detail-page">

                <PostDetail
                    post={post}
                    isOwner={isOwner}
                    handleDelete={handleDelete}
                />

                <CommentsSection
                    comments={post.comments}
                />

                <section className="comment-form-section">

                    <h2>
                        Leave a Comment
                    </h2>

                    {user ? (
                        <CommentForm
                            comment={comment}
                            setComment={setComment}
                            handleComment={handleComment}
                        />
                    ) : (
                        <p className="login-required">
                            You must <Link to="/auth/login">log in</Link> to post a comment.
                        </p>
                    )}

                </section>

            </main>

            <Footer />
        </>
    )
}