
import Navigation from "../components/layout/Navigation.jsx";
import Footer from "../components/layout/Footer.jsx";
import useAuth from "../context/useAuth.js";
import UserInfoCard from "../components/profile/UserInfoCard.jsx";
import ProfileHeader from "../components/profile/ProfileHeader.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserById } from "../services/users.service.js";
import PostsGrid from "../components/posts/PostGrid.jsx";
import LoadingSpinner from "../components/ui/LoadingSpinner.jsx";

export default function ProfilePage() {

    const [userProfile, setUserProfile] = useState(null);
    const [loading, setloading] = useState(true);

    const { user } = useAuth();
    const { id } = useParams();

    //LOAD USER'S POSTS
    useEffect(() => {
        async function userProfile() {
            const data = await getUserById(id);

            //console.log("DATA USER :", data);

            setUserProfile(data.user);
            setloading(false);
        }

        userProfile();
    }, [id]);

    const isOwner = user?.id === Number(id);

    if(loading || ! userProfile){
        return <LoadingSpinner />
    }

    return(
        <div>
            <Navigation />

            {/* ADD USER BIO */}
            <ProfileHeader
                user={userProfile}
                isOwner={isOwner}
            />

            <section>
                <UserInfoCard user={userProfile} />
            
                {loading ? (
                    <LoadingSpinner />
                ) : (
                    <PostsGrid
                        posts={userProfile.posts}
                    />
                )}
            </section>

            <Footer />
        </div>
    )
}