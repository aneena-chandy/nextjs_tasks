/*Example of a GET request using the Native Fetch API.*/

async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        console.log("Users:");
        console.log(users);
    } catch (error) {
        console.error(error.message);
    }
}

getUsers();