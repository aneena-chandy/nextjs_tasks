import TopicPageLayout from "./TopicPageLayout";
import ExampleCard from "./ExampleCard";

import Portfolio from "../Portfolio";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";

function PortfolioPage() {

    return (
        <TopicPageLayout
            number="00"
            title="Portfolio Components"
            description="Building reusable React components for a personal portfolio."
        >

            <ExampleCard title="Portfolio" description="Personal portfolio component.">
                <Portfolio />
            </ExampleCard>

            <ExampleCard title="About" description="About section component.">
                <About />
            </ExampleCard>

            <ExampleCard title="Projects" description="Project listing component.">
                <Projects />
            </ExampleCard>

            <ExampleCard title="Contact" description="Contact section component.">
                <Contact />
            </ExampleCard>

        </TopicPageLayout>
    );
}

export default PortfolioPage;