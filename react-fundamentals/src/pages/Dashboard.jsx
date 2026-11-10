import { Link } from "react-router-dom";
import "../App.css";

function Dashboard() {

    const topics = [
         {
            number: "01",
            title: "Interview Questions & Answers",
            description: "Prepare for React interviews with topic-wise questions, detailed answers and code examples.",
            path: "/interview-questions",
            color: "overview-purple",
            icon: "🎯",
            examples: "Question Bank"
        },
        {
            number: "02",
            title: "Portfolio Components",
            description: "Personal React components and reusable UI.",
            path: "/portfolio",
            color: "overview-blue",
            icon: "💼",
            examples: "4 Examples"
        },
        {
            number: "03",
            title: "Components & Props",
            description: "JSX, reusable components, props and children.",
            path: "/components",
            color: "overview-purple",
            icon: "🧩",
            examples: "8 Examples"
        },
        {
            number: "04",
            title: "Local State Management",
            description: "Manage component data using useState Hook.",
            path: "/use-state",
            color: "overview-green",
            icon: "⚡",
            examples: "1 Example"
        },
        {
            number: "05",
            title: "Event Handling",
            description: "Handle clicks, inputs, forms and user interactions.",
            path: "/event-handling",
            color: "overview-orange",
            icon: "🖱️",
            examples: "5 Examples + Tasks"
        },
        {
            number: "06",
            title: "Conditional Rendering",
            description: "Display dynamic UI based on conditions.",
            path: "/conditional-rendering",
            color: "overview-pink",
            icon: "🔀",
            examples: "4 Examples"
        },
         {
            number: "07",
            title: "Dynamic UI Lists & Unique Keys",
            description: "Display dynamic data, render lists using map()",
            path: "/list-keys",
            color: "overview-blue",
            icon: "✨",
            examples: "4 Examples"
        }
       
    ];

    return (

        <div className="learning-app">

            <header className="hero-section">

                <div className="hero-container">

                    <div className="hero-top">

                        <div className="brand">
                            <div className="brand-icon">⚛</div>
                            <span>React Learning Hub</span>
                        </div>

                        <span className="learning-badge">
                            ● Learning Mode
                        </span>

                    </div>

                    <div className="hero-content">

                        <span className="hero-label">
                            MY DEVELOPMENT JOURNEY
                        </span>

                        <h1>Master React Development</h1>

                        <p>
                            Learn React concepts through practical examples,
                            interactive coding and hands-on projects.
                        </p>

                        <div className="hero-tags">
                            <span>React</span>
                            <span>JavaScript</span>
                            <span>Hands-on Practice</span>
                        </div>

                    </div>

                    <div className="dashboard-stats">

                        <div className="stat-card">
                            <span className="stat-icon">📚</span>
                            <div>
                                <h3>{topics.length}</h3>
                                <p>Learning Topics</p>
                            </div>
                        </div>

                        <div className="stat-card">
                            <span className="stat-icon">💻</span>
                            <div>
                                <h3>20+</h3>
                                <p>Practical Examples</p>
                            </div>
                        </div>

                        <div className="stat-card">
                            <span className="stat-icon">⚛</span>
                            <div>
                                <h3>React</h3>
                                <p>Learning Framework</p>
                            </div>
                        </div>

                    </div>

                </div>

            </header>

            <main className="learning-content">

                <section className="overview-section">

                    <div className="section-intro">

                        <span className="section-label">
                            MY LEARNING PATH
                        </span>

                        <h2>Learning Dashboard</h2>

                        <p>
                            Select a topic to explore its tutorials,
                            practical examples and exercises.
                        </p>

                    </div>

                    <div className="overview-grid">

                        {topics.map((topic) => (

                            <Link
                                to={topic.path}
                                className={`overview-card ${topic.color}`}
                                key={topic.number}
                            >

                                <span className="overview-number">
                                    {topic.number}
                                </span>

                                <div className="dashboard-topic-icon">
                                    {topic.icon}
                                </div>

                                <h3>{topic.title}</h3>

                                <p>{topic.description}</p>

                                <span className="topic-example-count">
                                    {topic.examples}
                                </span>

                                <span className="overview-link">
                                    Explore Topic →
                                </span>

                            </Link>

                        ))}

                    </div>

                </section>

            </main>

            <footer className="learning-footer">

                <div className="footer-brand">
                    ⚛ React Learning Hub
                </div>

                <p>
                    Built with React | Learning through practical examples
                </p>

                <span>Keep Learning. Keep Building.</span>

            </footer>

        </div>
    );
}

export default Dashboard;