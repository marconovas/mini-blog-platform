import "./UserInfoCard.css";

export default function UserInfoCard({ user }) {
    return(
        <section className="user-info-card">

            <div className="card-header">
                <h2>About</h2>
            </div>

            <div className="card-divider" />

            <div className="info-group">
                <span className="info-label">
                    Username
                </span>

                <p className="info-value">
                    {user.name}
                </p>
            </div>

            <div className="info-group">
                <span className="info-label">
                    Email
                </span>

                <p className="info-value">
                    {user.email}
                </p>
            </div>

            <div className="info-group">
                <span className="info-label">
                    Bio
                </span>

                <p className="info-value">
                    {user.bio || "No bio yet."}
                </p>
            </div>

        </section>
    );
}