import PostCard from "./PostCard";
import "./PostGrid.css";

export default function PostList({posts}) {

    if (posts.length === 0) {
        return (
            <section className="empty-posts">
                <h2>No posts yet</h2>

                <p>
                    Be the first to share an idea,
                    story or inspiration.
                </p>
            </section>
        );
    }

    return(
        <section className="posts-grid">
            {posts.slice(0, 6).map(post => ( //CHANGE THIS SLICE LATER!!!
                <PostCard
                    key={post.id}
                    post={post}
                />
            ))}
        </section>
    );
}