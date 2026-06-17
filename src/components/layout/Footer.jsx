import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    return(
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h2>Api-Blog</h2>

                    <p>
                        Share ideas, code and inspiration
                        with people around the world.
                    </p>
                </div>

                <div className="footer-links">
                    {/* CHECK LINKS */}
                    <Link to={"/"}>Home</Link>
                    <Link to={"/posts"}>Posts</Link>
                    <Link to={"/auth/login"}>Login</Link>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 Api-Blog. Marco Novas Medina. All rights reserved.</p>
            </div>
        </footer>
    )
}