import TopicPageLayout from "./TopicPageLayout";
import ExampleCard from "./ExampleCard";

import Card from "../Card";
import UserCard from "../UserCard";
import Product from "../Product";
import Skills from "../Skills";
import Button from "../Button";

function ComponentsPage() {

    const city = "Kochi";
    const skills = ["React", "Node", "Laravel"];

    function sayHello() {
        alert("Hello from Parent!");
    }

    return (
        <TopicPageLayout
            number="01"
            title="Components & Props"
            description="Understanding JSX, reusable components, props and children."
        >

            <ExampleCard title="JSX & Variables" description="Display JavaScript variables inside JSX.">
                <h4>My City</h4>
                <p>City: {city}</p>
            </ExampleCard>

            <ExampleCard title="Reusable Card" description="Passing title and description through props.">
                <Card title="React Basics" description="Learn JSX syntax and components." />
            </ExampleCard>

            <ExampleCard title="UserCard Component" description="Passing different names to the same component.">
                <UserCard name="John" />
                <UserCard name="Alice" />
                <UserCard name="David" />
            </ExampleCard>

            <ExampleCard title="Product Component" description="Passing string and number props.">
                <Product name="Laptop" price={55000} />
                <Product name="Phone" price={25000} />
                <Product name="Tablet" price={18000} />
            </ExampleCard>

            <ExampleCard title="Props with Arrays" description="Passing an array of skills to a component.">
                <Skills skills={skills} />
            </ExampleCard>

            <ExampleCard title="Props with Functions" description="Passing a function from parent to child.">
                <Button onClick={sayHello} />
            </ExampleCard>

            <ExampleCard title="Children Props" description="Passing JSX elements as children.">
                <Card>
                    <h3>React Course</h3>
                    <p>Learn Components</p>
                </Card>
            </ExampleCard>

            <ExampleCard title="Children with Button" description="Passing interactive elements as children.">
                <Card>
                    <button>Buy Now</button>
                </Card>
            </ExampleCard>

        </TopicPageLayout>
    );
}

export default ComponentsPage;