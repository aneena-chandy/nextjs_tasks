import React, { useState } from "react";

function ObjectList() {
    const employees = [
        { id: 1, name: "Aneena", role: "React Developer" },
        { id: 2, name: "John", role: "PHP Developer" },
        { id: 3, name: "Anu", role: "UI Developer" },
        { id: 4, name: "David", role: "Backend Developer" }
    ];

    return (
        <div>
            <h3>Employee Directory</h3>

            {employees.map((employee) => (
                <div key={employee.id}>
                    <h4>{employee.name}</h4>
                    <p>{employee.role}</p>
                </div>
            ))}
        </div>
    );
}

export default ObjectList;