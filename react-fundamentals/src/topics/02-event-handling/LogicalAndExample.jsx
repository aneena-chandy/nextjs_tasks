import React, { useState } from "react";

function LogicalAndExample() {

    const [showMessage, setShowMessage] = useState(false);

    return (
        <div>
            <h2>Show / Hide Message</h2>

            <button onClick={() => setShowMessage(!showMessage)}>
                Toggle Message
            </button>

            {showMessage && (
                <h3>Hello! Welcome to React Learning.</h3>
            )}

        </div>
    );
}

export default LogicalAndExample;