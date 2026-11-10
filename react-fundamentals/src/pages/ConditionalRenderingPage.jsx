import TopicPageLayout from "./TopicPageLayout";
import ExampleCard from "./ExampleCard";

import IfElseExample from "../topics/02-event-handling/IfElseExample";
import TernaryExample from "../topics/02-event-handling/TernaryExample";
import LogicalAndExample from "../topics/02-event-handling/LogicalAndExample";
import PasswordToggle from "../topics/02-event-handling/PasswordToggle";

function ConditionalRenderingPage() {

    return (
        <TopicPageLayout
            number="04"
            title="Conditional Rendering"
            description="Display different UI elements based on conditions."
        >

            <ExampleCard title="If / Else Example" description="Render content using if/else conditions.">
                <IfElseExample />
            </ExampleCard>

            <ExampleCard title="Ternary Operator" description="Render elements using the ternary operator.">
                <TernaryExample />
            </ExampleCard>

            <ExampleCard title="Logical AND" description="Conditionally display elements using &&.">
                <LogicalAndExample />
            </ExampleCard>

            <ExampleCard title="Password Toggle" description="Show or hide password using conditional rendering.">
                <PasswordToggle />
            </ExampleCard>

        </TopicPageLayout>
    );
}

export default ConditionalRenderingPage;