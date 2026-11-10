import TopicPageLayout from "./TopicPageLayout";
import ExampleCard from "./ExampleCard";

import ClickExample from "../topics/02-event-handling/ClickExample";
import CounterExample from "../topics/02-event-handling/CounterExample";
import InputExample from "../topics/02-event-handling/InputExample";
import FormExample from "../topics/02-event-handling/FormExample";
import LikeButton from "../topics/02-event-handling/LikeButton";
import CharacterCounter from "../topics/02-event-handling/CharacterCounter";
import LoginForm from "../topics/02-event-handling/LoginForm";

function EventHandlingPage() {

    return (
        <TopicPageLayout
            number="03"
            title="Event Handling"
            description="Handle user interactions using React event handlers."
        >

            <ExampleCard title="Click Event" description="Handle button click events.">
                <ClickExample />
            </ExampleCard>

            <ExampleCard title="Counter Example" description="Update a counter using events and state.">
                <CounterExample />
            </ExampleCard>

            <ExampleCard title="Input Event" description="Capture and display input values.">
                <InputExample />
            </ExampleCard>

            <ExampleCard title="Form Handling" description="Handle form submission in React.">
                <FormExample />
            </ExampleCard>

            <ExampleCard title="Task 01 - Like Button" description="Practice useState and onClick events.">
                <LikeButton />
            </ExampleCard>
            <ExampleCard title="Task 02 - Character Counter" description="Track character count and enforce a maximum limit.">
                <CharacterCounter />
            </ExampleCard>
             <ExampleCard title="Task 03 - Login Form Validation" description="Validate empty fields and display conditional error and success messages.">
                <LoginForm />
            </ExampleCard>

        </TopicPageLayout>
    );
}

export default EventHandlingPage;