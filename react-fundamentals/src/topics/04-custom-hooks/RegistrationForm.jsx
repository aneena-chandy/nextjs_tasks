// Concept	Explanation
// value	Connects input to React state
// onChange	Updates state when user types
// name	Identifies the form field
// e.target.value	Gets entered input
// preventDefault()	Prevents default page reload
// Spread operator	Preserves other form fields

// Interview tip: Always use controlled inputs when you need validation, conditional fields, dynamic forms, or real-time UI updates.


import { useState } from "react";

function RegistrationForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        department: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Employee Details:", formData);
    };

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                name="name"
                placeholder="Employee Name"
                value={formData.name}
                onChange={handleChange}
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />

            <select
                name="department"
                value={formData.department}
                onChange={handleChange}
            >
                <option value="">Select Department</option>
                <option value="Development">Development</option>
                <option value="Testing">Testing</option>
                <option value="HR">HR</option>
            </select>

            <button type="submit">Register</button>

        </form>
    );
}

export default RegistrationForm;