import { useEffect, useState } from "react";
import Footer from "../components/layout/Footer"
import Navigation from "../components/layout/Navigation"
import PostForm from "../components/posts/PostForm"
import PostsHeader from "../components/posts/PostHeader";
import { editPost, getPostById } from "../services/posts.service";
import { useNavigate, useParams } from "react-router-dom";


export default function EditPostPage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { id } = useParams();
    
    const navigate = useNavigate();

    //LOAD PREVIOS POST INFO
    useEffect(() => {
        async function loadPost () {
        
            try{
                const post = await getPostById(id);
    
                setTitle(post.title);
                setContent(post.content);

            } catch(error) {
                console.error(error);
            }
        
        }

        loadPost();

    }, [id]);

    async function handleSubmit(e) {
        e.preventDefault();

        try{
            await editPost(id, title, content);

            console.log("Post modified.");

            navigate("/posts");
            
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <>
            <Navigation />

            <PostsHeader
                title="Edit Post"
                description="Modify your post and don't forget to save all the changes!"
            />

            <PostForm 
                title={title}
                content={content}
                handleSubmit={handleSubmit}
                setContent={setContent}
                setTitle={setTitle}
            />

            <Footer />

        </>
    );
}