import React, { useState } from "react";

function PasswordToggle() {

    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <h2>Password Visibility</h2>

            <input
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="Enter password"
                onChange={(event) =>
                    setPassword(event.target.value)
                }
            />

            <button
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? "Hide Password" : "Show Password"}
            </button>

        </div>
    );
}

export default PasswordToggle;