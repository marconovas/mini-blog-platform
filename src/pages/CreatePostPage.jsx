import { useState } from "react";

import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";

import { createPost } from "../services/posts.service";

import PostForm from "../components/posts/PostForm.jsx";

import { useNavigate } from "react-router-dom";
import PageHeader from "../components/layout/PageHeader.jsx";
import useAuth from "../context/useAuth.js";

import { toast } from "react-toastify";
import { usePosts } from "../context/PostContext.jsx";

export default function CreatePostPage() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const { token } = useAuth();
    const navigate = useNavigate();

    const { setPosts } = usePosts();

    async function handleSubmit(e) {
        e.preventDefault();

        console.log(title, content);

        try {
            const newPost = await createPost(title, content, token);

            console.log(newPost);

            setPosts(prevPosts => [newPost.post, ...prevPosts]);

            toast.success("Post created successfully!",{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            navigate("/posts");
        } catch(error) {
            console.error(error.message);
        }
    }

    return(
        <>
            <Navigation />

            <main>

                <PageHeader
                    label="New Article"
                    title="Create a New Post"
                    description="Share your ideas, tutorials and thoughts with the community."
                />                

                <PostForm
                    title={title}
                    content={content}
                    setTitle={setTitle}
                    setContent={setContent}
                    handleSubmit={handleSubmit}
                />

            </main>

            <Footer />
        </>
    );
}