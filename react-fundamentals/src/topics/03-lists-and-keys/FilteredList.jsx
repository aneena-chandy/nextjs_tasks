import { useState } from "react";

function FilteredList() {
    const [search, setSearch] = useState("");

    const employees = [
        { id: 1, name: "Aneena", role: "Developer" },
        { id: 2, name: "John", role: "Designer" },
        { id: 3, name: "Anu", role: "Developer" },
        { id: 4, name: "David", role: "Tester" }
    ];

    const filteredEmployees = employees.filter((employee) =>
        employee.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h3>Search Employees</h3>

            <input
                type="text"
                placeholder="Search employee..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {filteredEmployees.map((employee) => (
                <p key={employee.id}>
                    {employee.name} - {employee.role}
                </p>
            ))}

            {filteredEmployees.length === 0 && (
                <p>No employees found.</p>
            )}
        </div>
    );
}

export default FilteredList;