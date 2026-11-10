import React from "react";

function ClickExample() {

    const handleClick = () => {
        alert("Button clicked successfully!");
    };

    return (
        <div>
            <h2>Click Event Example</h2>

            <button onClick={handleClick}>
                Click Me
            </button>
        </div>
    );
}

export default ClickExample;