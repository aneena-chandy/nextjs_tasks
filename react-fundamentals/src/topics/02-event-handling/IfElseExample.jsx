import React from "react";

function IfElseExample() {

    const isLoggedIn = true;

    if (isLoggedIn) {
        return <h2>Welcome to Dashboard!</h2>;
    } else {
        return <h2>Please Login</h2>;
    }

}

export default IfElseExample;