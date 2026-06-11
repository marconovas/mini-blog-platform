import "./PostDetail.css";

export default function PostDetail({ post, isOwner, handleDelete }) {

    return (
        <section className="post-detail">

            <div className="post-author">
                <span>Author</span>

                <h3>{post.user.name}</h3>
            </div>

            <span className="post-category">
                Development
            </span>

            <h1 className="post-title">
                {post.title}
            </h1>

            <div className="post-meta">
                <span>{new Date(post.updatedAt).toLocaleDateString()}</span>
            </div>

            {isOwner && (
                <div className="post-actions">
                    <button
                        className="hero-btn delete-btn"
                        onClick={handleDelete}
                    >
                        Delete Post
                    </button>
                </div>
            )}

            <article className="post-content">
                <p>{post.content}</p>
            </article>

        </section>
    );
}