interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

async function getUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    const user: User = await response.json();

    console.log(user.name);
    console.log(user.email);
}