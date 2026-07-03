interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    address: Address;
}

interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

//Fetch Function
async function getUsers(): Promise<User[]> {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

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

    } catch (error) {
        console.log(error);
    }

}

loadUsers();