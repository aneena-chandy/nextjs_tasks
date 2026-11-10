import React, { useState } from "react";

function InputExample() {

    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div>
            <h2>Input Event Example</h2>

            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={handleChange}
            />

            <h3>Hello, {name}</h3>
        </div>
    );
}

export default InputExample;