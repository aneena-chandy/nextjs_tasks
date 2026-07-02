/*Example of error handling.
Since the domain doesn't exist, fetch() cannot connect to the server, 
so Node.js throws a network error, which is caught by your catch block.*/

async function loadData() {
    try {
        const response = await fetch("https://invalid-url-example.com");

        if (!response.ok) {
            throw new Error("Network response was not OK");
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

loadData();