import { useState, useEffect } from "react";

function ApiFetching() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const controller = new AbortController();

        const fetchUsers = async () => {

            try {

                setLoading(true);

                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users",
                    { signal: controller.signal }
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }

                const data = await response.json();

                setUsers(data);

            } catch (error) {

                if (error.name !== "AbortError") {
                    setError(error.message);
                }

            } finally {

                if (!controller.signal.aborted) {
                    setLoading(false);
                }

            }
        };

        fetchUsers();

        return () => {
            controller.abort();
        };

    }, []);

    if (loading) return <p>Loading users...</p>;

    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>User List</h2>

            {users.map(user => (
                <div key={user.id}>
                    <h4>{user.name}</h4>
                    <p>{user.email}</p>
                </div>
            ))}

        </div>
    );
}

export default ApiFetching;