"use strict";
//Fetch Function
async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
        throw new Error("Unable to fetch users");
    }
    return response.json();
}
//Usage
async function loadUsers() {
    try {
        const users = await getUsers();
        console.log(users[0].name);
        console.log(users[0].email);
        console.log(users[0].address.city);
    }
    catch (error) {
        console.log(error);
    }
}
loadUsers();
