import Navigation from "../components/layout/Navigation.jsx";
import Footer from "../components/layout/Footer.jsx";
import useAuth from "../context/useAuth.js";

import UserInfoCard from "../components/profile/UserInfoCard.jsx";
import ProfileHeader from "../components/profile/ProfileHeader.jsx";
import PostsGrid from "../components/posts/PostGrid.jsx";
import CommentsList from "../components/comments/CommentsList.jsx";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getUserById } from "../services/users.service.js";
import { deleteComment } from "../services/comment.service.js";
import LoadingSpinner from "../components/ui/LoadingSpinner.jsx";

export default function ProfilePage() {

    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    const { user, token } = useAuth();
    const { id } = useParams();

    const isOwner = user?.id === Number(id);

    useEffect(() => {
        async function fetchUserProfile() {
            const data = await getUserById(id);

            setUserProfile(data.user);
            setLoading(false);
        }

        fetchUserProfile();
    }, [id]);

    if (loading || !userProfile) {
        return <LoadingSpinner />;
    }

    async function handleDeleteComment(commentId) {
        try {
            await deleteComment(commentId, token);

            setUserProfile(prev => ({
                ...prev,
                comments: prev.comments.filter(c => c.id !== commentId)
            }));
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Navigation />

            <main className="profile-page">

                <ProfileHeader user={userProfile} isOwner={isOwner} />

                {/* ABOUT + POSTS */}
                <section className="profile-content">

                    <UserInfoCard user={userProfile} />

                    <div className="profile-posts">

                        <h2 className="section-title">Posts</h2>

                        <PostsGrid posts={userProfile.posts} />

                    </div>

                </section>

                {/* COMMENTS */}
                <section className="profile-comments-section">

                    <h2 className="section-title">Comments</h2>

                    <CommentsList
                        comments={userProfile.comments}
                        isOwner={isOwner}
                        handleDeleteComment={handleDeleteComment}
                    />

                </section>

            </main>

            <Footer />
        </>
    );
}