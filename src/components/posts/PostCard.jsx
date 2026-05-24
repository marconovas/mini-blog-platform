import { Link } from "react-router-dom";
import "./PostCard.css";

export default function PostCard({ post }) {
  return (
    <article className="post-card">

      <span className="post-category">
        {/* ADD CATEGORY LATER */}
        Development
      </span>

      <h3 className="post-title">
        {post.title}
      </h3>

      <p className="post-description">
        {post.content.slice(0, 30)}
      </p>

      <div className="post-footer">
        <span>{new Date(post.updatedAt).toTimeString()}</span>

        <Link 
          to={`/posts/${post.id}`}
          className="read-more-btn"
        >
          Read More →
        </Link>
      </div>

    </article>
  );
}