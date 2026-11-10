import TopicPageLayout from "./TopicPageLayout";
import ExampleCard from "./ExampleCard";

import BasicList from "../topics/03-lists-and-keys/BasicList";

function ListAndKeysPage() {

    return (
        <TopicPageLayout
            number="07"
            title="Dynamic UI Lists & Unique Keys"
            description="Handle displaying multiple UI elements from an array of data rather than writing every element manually."
        >

            <ExampleCard title="Click Event" description="Handle button click events.">
                <BasicList />
            </ExampleCard>

           

        </TopicPageLayout>
    );
}

export default ListAndKeysPage;