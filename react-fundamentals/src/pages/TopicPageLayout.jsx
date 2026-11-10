import { useNavigate } from "react-router-dom";

function TopicPageLayout({ number, title, description, children }) {

    const navigate = useNavigate();

    return (
        <div className="learning-app">

            <header className="hero-section">
                <div className="hero-container">

                    <div className="brand">
                        <div className="brand-icon">⚛</div>
                        <span>React Learning Hub</span>
                    </div>

                    <div className="hero-content">
                        <span className="hero-label">
                            MY DEVELOPMENT JOURNEY
                        </span>

                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>

                </div>
            </header>

            <main className="learning-content">

                <button
                    className="back-button"
                    onClick={() => navigate("/")}
                >
                    ← Back to Dashboard
                </button>

                <section className="topic-section">

                    <div className="topic-heading">
                        <div className="topic-number">
                            {number}
                        </div>

                        <div className="topic-title-content">
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </div>
                    </div>

                    <div className="examples-grid">
                        {children}
                    </div>

                </section>

            </main>

            <footer className="learning-footer">
                <div className="footer-brand">
                    ⚛ React Learning Hub
                </div>

                <p>Built with React | Learning through practical examples</p>

                <span>Keep Learning. Keep Building.</span>
            </footer>

        </div>
    );
}

export default TopicPageLayout;