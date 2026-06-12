import CommentCard from "./CommentCard.jsx";

function CommentsList({
    comments,
    isOwner,
    handleDeleteComment
}) {
    return (
        <section className="comments-list">

            {comments.map(comment => (
                <CommentCard
                    key={comment.id}
                    comment={comment}
                    canDelete={isOwner}
                    handleDeleteComment={handleDeleteComment}
                />
            ))}

        </section>
    );
}

export default CommentsList;