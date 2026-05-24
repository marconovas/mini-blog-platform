import "./CommentCard.css";

export default function CommentCard({ comment }) {
    
    return(
        <article className="comment-card">

            <div className="comment-header">
                <h4>{comment.user.name}</h4>

                <span>
                    {new Date(comment.createdAt).toLocaleDateString()}
                </span>

            </div>

            <p className="comment-content">
                {comment.content}
            </p>

        </article>
    );
}