import "./CommentCard.css";

export default function CommentCard({ 
    comment, 
    canDelete = false,
    handleDeleteComment 
}) {
    
    return(
        <article className="comment-card">

            <div className="comment-header">

                {canDelete ? (
                    <h4>
                        Comment on: {comment.post?.title}
                    </h4>
                ) : (
                    <h4>
                        {comment.user?.name}
                    </h4>
                )}

                <span>
                    {new Date(comment.createdAt).toLocaleDateString()}
                </span>

            </div>

            <p className="comment-content">
                {comment.content}
            </p>
            
            {canDelete && (
                <button
                    className="delete-comment-btn"
                    onClick={() => handleDeleteComment(comment.id)}
                >
                    Delete Comment
                </button>
            )}

        </article>
    );
}