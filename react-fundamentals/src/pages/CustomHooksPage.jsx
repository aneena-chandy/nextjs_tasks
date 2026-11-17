import TopicPageLayout from "./TopicPageLayout";
import ExampleCard from "./ExampleCard";

import RegistrationForm from "../topics/04-custom-hooks/RegistrationForm";
import ApiFetching from "../topics/04-custom-hooks/ApiFetching";

function CustomHooksPage() {

    return (
        <TopicPageLayout
            number="08"
            title="Controlled Component"
            description="It's a form element whose value is managed by React state."
        >

            <ExampleCard title="Controlled Component" description="Always use controlled inputs when you need validation, conditional fields,or real-time UI updates">
                <RegistrationForm />
            </ExampleCard>
             <ExampleCard title="API fetching" description="Used to handle side effects in functional components.">
                <ApiFetching />
            </ExampleCard>
          


           

        </TopicPageLayout>
    );
}

export default CustomHooksPage;