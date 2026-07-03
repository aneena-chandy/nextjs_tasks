const button = document.getElementById("loadUsers");
const userList = document.getElementById("userList");

button.addEventListener("click", loadUsers);

async function loadUsers() {
    userList.innerHTML = "Loading...";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        userList.innerHTML = "";

        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `${user.name} - ${user.email}`;

        });

    } catch (error) {
        userList.innerHTML = `<li>${error.message}</li>`;
    }
}