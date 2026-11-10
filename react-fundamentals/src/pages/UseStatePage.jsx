import TopicPageLayout from "./TopicPageLayout";
import ExampleCard from "./ExampleCard";

import UseStateDemo from "../topics/01-useState/UseStateDemo";

function UseStatePage() {

    return (
        <TopicPageLayout
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

        </TopicPageLayout>
    );
}

export default UseStatePage;