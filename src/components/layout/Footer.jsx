import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    return(
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h2>DevBlog</h2>

                    <p>
                        Share ideas, code and inspiration
                        with developers around the world.
                    </p>
                </div>

                <div className="footer-links">
                    {/* CHANGE LINKS */}
                    <Link to={"/"}>Home</Link>
                    <Link to={"/posts"}>Posts</Link>
                    <a href="/login">Login</a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 DevBlog. Marco Novas Medina. All rights reserved.</p>
            </div>
        </footer>
    )
}