import React, { useState } from "react";

function UniqueKeys() {
    const users = [
        { id: "user-101", name: "Alex" },
        { id: "user-102", name: "Sarah" },
        { id: "user-103", name: "David" }
    ];

    return (
        <div>
            <h3>Users</h3>

            {users.map((user) => (
                <div key={user.id}>
                    {user.name}
                </div>
            ))}
        </div>
    );
}

export default UniqueKeys;