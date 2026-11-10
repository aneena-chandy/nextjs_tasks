const interviewQuestions = [
    {
        id: "todo-1",
        topic: "Mini Todo Application",
        difficulty: "Beginner",
        source: "ChatGPT Generated",
        question: "What is the difference between map() and filter() in JavaScript?",
        answer: `map() and filter() are JavaScript array methods.

map():
- Transforms every element in an array.
- Returns a new array with the same number of elements.
- Commonly used to display lists in React.

filter():
- Checks each element against a condition.
- Returns a new array containing only matching elements.
- Commonly used to remove items from a React list.`,
        code: `const numbers = [1, 2, 3, 4, 5];

// map() transforms every element
const doubled = numbers.map((number) => number * 2);

console.log(doubled);
// [2, 4, 6, 8, 10]

// filter() selects matching elements
const evenNumbers = numbers.filter(
    (number) => number % 2 === 0
);

console.log(evenNumbers);
// [2, 4]`,
        reviewed: false,
    },
    {
        id: "todo-2",
        topic: "Mini Todo Application",
        difficulty: "Beginner",
        source: "ChatGPT Generated",
        question: "Why do we use the spread operator when adding a task?",
        answer: `The spread operator (...) copies the existing elements of an array into a new array.

In React, we use it to preserve the existing tasks and add the new task without modifying the original state array.

This follows the principle of immutable state updates.`,
        code: `setTasks((previousTasks) => [
    ...previousTasks,
    newTask,
]);`,
        reviewed: false,
    },
    {
        id: "todo-3",
        topic: "Mini Todo Application",
        difficulty: "Intermediate",
        source: "ChatGPT Generated",
        question: "Why should we avoid directly modifying a React state array?",
        answer: `React state should be treated as immutable.

Directly modifying an existing array using methods such as push() or splice() does not create a new array reference.

React relies on state updates to determine when to re-render components. Creating a new array makes the state change clear and predictable.

Instead, use methods such as map(), filter(), and the spread operator.`,
        code: `// Avoid directly modifying state
tasks.push(newTask);

// Recommended approach
setTasks((previousTasks) => [
    ...previousTasks,
    newTask,
]);`,
        reviewed: false,
    },
    {
        id: "todo-4",
        topic: "Mini Todo Application",
        difficulty: "Intermediate",
        source: "ChatGPT Generated",
        question: "What is the purpose of the key property when rendering a list in React?",
        answer: `The key property helps React identify individual elements in a list.

When a list changes, React uses keys to identify which items were added, removed, or updated.

Keys should be unique among sibling elements and stable between renders.

Avoid using array indexes as keys when the list can be reordered or items can be deleted.`,
        code: `{tasks.map((item) => (
    <li key={item.id}>
        {item.title}
    </li>
))}`,
        reviewed: false,
    },
    {
        id: "todo-5",
        topic: "Mini Todo Application",
        difficulty: "Intermediate",
        source: "ChatGPT Generated",
        question: "How does React automatically update the task count?",
        answer: `The task count is calculated using tasks.length.

When setTasks() updates the state, React schedules a re-render. During the next render, tasks.length is calculated using the updated array.

We do not need a separate state variable to store the task count because it can be derived from the existing tasks state.`,
        code: `const [tasks, setTasks] = useState([]);

return (
    <p>Total Tasks: {tasks.length}</p>
);`,
        reviewed: false,
    },
    {
        id: "todo-6",
        topic: "Mini Todo Application",
        difficulty: "Beginner",
        source: "ChatGPT Generated",
        question: "What is the difference between tasks.length === 0 and tasks.length > 0?",
        answer: `tasks.length === 0 checks whether the array is empty.

tasks.length > 0 checks whether the array contains at least one element.

These conditions are useful for conditional rendering in React.`,
        code: `{tasks.length === 0 ? (
    <p>No tasks available</p>
) : (
    <ul>
        {tasks.map((item) => (
            <li key={item.id}>{item.title}</li>
        ))}
    </ul>
)}`,
        reviewed: false,
    },
];

export default interviewQuestions;