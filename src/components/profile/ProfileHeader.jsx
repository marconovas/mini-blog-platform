import { Link } from "react-router-dom";

import "./ProfileHeader.css";

export default function ProfileHeader({
  user,
  isOwner
}) {

    console.log(user);

  return (
    <header className="profile-header">

        <span className="user-avatar">
            {user.name.charAt(0).toUpperCase()}
        </span>

        <h1>
            {user.name}
        </h1>

        <p className="profile-date">
            Joined {
            new Date(user.createdAt).toLocaleDateString(
                "en-US",
                {
                year: "numeric",
                month: "long"
                }
            )
            }
        </p>

        <div className="profile-divider" />

        <div className="profile-stats">

            <div className="stat-item">
            <strong>{user.posts.length}</strong>
            <span>Posts</span>
            </div>

            <div className="stat-item">
            <strong>{user.comments.length}</strong>
            <span>Comments</span>
            </div>

        </div>

        {/* EDIT PROFILE PAGE AND ACTION MISSING! */}
        {isOwner && (
            <Link to={`${user.id}/edit`}>
                Edit Profile
            </Link>
        )}

    </header>
  );
}