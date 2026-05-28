import "./PageHeader.css";

export default function PageHeader({
    label,
    title,
    description
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

        </header>
    )
}