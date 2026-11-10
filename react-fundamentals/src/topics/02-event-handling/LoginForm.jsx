import React, { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const newErrors = {};

        if (!email.trim()) {
            newErrors.email = "Email is required";
        }

        if (!password.trim()) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setSuccessMessage("Login form submitted successfully!");
        } else {
            setSuccessMessage("");
        }
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setErrors((previousErrors) => ({
            ...previousErrors,
            email: "",
        }));
        setSuccessMessage("");
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setErrors((previousErrors) => ({
            ...previousErrors,
            password: "",
        }));
        setSuccessMessage("");
    };

    return (
        <div className="login-form">
            <h2>Login Form</h2>

            <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <label htmlFor="email">Email</label>

                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                    />

                    {errors.email && (
                        <p className="login-error">{errors.email}</p>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>

                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter your password"
                    />

                    {errors.password && (
                        <p className="login-error">{errors.password}</p>
                    )}
                </div>

                <button type="submit">Login</button>

                {successMessage && (
                    <p className="login-success">{successMessage}</p>
                )}
            </form>
        </div>
    );
}

export default LoginForm;
