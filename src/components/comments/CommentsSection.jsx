import CommentCard from "./CommentCard.jsx";
import "./CommentsSection.css";

export default function CommentsSection({ comments }) {
    if(comments.length === 0){
        return(
            <section className="empty-comments">
                <h2>No comments yet</h2>

                <p>
                    Be the first to leave a comment,
                    idea or inspiration.
                </p>
            </section>
        )
    }
    
    return(
        <section className="comments-section">
            
            <div className="comments-header">
                
                <h2>
                    Comments
                </h2>

                <span>
                    {comments.length} comments
                </span>
            
            </div>

            <div className="comments-list">
                {comments.map(comment => (
                    <CommentCard 
                        key={comment.id} 
                        comment={comment}
                    />
                ))}
            </div>

        </section>
    );
}