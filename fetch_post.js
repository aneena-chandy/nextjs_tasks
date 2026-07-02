/*Example of a POST request.*/

async function createPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Learning Fetch API",
                body: "This is a sample post.",
                userId: 1
            })
        });

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

createPost();