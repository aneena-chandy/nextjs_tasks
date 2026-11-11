import TopicPageLayout from "./TopicPageLayout";
import ExampleCard from "./ExampleCard";

import BasicList from "../topics/03-lists-and-keys/BasicList";
import ObjectList from "../topics/03-lists-and-keys/ObjectList";
import UniqueKeys from "../topics/03-lists-and-keys/UniqueKeys";
import FilteredList from "../topics/03-lists-and-keys/FilteredList";
import DynamicList from "../topics/03-lists-and-keys/DynamicList";

function ListAndKeysPage() {

    return (
        <TopicPageLayout
            number="07"
            title="Dynamic UI Lists & Unique Keys"
            description="Handle displaying multiple UI elements from an array of data rather than writing every element manually."
        >

            <ExampleCard title="Basic List Rendering" description="Learn how to render arrays using map().">
                <BasicList />
            </ExampleCard>
            <ExampleCard title="Array of Objects" description="Display structured data using object properties.">
                <ObjectList />
            </ExampleCard>
             <ExampleCard title="Unique Keys" description="Understand how React identifies list elements.">
                <UniqueKeys />
            </ExampleCard>
             <ExampleCard title="Filtering a list" description="Combine filter() and map() for searching.">
                <FilteredList />
            </ExampleCard>
              <ExampleCard title="Filtering a list" description="Combine filter() and map() for searching.">
                <DynamicList />
            </ExampleCard>


           

        </TopicPageLayout>
    );
}

export default ListAndKeysPage;