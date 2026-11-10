import React, { useState } from "react";


function BasicList() {

    const languages = [
        "PHP",
        "JavaScript",
        "Python",
        "Java",
        "React"
    ];

    return (
        <div className="example-card">
            <h2>Example 1: Basic List Rendering</h2>

            <p>Programming Languages</p>

            <ul>
                {languages.map((language) => (
                    <li key={language}>
                        {language}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BasicList;
