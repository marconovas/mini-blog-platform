import { useState } from "react"
import useAuth from "../context/useAuth.js";
import { updateUser } from "../services/users.service.js";

import Navigation from "../components/layout/Navigation.jsx";
import PageHeader from "../components/layout/PageHeader.jsx"
import Footer from "../components/layout/Footer.jsx";
import { useNavigate } from "react-router-dom";

import "./EditProfilePage.css";

export default function EditProfilePage() {
    
    const { user, token } = useAuth();

    const [bio, setBio] = useState(user?.bio || "");

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try{
            console.log("TOKEN:", token);
            console.log("USER:", user);

            const res = await updateUser(
                user.id, 
                {bio},
                token
            );

            console.log(res);

            navigate(`/user/${user.id}`);
            
        } catch(error){
            console.error(error);
        }
    }
    
    return(
        <div className="edit-profile-page">

            <Navigation />

            <PageHeader
                label="Profile Info"
                title="Change your Bio"
                description="Fill the form below and save the changes when you finish!"
            />

            <form
                className="edit-profile-form"
                onSubmit={handleSubmit}
            >

                <div className="form-group">

                    <label>
                        Bio
                    </label>

                    <textarea
                        placeholder="Tell other users about yourself..."
                        value={bio}
                        onChange={e => setBio(e.target.value)}
                    />

                    <p className="bio-counter">
                        {bio.length} characters
                    </p>

                </div>

                <button
                    className="save-profile-btn"
                    type="submit"
                >
                    Save Changes
                </button>

            </form>

            <Footer />

        </div>
    )
}