import { useState } from "react";

import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";

import { createPost } from "../services/posts.service";

import PostForm from "../components/posts/PostForm.jsx";

import PostsHeader from "../components/posts/PostHeader.jsx";
import { useNavigate } from "react-router-dom";

export default function CreatePostPage() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        console.log(title, content);

        try {
            await createPost(title, content);

            console.log("Post Created.");

            navigate("/posts");
        } catch(error) {
            console.error(error.message);
        }
    }

    return(
        <>
            <Navigation />

            <main>

                <PostsHeader 
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