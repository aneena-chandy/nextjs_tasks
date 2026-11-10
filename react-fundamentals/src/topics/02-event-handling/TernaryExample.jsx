import React, { useState } from "react";

function TernaryExample() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <h2>Login Status</h2>

            <h3>
                {isLoggedIn
                    ? "Welcome User!"
                    : "Please Login"}
            </h3>

            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Logout" : "Login"}
            </button>
        </div>
    );
}

export default TernaryExample;