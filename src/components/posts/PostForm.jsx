import "./PostForm.css";

export default function PostForm({
    title,
    content,
    handleSubmit,
    setTitle,
    setContent
}) {

    return(
        <form
            className="post-form"
            onSubmit={handleSubmit}
        >

            <div className="form-group">

                <label>
                    Post Title
                </label>

                <input
                    type="text"
                    placeholder="Post Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

            </div>

            <div className="form-group">

                <label>
                    Content
                </label>

                <textarea
                    placeholder="Write your post..."
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />

            </div>

            <button
                className="publish-btn"
                type="submit"
            >
                Publish Post
            </button>

        </form>
    )
}