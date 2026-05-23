import "./LoadingSpinner.css";

export default function LoadingSpinner() {

    return (
        <section className="loading-container">
            <div className="glow-spinner"></div>

            <p>Loading posts...</p>
        </section>
    );
}