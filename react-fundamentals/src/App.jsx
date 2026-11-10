
import Portfolio from "./Portfolio";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

import Card from "./Card";
import UserCard from "./UserCard";
import Product from "./Product";
import Skills from "./Skills";
import Button from "./Button";

import UseStateDemo from "./topics/01-useState/UseStateDemo";

import ClickExample from "./topics/02-event-handling/ClickExample";
import CounterExample from "./topics/02-event-handling/CounterExample";
import InputExample from "./topics/02-event-handling/InputExample";
import FormExample from "./topics/02-event-handling/FormExample";
import IfElseExample from "./topics/02-event-handling/IfElseExample";
import TernaryExample from "./topics/02-event-handling/TernaryExample";
import LogicalAndExample from "./topics/02-event-handling/LogicalAndExample";
import PasswordToggle from "./topics/02-event-handling/PasswordToggle";

import "./App.css";


// ==========================================
// REUSABLE TOPIC SECTION
// ==========================================

function TopicSection({
    id,
    number,
    title,
    description,
    children
}) {
    return (
        <section id={id} className="topic-section">

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
    );
}


// ==========================================
// REUSABLE EXAMPLE CARD
// ==========================================

function ExampleCard({
    title,
    description,
    children
}) {
    return (
        <div className="example-card">

            <div className="example-card-heading">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

            <div className="example-demo">
                {children}
            </div>

        </div>
    );
}


// ==========================================
// MAIN APP
// ==========================================

function App() {

    const city = "Kochi";

    const skills = ["React", "Node", "Laravel"];

    function sayHello() {
        alert("Hello from Parent!");
    }

    return (

        <div className="learning-app">

            {/* ==================================
                HERO HEADER
            ================================== */}

            <header className="hero-section">

                <div className="hero-container">

                    <div className="hero-top">

                        <div className="brand">
                            <div className="brand-icon">
                                ⚛
                            </div>

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

                        <h1>
                            Master React Development
                        </h1>

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

                    {/* Dashboard Statistics */}

                    <div className="dashboard-stats">

                        <div className="stat-card">
                            <span className="stat-icon">📚</span>
                            <div>
                                <h3>04</h3>
                                <p>Learning Topics</p>
                            </div>
                        </div>

                        <div className="stat-card">
                            <span className="stat-icon">💻</span>
                            <div>
                                <h3>17+</h3>
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


            {/* ==================================
                NAVIGATION
            ================================== */}

            <nav className="topic-nav">

                <div className="nav-inner">

                    <a href="#overview">Overview</a>

                    <a href="#portfolio">Portfolio</a>

                    <a href="#components">Components & Props</a>

                    <a href="#state">useState</a>

                    <a href="#events">Event Handling</a>

                    <a href="#conditional">Conditional Rendering</a>

                </div>

            </nav>


            {/* ==================================
                MAIN CONTENT
            ================================== */}

            <main className="learning-content">


                {/* ==================================
                    OVERVIEW
                ================================== */}

                <section id="overview" className="overview-section">

                    <div className="section-intro">

                        <span className="section-label">
                            MY LEARNING PATH
                        </span>

                        <h2>Learning Modules</h2>

                        <p>
                            Explore each React topic and practice
                            with individual examples.
                        </p>

                    </div>

                    <div className="overview-grid">

                        <a href="#portfolio" className="overview-card overview-blue">
                            <span className="overview-number">00</span>
                            <h3>Portfolio</h3>
                            <p>Personal React components</p>
                            <span className="overview-link">Explore Topic →</span>
                        </a>

                        <a href="#components" className="overview-card overview-purple">
                            <span className="overview-number">01</span>
                            <h3>Components & Props</h3>
                            <p>Reusable components and props</p>
                            <span className="overview-link">Explore Topic →</span>
                        </a>

                        <a href="#state" className="overview-card overview-green">
                            <span className="overview-number">02</span>
                            <h3>Local State Management</h3>
                            <p>Understanding useState Hook</p>
                            <span className="overview-link">Explore Topic →</span>
                        </a>

                        <a href="#events" className="overview-card overview-orange">
                            <span className="overview-number">03</span>
                            <h3>Event Handling</h3>
                            <p>Clicks, inputs and forms</p>
                            <span className="overview-link">Explore Topic →</span>
                        </a>

                        <a href="#conditional" className="overview-card overview-pink">
                            <span className="overview-number">04</span>
                            <h3>Conditional Rendering</h3>
                            <p>Dynamic UI based on conditions</p>
                            <span className="overview-link">Explore Topic →</span>
                        </a>

                    </div>

                </section>


                {/* ==================================
                    TOPIC 00 - PORTFOLIO
                ================================== */}

                <TopicSection
                    id="portfolio"
                    number="00"
                    title="Portfolio Components"
                    description="Building reusable React components for a personal portfolio."
                >

                    <ExampleCard
                        title="Portfolio"
                        description="Personal portfolio component."
                    >
                        <Portfolio />
                    </ExampleCard>

                    <ExampleCard
                        title="About"
                        description="About section component."
                    >
                        <About />
                    </ExampleCard>

                    <ExampleCard
                        title="Projects"
                        description="Project listing component."
                    >
                        <Projects />
                    </ExampleCard>

                    <ExampleCard
                        title="Contact"
                        description="Contact section component."
                    >
                        <Contact />
                    </ExampleCard>

                </TopicSection>


                {/* ==================================
                    TOPIC 01 - COMPONENTS & PROPS
                ================================== */}

                <TopicSection
                    id="components"
                    number="01"
                    title="Components & Props"
                    description="Understanding JSX, reusable components, props and children."
                >

                    <ExampleCard
                        title="JSX & Variables"
                        description="Display JavaScript variables inside JSX."
                    >
                        <h4>My City</h4>
                        <p>City: {city}</p>
                    </ExampleCard>


                    <ExampleCard
                        title="Reusable Card"
                        description="Passing title and description through props."
                    >
                        <Card
                            title="React Basics"
                            description="Learn JSX syntax and components."
                        />
                    </ExampleCard>


                    <ExampleCard
                        title="UserCard Component"
                        description="Passing different names to the same component."
                    >
                        <UserCard name="John" />
                        <UserCard name="Alice" />
                        <UserCard name="David" />
                    </ExampleCard>


                    <ExampleCard
                        title="Product Component"
                        description="Passing string and number props."
                    >
                        <Product name="Laptop" price={55000} />
                        <Product name="Phone" price={25000} />
                        <Product name="Tablet" price={18000} />
                    </ExampleCard>


                    <ExampleCard
                        title="Props with Arrays"
                        description="Passing an array of skills to a component."
                    >
                        <Skills skills={skills} />
                    </ExampleCard>


                    <ExampleCard
                        title="Props with Functions"
                        description="Passing a function from parent to child."
                    >
                        <Button onClick={sayHello} />
                    </ExampleCard>


                    <ExampleCard
                        title="Children Props"
                        description="Passing JSX elements as children."
                    >
                        <Card>
                            <h3>React Course</h3>
                            <p>Learn Components</p>
                        </Card>
                    </ExampleCard>


                    <ExampleCard
                        title="Children with Button"
                        description="Passing interactive elements as children."
                    >
                        <Card>
                            <button>Buy Now</button>
                        </Card>
                    </ExampleCard>

                </TopicSection>


                {/* ==================================
                    TOPIC 02 - USE STATE
                ================================== */}

                <TopicSection
                    id="state"
                    number="02"
                    title="Local State Management"
                    description="Manage component data and update UI using the useState Hook."
                >

                    <ExampleCard
                        title="useState Demo"
                        description="Practice state updates and interactive components."
                    >
                        <UseStateDemo />
                    </ExampleCard>

                </TopicSection>


                {/* ==================================
                    TOPIC 03 - EVENT HANDLING
                ================================== */}

                <TopicSection
                    id="events"
                    number="03"
                    title="Event Handling"
                    description="Handle user interactions using React event handlers."
                >

                    <ExampleCard
                        title="Click Event"
                        description="Handle button click events."
                    >
                        <ClickExample />
                    </ExampleCard>


                    <ExampleCard
                        title="Counter Example"
                        description="Update a counter using events and state."
                    >
                        <CounterExample />
                    </ExampleCard>


                    <ExampleCard
                        title="Input Event"
                        description="Capture and display input values."
                    >
                        <InputExample />
                    </ExampleCard>


                    <ExampleCard
                        title="Form Handling"
                        description="Handle form submission in React."
                    >
                        <FormExample />
                    </ExampleCard>

                </TopicSection>


                {/* ==================================
                    TOPIC 04 - CONDITIONAL RENDERING
                ================================== */}

                <TopicSection
                    id="conditional"
                    number="04"
                    title="Conditional Rendering"
                    description="Display different UI elements based on conditions."
                >

                    <ExampleCard
                        title="If / Else Example"
                        description="Render content using if/else conditions."
                    >
                        <IfElseExample />
                    </ExampleCard>


                    <ExampleCard
                        title="Ternary Operator"
                        description="Render elements using the ternary operator."
                    >
                        <TernaryExample />
                    </ExampleCard>


                    <ExampleCard
                        title="Logical AND"
                        description="Conditionally display elements using &&."
                    >
                        <LogicalAndExample />
                    </ExampleCard>


                    <ExampleCard
                        title="Password Toggle"
                        description="Show or hide password using conditional rendering."
                    >
                        <PasswordToggle />
                    </ExampleCard>

                </TopicSection>


            </main>


            {/* ==================================
                FOOTER
            ================================== */}

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

export default App;
