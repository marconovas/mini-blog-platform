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
        {post.content}
      </p>

      <div className="post-footer">
        <span>{post.updatedAt}</span>

        <button className="read-more-btn">
          Read More →
        </button>
      </div>

    </article>
  );
}