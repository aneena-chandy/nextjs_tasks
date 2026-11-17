import TopicPageLayout from "./TopicPageLayout";
import ExampleCard from "./ExampleCard";

import ProductAxios from "../topics/fetch-axios/ProductAxios";


function ListAndKeysPage() {

    return (
        <TopicPageLayout
            number="10"
            title="Fetch API and Axios"
            description="API fetching, http requests, and displaying data from an external source."
        >

            <ExampleCard title="Axios" description="Third-party JavaScript library used to make HTTP requests.">
                <ProductAxios />
            </ExampleCard>
           

        </TopicPageLayout>
    );
}

export default ListAndKeysPage;