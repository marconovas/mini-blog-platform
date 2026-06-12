import "./CommentForm.css";

function CommentForm({ comment, setComment, handleComment }) {
    return(
        <form
            className="comment-form"
            onSubmit={handleComment}
        >
            <p className="comment-hint">
                Join the discussion and share your perspective.
            </p>

            <textarea
                className="comment-textarea"
                onChange={e => setComment(e.target.value)}
                placeholder="Share your thoughts..."
                value={comment}
            />

            <button
                className="comment-btn"
                type="submit"
            >
                Post Comment
            </button>

        </form>
    )
}

export default CommentForm;