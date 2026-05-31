import { Link } from "react-router-dom";
import "./PageHeader.css";

export default function PageHeader({
    label,
    title,
    description,
    buttonText,
    buttonLink
}) {
    return(

        <header className="posts-header">
            
            {label && (
                <span className="post-header-label">
                    {label}
                </span>
            )}

            <h1>
                {title}
            </h1>

            <p>
                {description}
            </p>

            {buttonText && (
                <Link
                    to={buttonLink}
                    className="header-btn"
                >
                    {buttonText}
                </Link>
            )}

        </header>
    )
}