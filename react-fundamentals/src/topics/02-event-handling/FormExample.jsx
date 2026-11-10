import React, { useState } from "react";

function FormExample() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {

        event.preventDefault();

        alert(`Email: ${email}`);

        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div>
            <h2>Login Form</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(event) =>
                        setEmail(event.target.value)
                    }
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(event) =>
                        setPassword(event.target.value)
                    }
                />

                <br /><br />

                <button type="submit">
                    Login
                </button>

            </form>
        </div>
    );
}

export default FormExample;